<script lang="ts">
  import { onMount } from "svelte";
  import { card_data } from "../card";
  import Modal from "./Modal.svelte";
  import { time, startTime, score, round, interval } from "../../store/store";
  import clickSrc from '../../assets/audio/click.mp3'
  import matchSrc from '../../assets/audio/match.mp3'
  
  let cards: Card[] = [
    { id: 0, flipped: false, matched: false },
    { id: 0, flipped: false, matched: false },
    { id: 1, flipped: false, matched: false },
    { id: 1, flipped: false, matched: false },
    { id: 2, flipped: false, matched: false },
    { id: 2, flipped: false, matched: false },
    { id: 3, flipped: false, matched: false },
    { id: 3, flipped: false, matched: false },
    { id: 4, flipped: false, matched: false },
    { id: 4, flipped: false, matched: false },
    { id: 5, flipped: false, matched: false },
    { id: 5, flipped: false, matched: false },
    { id: 6, flipped: false, matched: false },
    { id: 6, flipped: false, matched: false },
    { id: 7, flipped: false, matched: false },
    { id: 7, flipped: false, matched: false },
  ]
  let enableToFlip = true
  let flippedCards: {card: Card, index: number}[] = []
  let matchedCount = 0
  let isGameClear = false
  let isGameOver = false
  const clickSound = new Audio(clickSrc)
  const matchSound = new Audio(matchSrc)

  function shuffle() {
    cards = cards.sort(() => 0.5 - Math.random())
    cards.forEach(card => {
      card.flipped = false
      card.matched = false
    })
    isGameClear = false
    isGameOver = false
  }

  function moveToNextRound() {
    shuffle()
    $round += 1
  }

  function moveToRetry() {
    shuffle()
    $score = 0
    $round = 1
    $time = 100
    $startTime = 100
  }

  function flipCard(card: Card, index: number) {
    if (enableToFlip && !card.matched) {
      if (!$interval) {
        $interval = setInterval(() => {
          $time--
          if (!$time) {
            clearInterval($interval)
            $interval = 0
            if (!isGameClear) {
              isGameOver = true
            }
          }
        }, 1000);
      }
      if (flippedCards.length) {
        if (flippedCards[0].index == index)
        
        return
      }
      clickSound.pause()
      clickSound.currentTime = 0
      clickSound.play()
      flippedCards.push({card, index})
      card.flipped = true
      cards = [...cards]

      if (flippedCards.length == 2) {
        enableToFlip = false

        const card0 = flippedCards[0].card
        const card1 = flippedCards[1].card
        if (card0.id == card1.id) {
          card0.matched = true
          card1.matched = true
          enableToFlip = true
          matchedCount++
          $score += 100
          flippedCards = []
          matchSound.pause()
          matchSound.currentTime = 0
          matchSound.play()
          
          isGameClear = cards.every(card => card.matched)

          if (isGameClear) {
            $score += $time * 100 * $round
            $startTime = $time
            clearInterval($interval)
            $interval = 0
          }
        } else {
          const timeout = setTimeout(() => {
            card0.flipped = false
            card1.flipped = false
            flippedCards = []
            enableToFlip = true
            cards = [...cards]
            clearTimeout(timeout)
          }, 1000);
        }
      }
    }
  }

  onMount(() => {
    shuffle()
  })

  interface Card {
    id: number,
    flipped: boolean,
    matched: boolean,
  }
</script>

<h1>CardGrid</h1>
<ul class="game-grid">
  {#each cards as card, index}
    <li class={`card ${card.flipped? '' : 'hidden'}`} on:click={() => {
      flipCard(card, index)
      }}>
      <img src={card_data[card.id].imgUrl} alt="">
      <span>{card.id}</span>
    </li>
  {/each}
</ul>
{#if isGameClear}
  <Modal modalProps={{
    modalTitle: 'Game Clear!',
    scoreTitle: 'Score',
    btn1Text: 'NEXT',
    btn1Function: moveToNextRound
  }} />
{/if}
{#if isGameOver}
  <Modal modalProps={{
    modalTitle: 'Game Over!',
    scoreTitle: 'Final Score',
    btn1Text: 'TRY AGAIN',
    btn1Function: moveToRetry
  }} />
{/if}

<style lang="scss">
  .game-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    list-style-type: none;
    grid-gap: 2%;
    padding: 20px;

    .card {
      background-color: #fff;
      aspect-ratio: 1 / 1;
      padding: 20%;
      border-radius: 18%;

      img {
        width: 100%;
        object-fit: contain;
        display: block;
        aspect-ratio: 1 / 1;
      }
    }

    .card.hidden {
      background-color: rgba($color: #000000, $alpha: 0.5);
      background-image: url('images/quest.png');
      background-size: 30%;
      background-position: center;
      background-repeat: no-repeat;
      
      img {
        opacity: 0;
      }
    }
  }
</style>
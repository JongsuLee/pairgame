<script lang="ts">
  import { page,resetGameInfoes } from "../../store/store";
  import GamePlay from "./GamePlay.svelte";
  import GameScore from "./GameScore.svelte";
  import { onDestroy } from "svelte";
  import bgm from '../../assets/audio/bgm.mp3'
  import btn from '../../assets/audio/btn.mp3'

  export let gameTitle: string

  const _BGM = new Audio(bgm)
  const btnSound = new Audio(btn)

  function playBGM() {
    _BGM.loop = true
    _BGM.play()
  }

  function playBTN() {
    btnSound.play()
  }

  $: {
    if ($page !== 'play') {
      _BGM.pause()
      _BGM.currentTime = 0
    }
  }

  onDestroy(() => {
    _BGM.pause()
    _BGM.currentTime = 0
    _BGM.remove()
  })

</script>

{#if $page === 'title'}
  <section>
    <h1>{gameTitle}</h1>
    <div class="btn-group">
      <button 
        class="btn" 
        on:click={() => {
          $page = 'play'
          playBTN()
          playBGM()
          resetGameInfoes()
        }}>START</button>
      <button class="btn" on:click={() => {
        $page = 'score'
        playBTN()
        }}>SCORE</button>
    </div>
  </section>
{:else if $page === 'play'}
  <GamePlay />
{:else if $page === 'score'}
  <GameScore />
{/if}

<style lang="scss">
  section {
    h1 {
      font-size: 16vw;
      color: #ff3e00;
      -webkit-text-stroke: 10px rgba($color: #000000, $alpha: 0.2);
      paint-order: stroke fill;
    }

    .btn-group {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
    }
  }
</style>
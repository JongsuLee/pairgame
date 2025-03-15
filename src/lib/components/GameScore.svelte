<script lang="ts">
  import { score, page } from "../../store/store";

</script>

<main>
  <h1>GameScore</h1>
  <div class="score">
    <p class="hi-score">High score: 999,999,999</p>
    <p class="your-score">Your score: {$score}</p>
  </div>
  <button class="btn itim-regular" on:click={() => $page = 'title'}>Back to Home</button>
</main>

<style lang="scss">
  main {
    h1 {
      font-size: 12vw;
      color: #ff3e00;
      -webkit-text-stroke: 10px rgba($color: #000000, $alpha: 0.2);
      paint-order: stroke fill;
    }

    .score {
      font-size: 36px;
      font-weight: bold;
      margin: 70px 0;

      p {
        margin-bottom: 10px;
      }
    }
  }
</style>
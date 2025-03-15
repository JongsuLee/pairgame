<script lang="ts">
  import { score, round, time } from "../../store/store";

</script>

<header class="game-info">
  <dl>
    <div class="score">
      <dt>Score</dt>
      <dd>{$score}</dd>
    </div>
    <div class="round">
      <dt>Round</dt>
      <dd>{$round}</dd>
    </div>
    <div class="time">
      <dt>Time</dt>
      <dd>{$time}</dd>
    </div>
  </dl>
</header>

<style lang="scss">
  .game-info {
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    
    dl {
      display: flex;
      justify-content: space-between;
      padding: 10px 30px;
      
      dt, dd {
        font-size: max(2vw, 24px);
      }

      .round {
        color: #fff;
        -webkit-text-stroke: 6px rgba($color: #000000, $alpha: 0.2);
        paint-order: stroke fill;
      }

      .score, .time {
        color: #fff;
        text-shadow: 2px 2px rgba($color: #000000, $alpha: 0.2);
      }
    }
  }
</style>
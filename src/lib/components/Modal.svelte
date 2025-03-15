<script lang="ts">
  import { score, page } from "../../store/store";

  export let modalProps: ModalProps

  interface ModalProps {
    modalTitle: string
    scoreTitle: string
    btn1Text: string
    btn1Function: () => any
  }
</script>

<div class="modal">
  <div class="modal-container">
    <h1>{modalProps.modalTitle}</h1>
    <p class="score-title">{modalProps.scoreTitle}</p>
    <p class="score">{$score}</p>
    <button class="btn next" on:click={modalProps.btn1Function}>{modalProps.btn1Text}</button>
    <button class="btn" on:click={() => $page = 'title'}>Home</button>
  </div>
</div>

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    display: grid;
    place-items: center;

    .modal-container {
      background: #fff;
      width: 400px;
      padding: 20px;
      border-radius: 30px;
      border: 10px solid #000;
      h1 { margin-bottom: 5px; }
      .score-title {
        font-size: 20px;
        color: #666;
      }
      .score {
        font-size: 36px;
        color: #f63030;
        margin-bottom: 20px;
      }
    }

    .btn { 
      font-size: 24px; 
      &.next { color: #f63030; }
    }
  }
</style>
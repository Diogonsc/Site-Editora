<template>
  <div class="container-livros">
    <div class="livros-cont">
      <span class="h1-livros">CONHEÇA NOSSOS LIVROS</span>
      <div class="hrs-livros">
        <hr class="hr-livros-1" />
        <hr class="hr-livros-2" />
      </div>
    </div>
    <div class="livros">
      <q-card class="card-livros" v-for="n in 4" :key="n">
        <img src="../assets/img/download.png" alt="livro" />
        <p class="p-livros">MITOLOGIA</p>
        <Button
          class="button"
          label="Saiba mais"
          text="brown-6"
          color="white"
          style="
            width: 181px;
            height: 58px;
            font-size: 1.375rem;
            font-family: 'Lato';
          "
        />
      </q-card>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
};
</script>

<style lang="scss" scoped>
.container-livros {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1920px;
  height: 927px;
  background-color: #1d252b;

  .livros-cont {
    margin-left: 320px;
  }

  .h1-livros {
    left: 720px;
    text-align: left;
    font-family: "Roboto", sans-serif;
    font-size: 43px;
    font-weight: bold;
    color: #856c55;
    opacity: 1;
  }

  .hrs-livros {
    width: 250px;
    display: flex;
    padding-top: 2px;
  }

  .hr-livros-1 {
    width: 107px;
    border: 2px solid #856c55;
    opacity: 1;
  }

  .hr-livros-2 {
    width: 150px;
    border: 1px solid #856c55;
    opacity: 1;
  }

  .livros {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0px 300px;
    margin-top: 150px;

    .card-livros {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // left: 418px;
      width: 309px;
      height: 463px;
      background-color: #1d252b;

      .p-livros {
        font-family: "Lato";
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 0px;
        color: #856c55;
        opacity: 1;
        text-align: center;
      }
    }

    .card-livros:hover {
      border: 2px solid #856c55;
    }

    .card-livros img {
      top: 50px;
      width: 189px;
      height: 267px;
    }
  }
}
</style>

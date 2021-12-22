<template>
  <div class="container-cards">
    <div class="cards-cont">
      <span class="h1-treinamento">TREINAMENTO DO ESCRITOR MODERNO</span>
      <div class="hrs-cards">
        <hr class="hr-cards-1" />
        <hr class="hr-cards-2" />
      </div>
    </div>
    <div class="cards-autor">
      <div class="cards-treinamento">
        <q-card
          class="cards"
          style="width: 308px; height: 181px"
        >
          <div class="title">
            <img
              class="img-title"
              src="../assets/img/escritor.png"
              alt="escritor"
            />
            <span class="title-card">Titulo</span>
          </div>
          <p class="p-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </q-card>
        <q-card
          class="cards"
          style="width: 308px; height: 181px"
        >
          <div class="title">
            <img
              class="img-title"
              src="../assets/img/caneta.png"
              alt="caneta"
            />
            <span class="title-card">Titulo</span>
          </div>
          <p class="p-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </q-card>
        <q-card
          class="cards"
          style="width: 308px; height: 181px"
        >
          <div class="title">
            <img
              class="img-title"
              src="../assets/img/historia.png"
              alt="história"
            />
            <span class="title-card">Titulo</span>
          </div>
          <p class="p-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </q-card>
        <q-card
          class="cards"
          style="width: 308px; height: 181px"
        >
          <div class="title">
            <img
              class="img-title"
              src="../assets/img/musico.png"
              alt="musico"
            />
            <span class="title-card">Titulo</span>
          </div>
          <p class="p-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </q-card>
      </div>
      <div class="autor-milhonario">
        <img src="../assets/img/autor_milionario.png" alt="logo" />
        <Button
          class="text-brown-6"
          label="QUERO SER UM AUTOR MILHONÁRIO"
          color="brown-6"
          style="
            width: 463px;
            height: 59px;
            font-size: 1.06rem;
            font-family: 'Lato';
          "
        />
      </div>
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
.container-cards {
  display: flex;
  justify-content: center;
  flex-direction: column;

  max-width: 1920px;
  height: 780px;
  background: transparent url("../assets/img/fundo_autor.png") 0% 0% no-repeat
    padding-box;

  .cards-cont {
    position: relative;
    left: 320px;
  }

  .cards-autor {
    display: flex;
    justify-content: center;

    .cards-treinamento {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .cards {
        margin-top: 40px;
        padding: 10px 30px;
      }

      .title {
        display: flex;
        align-items: center;

        .img-title {
          width: 84px;
          height: 88px;
        }

        .title-card {
          width: 102px;
          height: 39px;
          padding-left: 30px;
          text-transform: uppercase;
          font-family: "Roboto", sans-serif;
          font-size: 30px;
          font-weight: bold;
          letter-spacing: 0px;
          color: #1a1a1a;
          opacity: 1;
        }
      }

      .p-title {
        width: 263px;
        height: 68px;
        text-align: left;
        font-family: "Lato", sans-serif;
        font-size: 20px;
        letter-spacing: 0px;
        padding-top: 10px;
        color: #1a1a1a;
        opacity: 1;
      }
    }

    .autor-milhonario {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 291px;
        height: 218px;
      }
    }
  }

  .h1-treinamento {
    left: 720px;
    text-align: left;
    font-family: "Roboto", sans-serif;
    font-size: 43px;
    font-weight: bold;
    color: #856c55;
    opacity: 1;
  }

  .hrs-cards {
    width: 250px;
    display: flex;
    padding-top: 2px;
  }

  .hr-cards-1 {
    width: 107px;
    border: 2px solid #856c55;
    opacity: 1;
  }

  .hr-cards-2 {
    width: 150px;
    border: 1px solid #856c55;
    opacity: 1;
  }
}
</style>

<template>
  <div class="container-publique">
    <div class="publique">
      <div class="container-text">
        <h1 class="h1">CONHEÇA-NOS</h1>
        <div class="hrs">
          <hr class="hr-1" />
          <hr class="hr-2" />
        </div>
        <p class="paragrafo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          accumsan lectus neque, ac cursus mauris semper rhoncus. Sed placerat
          aliquam auctor. Curabitur felis leo, porttitor fringilla lorem id,
          ornare finibus leo. In eleifend at sapien sit amet condimentum.
          Quisque non odio sit amet est fringilla iaculis et vel velit.
        </p>
        <Button
          label="PUBLIQUE SEU LIVRO"
          color="brown-6"
          text="white"
          style="
            width: 532px;
            height: 68px;
            font-size: 20px;
            font-family: Roboto;
            font-weight: normal;
          "
        />
      </div>
      <div class="">
        <img src="../assets/img/logo-mape.png" alt="Logo Mape" />
      </div>
    </div>
    <div class="cards-container">
      <div class="cards-publique">
        <q-card class="cards">
          <div class="title">
            <img
              class="img-title"
              src="../assets/img/Outline.png"
              alt="escritor"
            />
            <span class="title-card">Passo 1</span>
          </div>
          <hr class="hr-pub" />
          <p class="p-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque accumsan lectus neque, ac cursus mauris
          </p>
        </q-card>
        <q-card class="cards">
          <div class="title">
            <img class="img-title" src="../assets/img/aluna.png" alt="caneta" />
            <span class="title-card">Passo 2</span>
          </div>
          <hr />
          <p class="p-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque accumsan lectus neque, ac cursus mauris
          </p>
        </q-card>
        <q-card class="cards">
          <div class="title">
            <img
              class="img-title"
              src="../assets/img/corrigir.png"
              alt="história"
            />
            <span class="title-card">Passo 3</span>
          </div>
          <hr />
          <p class="p-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque accumsan lectus neque, ac cursus mauris
          </p>
        </q-card>
        <q-card class="cards">
          <div class="title">
            <img class="img-title" src="../assets/img/coroa.png" alt="musico" />
            <span class="title-card">Passo 4</span>
          </div>
          <hr />
          <p class="p-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque accumsan lectus neque, ac cursus mauris
          </p>
        </q-card>
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
.container-publique {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 821px;
  background: transparent url("../assets/img/img6.png") 0% 0% no-repeat
    padding-box;

  .publique {
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .cards-container {
    display: flex;
    justify-content: center;

    .cards-publique {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;

      .cards {
        width: 300px;
        height: 245px;
        margin-top: 40px;
        margin-left: 20px;
        padding: 10px 30px;
      }

      .title {
        width: 308px;
        display: flex;
        align-items: center;

        .img-title {
          width: 77px;
          height: 60px;
        }

        .title-card {
          width: 160px;
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
  }
}
.container-text {
  width: 40%;
  .hrs {
    width: 250px;
    display: flex;
    padding-bottom: 30px;
  }

  .hr-1 {
    width: 107px;
    border: 2px solid #856c55;
    opacity: 1;
  }

  .hr-2 {
    width: 150px;
    border: 1px solid #856c55;
    opacity: 1;
  }

  .h1 {
    left: 873px;
    width: 303px;
    height: 57px;
    text-align: left;
    font-family: "Roboto", sans-serif;
    font-size: 43px;
    font-weight: bold;
    color: #856c55;
    opacity: 1;
  }

  .paragrafo {
    left: 873px;
    width: 802px;
    height: 139px;
    text-align: left;
    font-family: "Lato", sans-serif;
    font-weight: normal;
    font-size: 20px;
    color: #ffffff;
    opacity: 1;
    padding-bottom: 30px;
  }
}
</style>

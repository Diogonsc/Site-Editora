<template>
  <div class="container">
    <div class="container-video">
      <q-video
        class="video"
        src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
      />
    </div>
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
        ornare finibus leo. In eleifend at sapien sit amet condimentum. Quisque
        non odio sit amet est fringilla iaculis et vel velit.
      </p>
    </div>
  </div>
  <Button
    class="btn-video"
    label="ENTRE EM CONTATO"
    color="brown-6"
    style="
      width: 416px;
      height: 64px;
      font-size: 1.375rem;
      font-family: 'Lato';
      top: -7.375rem;
      left: 53.875rem;
    "
  />
</template>
<script>
import Button from "../components/Button.vue";
export default {
  components: { Button },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1920px;
  height: 550px;
  display: flex;
  .container-video {
    width: 45.5%;
    .video {
      width: 524px;
      height: 424px;
      top: 100px;
      left: 320px;
    }
  }
  .container-text {
    width: 40%;
    padding-top: 70px;
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
      width: 554px;
      height: 182px;
      text-align: left;
      font-family: "Lato", sans-serif;
      font-size: 20px;
      color: #363636;
      opacity: 1;
      padding-bottom: 30px;
    }
  }
  .btn-video {
    left: 873px;
  }
}
</style>

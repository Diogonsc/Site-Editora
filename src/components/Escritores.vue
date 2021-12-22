<template>
  <div class="container-editores">
    <div class="escritores-cont">
      <span class="h1-escritores">NOSSOS ESCRITORES</span>
      <div class="hrs-escritores">
        <hr class="hr-escritores-1" />
        <hr class="hr-escritores-2" />
      </div>
    </div>
    <div class="container-carousel">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        control-color="brown-6"
        navigation
        padding
        height="450px"
        class="bg-grey-1 q-carousel"
      >
        <q-carousel-slide :name="1" class="column no-wrap" v-for="n in 5" :key="n">
          <div
            class="
              carousel
              row
              fit
              justify-start
              items-center
              q-gutter-xs q-col-gutter
              no-wrap
            "
          >
            <q-img
              class="rounded-borders col-2 full-height"
              src="../assets/img/foto-1.png"
            />
            <q-img
              class="rounded-borders col-2 full-height"
              src="../assets/img/foto-2.png"
            />
            <q-img
              class="rounded-borders col-2 full-height"
              src="../assets/img/foto-3.png"
            />
            <q-img
              class="rounded-borders col-2 full-height"
              src="../assets/img/foto-4.png"
            />
          </div>
        </q-carousel-slide>
        <!-- <q-carousel-slide :name="2" class="column no-wrap">
          <div
            class="
              carousel
              row
              fit
              justify-start
              items-center
              q-gutter-xs q-col-gutter
              no-wrap
            "
          >
            <q-img
              class="rounded-borders col-2 full-height"
              src="../assets/img/foto-1.png"
            />
            <q-img
              class="rounded-borders col-2 full-height"
              src="../assets/img/foto-2.png"
            />
            <q-img
              class="rounded-borders col-2 full-height"
              src="../assets/img/foto-3.png"
            />
            <q-img
              class="rounded-borders col-2 full-height"
              src="../assets/img/foto-4.png"
            />
          </div>
        </q-carousel-slide> -->
      </q-carousel>
    </div>
  </div>
</template>

<script>
// import Button from "../components/Button.vue";
import { ref } from "vue";

export default {
  // components: { Button },
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<style lang="scss" scoped>
.container-editores {
  display: flex;
  justify-content: center;
  flex-direction: column;

  max-width: 1920px;
  height: 680px;
  background: transparent url("../assets/img/fundo_escritor.png") 0% 0%
    no-repeat padding-box;
  .container-carousel {
    .carousel{
      display: flex;
      justify-content: center;
    }
  }
  .escritores-cont {
    position: relative;
    left: 320px;
    padding: 50px 0px;

    .h1-escritores {
      left: 720px;
      text-align: left;
      font-family: "Roboto", sans-serif;
      font-size: 43px;
      font-weight: bold;
      color: #856c55;
      opacity: 1;
    }

    .hrs-escritores {
      width: 250px;
      display: flex;
      padding-top: 2px;
    }

    .hr-escritores-1 {
      width: 107px;
      border: 2px solid #856c55;
      opacity: 1;
    }

    .hr-escritores-2 {
      width: 150px;
      border: 1px solid #856c55;
      opacity: 1;
    }
  }
}
</style>

<template>
  <Navbar />
  <q-banner class="img-banner">
    <div class="text-banner">
      <h3 class="h3-banner">
        '' Palavras são, na minha não tão humilde opinião, nossa inesgotável
        fonte de magia. Capazes de ferir e de curar ''.
      </h3>
      <h5 class="h5-banner">
        <hr class="hr-banner" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non elit
        ligula. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos.
      </h5>
    </div>
    <Button
      label="Visite nosso site"
      color="brown-6"
      style="width: 416px; height: 64px; top: -4.375rem; left: 72.875rem; font-size: 1.375rem; font-family: 'Lato'; "
    />
    <div class="rede-social">
      <q-icon class="sociais youtube" name="fab fa-youtube" title="youtube" />
      <q-icon
        class="sociais facebook"
        name="fab fa-facebook-f"
        title="facebook"
      />
      <q-icon
        class="sociais instagram"
        name="fab fa-instagram"
        title="instagram"
      />
      <q-icon
        class="sociais telegram"
        name="fab fa-telegram-plane"
        title="telegram"
      />
      <q-icon
        class="sociais whatsapp"
        name="fab fa-whatsapp"
        title="whatsapp"
      />
    </div>
  </q-banner>
  <Video />
  <Livros />
  <CardTreinamento />
  <Escritores />
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Button from "../components/Button.vue";
import Video from "../components/Video.vue";
import Livros from "../components/Livros.vue"
import CardTreinamento from "../components/Card-Treinamento.vue"
import Escritores from "../components/Escritores.vue"
import Footer from "../components/Footer.vue"
export default {
  components: { Navbar, Button, Video, Livros, CardTreinamento, Escritores, Footer },
};
</script>
<style lang="scss" scoped>
.img-banner {
  background: transparent url("../assets/img/header_img.png") 0% 0% no-repeat
    padding-box;
  opacity: 1;
  min-width: 1360px;
  max-width: 1920px;
  width: 100%;
  height: 61.25rem;

  .text-banner {
    position: relative;
    left: 1184px;
    top: -100px;
    .h3-banner {
      top: 16%;
      left: 61%;
      width: 21%;
      color: #ffffff;
      opacity: 1;
      font-family: "Roboto", sans-serif;
      font-size: 30px;
    }

    .h5-banner {
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
      top: 28%;
      left: 61%;
      width: 22%;
      font-family: "Roboto", sans-serif;
      font-size: 18px;
    }

    .hr-banner {
      top: 519px;
      left: 1184px;
      width: 417px;
      border: 2px solid #856c55;
      opacity: 1;
    }
  }

  .rede-social {
    display: flex;
    position: relative;
    top: 180px;
    left: 1380px;

    .sociais {
      margin-left: 15px;
      font-size: 25px;
      color: #ffffff;
      opacity: 0.8;
    }

    .youtube:hover {
      color: #c4302b;
    }

    .facebook:hover {
      color: #2958be;
    }

    .instagram:hover {
      color: #a43388;
    }

    .telegram:hover {
      color: #0ec2cf;
    }

    .whatsapp:hover {
      color: #34af23;
    }
  }
}

@media screen and (max-width: 1366px) {
  .img-banner {
    max-width: 1366px;
  }
}
</style>

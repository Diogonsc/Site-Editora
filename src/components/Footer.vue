<template>
  <footer class="footer">
    <div class="contatos">
      <div class="telefone contato">
        <span>Telefone</span>
        <a href="tel:+553133345-4567">(31)33345-4567</a>
        <a href="tel:+553133345-4567">(31)33345-4567</a>
      </div>
      <div class="email contato">
        <span>EMAIL</span>
        <a href="mailto:contato@gmail.com">CONTATO@GMAIL.COM</a>
      </div>
      <div class="rede-social contato">
        <span>REDE SOCIAIS</span>
        <div class="social">
          <q-icon
            class="sociais youtube"
            name="fab fa-youtube"
            title="youtube"
          />
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
      </div>
    </div>
    <div class="novidades">
      <span class="text"> FIQUE POR DENTRO DAS NOSSAS NOVIDADES </span>
      <div class="input-novidades">
        <q-input color="white" class="input" outlined label="E-MAIL" />
        <Button
          @click="triggerPositive"
          label="ENVIAR"
          color="brown-6"
          text="white"
          style="width: 82px; height: 40px"
        />
      </div>
    </div>
    <div class="privacidade">
      <Button
        icon="add"
        label="POLITICA DE PRIVACIDADE"
        color="brown-6"
        text="white"
        style="
          width: 416px;
          height: 64px;
          font-size: 1.375rem;
          font-family: 'Lato';
        "
        ><q-icon name="add"></q-icon
      ></Button>
      <Button
        icon="add"
        label="TERMOS DE USO"
        color="brown-6"
        text="white"
        style="
          width: 416px;
          height: 64px;
          font-size: 1.375rem;
          font-family: 'Lato';
        "
      />
      <span class="text-footer"
        >Endereço: Av. Vinte e Dois de Maio, 3970 - Centro, Itaboraí - RJ,
        24800-065</span
      >
    </div>
  </footer>
</template>

<script>
import { useQuasar } from 'quasar'
import Button from "./Button.vue";

export default {
  components: { Button },

  setup () {
    const $q = useQuasar()

    return {
      triggerPositive () {
        $q.notify({
          type: 'positive',
          message: 'E-mail cadastrado! Agora você está por dentro das novidades.'
        })
      },
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  width: 1920px;
  height: 526px;
  background: #1c2329;
  opacity: 1;

  .contatos {
    height: 526px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .contato {
      display: flex;

      flex-direction: column;
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      color: #ffffff;
      opacity: 1;

      span {
        padding-top: 20px;
      }

      a {
        padding-top: 20px;
      }
    }

    .rede-social {
      display: flex;
      .social {
        display: flex;
        padding-top: 20px;
      }
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

    a {
      font-family: "Lato", sans-serif;
      font-size: 15px;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 0.6;
    }
  }
  .novidades {
    width: 30%;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
      font-size: 20px;
      font-weight: normal;
      font-family: "Roboto";
      font-size: 20px;
      color: #ffffff;
      opacity: 1;
    }

    .input-novidades {
      width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .input {
      width: 300px;
      height: 40px;
      background-color: #ffffff;
      border: none;
    }

    .enviar {
      width: 82px;
      height: 40px;
      font-family: "Lato";
      font-size: 15px;
      color: #ffffff;
      background-color: #856c55;
      opacity: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .privacidade {
    display: flex;
    flex-direction: column;
    padding-top: 60px;

    .text-footer {
      width: 350px;
      height: 67px;
      font-size: 20px;
      font-family: "Roboto", sans-serif;
      font-weight: normal;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
      margin-left: 20px;
      padding-top: 40px;
    }
  }
}
</style>

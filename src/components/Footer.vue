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
        <div class="social ">
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
        </div>
    </div>
    <div class="novidades">
      <span class="text">
        FIQUE POR DENTRO DAS NOSSAS NOVIDADES
      </span>
      <div class="input-email">
        <q-input outlined label="E-MAIL" />
        <Button label="ENVIAR"/>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  width: 1920px;
  height: 526px;
  background: #1c2329 0% 0% no-repeat padding-box;
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
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;

      span{
        padding-top: 20px;
      }

      a{
         padding-top: 20px;
      }
    }

     .rede-social {
    display: flex;
    // position: relative;
    // top: 180px;
    // left: 1380px;
    .social{
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

    a{
       font-family: "Lato", sans-serif;
      font-size: 15px;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 0.6;
    }
  }
}
</style>

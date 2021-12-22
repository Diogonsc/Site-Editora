<template>
  <nav class="nav">
    <div class="nav-links">
      <ul class="ul-link">
        <li class="links">
          <router-link class="link" active-class="my-link" to="/home"
            >Home</router-link
          >
        </li>
        <li class="links">
          <router-link class="link" active-class="my-link" to="sobre"
            >Sobre</router-link
          >
        </li>
        <li class="links">
          <router-link class="link" active-class="my-link" to="blog"
            >Blog</router-link
          >
        </li>
      </ul>
    </div>
    <div class="search">
      <q-input dark borderless class="input-search">
        <template v-slot:append>
          <q-icon class="icon" name="search" size="md" />
        </template>
      </q-input>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.nav {
  max-width: 1920px;
  height: 6.18rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #292929;
  opacity: 1;
  padding-left: 19.43rem;
  padding-right: 20.43rem;

  .ul-link {
    display: flex;

    .links {
      margin-right: 50px;
      list-style-type: none;
    }

    .link {
      text-decoration: none;
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      color: #ffffff;
      opacity: 1;
    }

    // .link:hover {
    //   color: #856c55;
    //   border-bottom: 2px solid #856c55;
    // }

    .my-link {
      color: #856c55;
      border-bottom: 2px solid #856c55;
    }
  }

  .search {
    .input-search:hover {
      border-bottom: 2px solid #856c55;

      .icon:hover {
        color: #856c55;
      }
    }
  }
}
</style>

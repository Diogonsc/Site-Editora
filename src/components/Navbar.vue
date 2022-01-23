<template>
    <nav class="nav-container">
    <div class="container">
      <div class="nav">
        <div class="router-nav">
          <router-link class="menu-item" to="/">Home</router-link>
          <router-link class="menu-item" to="/sobre">Sobre</router-link>
          <router-link class="menu-item" to="/blog">Blog</router-link>
        </div>
        <div class="search">
          <q-input dark borderless class="input-search">
            <template v-slot:append>
              <q-icon class="icon" name="search" size="md" />
            </template>
          </q-input>
    </div>
      </div>
    </div>
  </nav>
</template>
// #292929  #856c55
<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.nav-container {
  background: #292929;
  width: 100%;
  display: flex;
  justify-content: center;
  /* border: 2px solid red; */
}

.btn {
  display: flex;
  justify-content: flex-end;
  /* border: 2px solid red; */
}

.logo {
  display: flex;
  justify-content: flex-start;
  /* border: 2px solid red; */
}

.container {
  width: 100%;
}

.menu-item {
  font-size: 20px;
  list-style: none;
}

.nav.menu-item a:hover {
  opacity: 1;
  border-bottom: 2px solid #856c55;
}

.btn-nav {
  width: 7rem;
  background-color: transparent;
  border: 2px solid #856c55;
  color: #fefbfb;
  opacity: 0.5;
  font-size: 0.8rem;
  font-family: "lexend deca", sans-serif;
  border-radius: 15px;
  padding: 2px;
  display: flex;
  justify-content: center;
}

.btn-nav:hover {
  opacity: 1;
}

.router-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

.nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 250px;
  font-family: "Inter", sans-serif;
  padding: 30px 0px;
  a {
    text-decoration: none;
    color: #ffffff;
    opacity: 0.5;

    &.router-link-exact-active {
      color: #ffffff;
      border-bottom: 2px solid #856c55;
    }
  }
  a:hover {
    opacity: 1;
    border-bottom: 2px solid #856c55;
  }
}

@media screen and (min-width: 1440px) {
  .logo {
    width: 15rem;
    height: 2rem;
    display: flex;
    justify-content: flex-start;
  }
  .btn {
    width: 15rem;
    height: 2rem;
    display: flex;
    justify-content: flex-end;
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

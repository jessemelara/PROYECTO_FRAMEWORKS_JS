<template>
  <header id="header">
    <div class="center">
      <!--Logo-->
      <div id="logo">
        <router-link to="/">
          <img src="../assets/images/vue.svg" class="app-logo" alt="Logotipo" />
          <span id="brand"> <strong>Master</strong> VueJS </span>
        </router-link>
      </div>
      <!--Menu-->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home" active-class="active">Inicio</router-link>
          </li>
          <li>
            <router-link to="/blog" active-class="active">Blog</router-link>
          </li>
          <li>
            <router-link to="/formulario" active-class="active"
              >Formulario</router-link
            >
          </li>
          <li>
            <router-link to="/pagina1" active-class="active"
              >Pagina 1</router-link
            >
          </li>
          <li>
            <router-link to="/pagina2" active-class="active"
              >Pagina 2</router-link
            >
          </li>
        </ul>
      </nav>

      <!--Limpiar flotados-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>Puedes hacer esto</h3>
      <router-link to="/blog/article-create" class="btn btn-success"
        >Crear artículo</router-link
      >
    </div>

    <div id="search" class="sidebar-item">
      <h3>Buscador</h3>
      <p>Encuentra el artículo que buscas</p>
      <input
        type="text"
        name="search"
        v-model="txtSearch"
        @keypress="searchTxt"
      />
      <input class="btn" type="submit" value="Buscar" @click="searchBtn" />
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      txtSearch: null,
    };
  },
  methods: {
    searchTxt(e) {
      if (e.which === 13) {
        e.preventDefault();
        this.$router.push("/redirect/" + this.txtSearch);
      }
    },
    searchBtn(e) {
      e.preventDefault();
      this.$router.push("/redirect/" + this.txtSearch);
    },
  },
};
</script>

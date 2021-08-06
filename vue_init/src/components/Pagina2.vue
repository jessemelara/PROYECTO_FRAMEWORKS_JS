<template>
  <Slider title="Sección de Animes" size="slider-small" />
  <div class="center">
    <section id="content">
      <h2 class="subheader">Página 2: Animes</h2>
      <div v-if="favorite">
        <p class="sld-check-g">
          <strong>Tu anime favorito es: </strong> <em>{{ favorite.title }}</em>
        </p>
      </div>
      <div v-else>
        <p class="sld-check-r">
          <strong>No has seleccionado ningún anime como favorito</strong>
        </p>
      </div>
      <div id="articles" v-for="anime in animes" v-bind:key="anime.title">
        <Anime :anime="anime" v-on:favorite="checkedFavorite" />
      </div>
    </section>
    <Sidebar />
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Anime from "./Anime.vue";
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Pagina2",
  components: {
    Anime,
    Slider,
    Sidebar,
  },
  methods: {
    checkedFavorite(anime) {
      this.favorite = anime;
    },
  },
  data() {
    return {
      favorite: null,
      animes: [
        {
          title: "Boku No Hero",
          image:
            "https://a-static.besthdwallpaper.com/my-hero-academia-izuku-midoriya-one-for-all-full-cowling-wallpaper-16253_L.jpg",
        },
        {
          title: "Kimetsu No Yaiba",
          image:
            "https://a-static.besthdwallpaper.com/demon-slayer-kamado-tanjirou-wallpaper-25601_L.jpg",
        },
        {
          title: "Nanatzu No Taizai",
          image:
            "https://i.pinimg.com/originals/f0/f2/66/f0f266b07f49f8365467e6a6a9d07cd3.jpg",
        },
        {
          title: "Dragon Ball Super",
          image:
            "https://a-static.besthdwallpaper.com/dragon-ball-super-broly-movie-vegeta-super-saiyan-blue-wallpaper-20245_L.jpg",
        },
        {
          title: "Avatar: The Legend of Aang",
          image:
            "https://1.bp.blogspot.com/-DkmgAUwRr2A/Xx9jqgMvEmI/AAAAAAABV0g/a1sx7_DUrCYKVvGY7zE2eJYLJIfQxiXLwCNcBGAsYHQ/s1600/avatar_sequel_comic-publicity_-_h_2020_.jpg",
        },
      ],
    };
  },
};
</script>

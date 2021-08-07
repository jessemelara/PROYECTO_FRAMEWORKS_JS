<script>
export default {
  name: "Redirect",
  mounted() {
    let txtSearch = this.$route.params.txtSearch;
    this.$router.push("/blog/search/" + txtSearch);
  },
};
</script>

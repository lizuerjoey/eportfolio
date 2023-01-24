<script>
import NavigationBar from '../../components/NavigationBar.vue';

export default {
  components: {
    NavigationBar
  },
  data() {
    return {
      page: "ui_ux",
      ddl_link: "paylah"
    }
  }
}
</script>

<template>
  <main>
    <NavigationBar :page=page :ddl_link=ddl_link />
  </main>
</template>

<style>

</style>
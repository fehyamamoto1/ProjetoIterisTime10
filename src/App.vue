<template>
  <v-app>
    <BottomBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import BottomBar from "./components/shared/BottomBar";

export default {
  name: "App",
  components: {
    BottomBar,
  },
};
</script>

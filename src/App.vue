<template>
<<<<<<< HEAD
  <v-app>    
=======
  <v-app>
    <BottomBar />
>>>>>>> 32d1971afb0d5c8953a362c1229f12a0c8deaa9d
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

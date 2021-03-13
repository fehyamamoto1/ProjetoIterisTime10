<template>
  <v-container>
    <div class="mt-5 home-img">
      <img src="../assets/coleta.svg" alt="Coleta">
    </div>
    <p class="text-home mt-5 ml-4 mr-4">Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente. Solucionando um grande problema recorrente que é o descarte inadequado do lixo, facilitando o processo de recliclagem e reutilização.</p>
    <h3 class="text-center mb-5 mt-5">Deseja ser um colaborador?</h3>
    <div class="btn-contato text-center">
      <router-link to="/pg-contato">
        <v-btn outlined rounded color="#43A047" elevation="2">
          <span class="text-btn"><strong>Entre em contato</strong></span>
        </v-btn>
      </router-link>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
  .home-img {
    display: flex;
    justify-content: center;
    max-width: 100%;
  }
  .text-home {
    font-size: 14px;
  }
  .btn-contato a {
    text-decoration: none;
  }
</style>

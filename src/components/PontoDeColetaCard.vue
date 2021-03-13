<template>
  <v-container>
    <v-card class="mx-auto" max-width="344">
      <v-img :src="imagem" height="220px"></v-img>

      <v-card-title> {{ nome }} </v-card-title>

      <v-card-subtitle>
        Reciclamos: {{ converteParaString(categorias) }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="green lighten-2" text @click="show = !show">
          Localização
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            <span> <strong>Endereço:</strong> {{ endereco }} </span>
            <br />
            <span> <strong>CEP:</strong> {{ cep }} </span>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  methods: {
    converteParaString(data) {
      return data.toString().replaceAll(",", ", ") + ".";
    },
  },
  props: {
    nome: undefined,
    categorias: undefined,
    imagem: undefined,
    endereco: undefined,
    cep: undefined,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
</style>
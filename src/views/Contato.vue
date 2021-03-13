<template>
<v-container>
   <h2 class="text-center mb-3 mt-5">Seja um colaborador</h2>
   <div class="form ml-3 mr-3 mt-5">
    <v-form >
         <v-text-field
          label="Nome"
        ></v-text-field>
        <v-text-field
          label="Telefone"
        ></v-text-field>
        <v-text-field
          label="E-mail"
        ></v-text-field>
        <v-textarea
          label="Mensagem"
        ></v-textarea>
        <div class="btn-contato">
            <router-link to="/validado">
              <v-btn outlined rounded color="#43A047" elevation="2">
                <span class="text-btn"><strong>Enviar</strong></span>
              </v-btn>
            </router-link> 
        </div>
    </v-form>
    </div>
</v-container>
</template>

<script>
export default {
  name: 'Contato',
}
</script>

<style>
  .btn-contato a {
    text-decoration: none;
  }
</style>
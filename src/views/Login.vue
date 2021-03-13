<template>
  <v-app>
    <div style="width: 80%" class="login">
      <div class="login-form">
        <h2>Login</h2>
      </div>

      <v-form class="login-box">
        <v-text-field v-model="login_id" label="ID" required> </v-text-field>

        <v-text-field
          type="password"
          v-model="login_pass"
          label="Password"
          required
        >
        </v-text-field>
      </v-form>

      <div class="botoes">
        <v-btn
          @click="logar"
          color="green"
          elevation="2"
          medium
          outlined
          rounded
          >Login</v-btn
        >
        <router-link to="/registro">
          <v-btn color="green" elevation="2" medium outlined rounded
            >Cadastrar-se</v-btn
          >
        </router-link>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      login_id: "",
      login_pass: "",
    };
  },
  methods: {
    logar() {
      let user = {
        nome: this.login_id,
        id: this.login_pass,
      };
      this.$store.commit("logar", user);
      this.$router.push({ name: "Usuario" });
    },
  },
};
</script>

<style>
.login {
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
}
.login-box {
  max-width: 100%;
}
.botoes a {
  text-decoration: none;
}
</style>
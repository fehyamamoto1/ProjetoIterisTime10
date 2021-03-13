<template>
    <div class="registro">
        <h2>Cadastro</h2>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" label="Name" required></v-text-field>

            <v-text-field
                v-model="email"
                label="E-mail"
                required
            ></v-text-field>

            <v-checkbox
                v-model="checkbox"
                label="Aceita os termos de uso?"
                required
            ></v-checkbox>

            <v-btn color="success">
                Validate
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
            </v-btn>

            <v-btn color="warning" @click="resetValidation">
                Reset Validation
            </v-btn>
        </v-form>
    </div>
</template>


<script>
export default {
    name: "Registro",
    data() {
        return {
            listaUsuario: [],
            nome: "",
        };
    },
};
</script>

<style>
</style>
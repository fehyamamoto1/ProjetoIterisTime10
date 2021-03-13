<template>
     <div class="app-bottom-bar">
         <v-app-bar hide-on-scroll color="white" app dark>
            <v-spacer />
            <v-toolbar-title></v-toolbar-title>
            <v-spacer />
        </v-app-bar>
        <v-bottom-navigation :value="value" color="#6d6d6d" app grow>
            <router-link to='/'>
                <v-btn>
                    <span>Início</span>

                    <v-icon>mdi-home</v-icon>
                </v-btn>
            </router-link>
            
            <router-link to ='/'>
                <v-btn>
                    <span>Locais</span>
                    <v-icon>mdi-office-building-marker-outline</v-icon>
                </v-btn>
            </router-link>

            <router-link to='/login'>
                <v-btn>
                    <span>Login</span>

                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </router-link>

        </v-bottom-navigation>
    </div>
</template>


<script>
export default {
    name: "BottomBar",
    data() { 
        return {
            value: 0
        }
    },
}
</script>

<style scoped>
    .app-bottom-bar a {
            text-decoration: none;
            display: flex;
            flex-grow: 1;
            max-width: 33%;   
             
    }
</style>
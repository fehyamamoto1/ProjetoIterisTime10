  <template>
  <div>
    <v-container>
      <PontosDeColetaCard
        v-for="pontoDeColeta in pontosDeColeta"
        :key="pontoDeColeta.id"
        :nome="pontoDeColeta.nome"
        :categorias="pontoDeColeta.categorias"
        :imagem="pontoDeColeta.imagem"
        :endereco="pontoDeColeta.endereco"
        :cep="pontoDeColeta.cep"
      ></PontosDeColetaCard>
    </v-container>
  </div>
</template>

<script>
import PontosDeColetaCard from "../components/PontoDeColetaCard";
export default {
  components: {
    PontosDeColetaCard,
  },
  methods: {},
  data() {
    return {
      pontosDeColeta: [],
    };
  },
  created() {
    fetch("https://it3kjy-default-rtdb.firebaseio.com/coletaSeletiva.json")
      .then((response) => response.json())
      .then((json) => (this.pontosDeColeta = json));
  },
};
</script>

<style>
</style>
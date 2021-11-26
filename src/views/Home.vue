<template>
  <div class="home">
    <PaginaInicial></PaginaInicial>
    <CandidatoList :candidatos="lista"></CandidatoList>
  </div>
</template>

<script>
import PaginaInicial from '@/components/layouts/PaginaInicial.vue'
import CandidatoList from '@/components/CandidatoList.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "Candidatos",
    components: {
        CandidatoList, PaginaInicial
    },
    computed: {
        ...mapGetters('candidatos', ['lista'])
    },
    created(){
        this.fetchCandidatos();
    },
    methods: {
        ...mapActions('candidatos', ['fetchCandidatos'])
    }
}
</script>
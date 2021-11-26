<template>
  <div class="mision">
    <h1>Prueba</h1>
    <CandidatoList :candidatos="lista"></CandidatoList>
  </div>
</template>


<script>
import CandidatoList from '@/components/CandidatoList.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "Candidatos",
    components: {
        CandidatoList
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
<template>
    <div v-if="selectedCandidato">
        <RegistrarForm :candidato="selectedCandidato"
            @submitForm="saveCandidato"
            submitText="Actualizar "
        ></RegistrarForm>
    </div>
    <b-alert show v-else> Candidato no identificado </b-alert>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import RegistrarForm from '../components/layouts/RegistrarForm.vue'
export default {
    name: 'CandidatoUpdate',
    components: { RegistrarForm },
    computed: {
        ...mapState('candidatos', ['selectedCandidato'])
    },
    created(){
        if(!this.selectedCandidato){
            this.fetchCandidato(this.$route.params.id);
        }
    },
    methods:{
        ...mapActions('candidatos', ['updateCandidatos', 'fetchCandidato']),
        saveCandidato(candidato){
            this.updateCandidatos(candidato).then( () => {
                this.$router.push({ name: 'Home' })
            })
        }
    }
}
</script>
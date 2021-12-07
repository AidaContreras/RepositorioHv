<template>
    <div class="update" v-if="selectedCandidatos">
        <RegistrarForm :candidato="selectedCandidatos"
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
    name: 'Actualizar',
    components: { RegistrarForm },
    computed: {
        ...mapState('candidatos', ['selectedCandidatos'])
    },
    created(){
        if(!this.selectedCandidatos){
            this.fetchCandidato(this.$route.params.id);
        }
    },
    methods:{
        ...mapActions('candidatos', ['updateCandidatos', 'fetchCandidato']),
        saveCandidato(candidato){
            this.updateCandidatos(candidato).then( () => {
                this.$router.push('/home')
            })
        }
    }
}
</script>
<template>
    <div class="formulario">
        <RegistrarForm :candidato="candidato" @submitForm="createCandidato"></RegistrarForm>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import RegistrarForm from '../components/layouts/RegistrarForm.vue'

export default {
    name: 'CandidatosCreate',
    data(){
        return {
            candidato: {
                cc: '',
                nombre: '',
                apellido: '',
                correo: '',
                celular: '',
                direccion: '',
                profesion: '',
                image: ''
            }
        }
    },
    components: {
        RegistrarForm
    },
    methods: {
        ...mapActions('candidatos', ['addCandidatos']),
        createCandidato(candidato){
            this.addCandidatos(candidato).then( () => {
                this.$router.push('/home');
            })
        }
    }
}
</script>
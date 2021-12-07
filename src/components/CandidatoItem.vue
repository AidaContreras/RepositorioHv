<template>
    <div>
      <b-card :title="candidato.nombre"
        :sub-title="candidato.apellido"
        :img-src="candidato.image"
        alt="Image"
        img-top
        class="mb-2"
        style="max-width: 20rem;"
        img-width ="100"
        img-alt ="100"
      >
        <p> {{ candidato.profesion }} </p>
        <b-button @click="$emit('clickBtn', candidato)" variant="primary">Ver más</b-button>
        <b-button variant="info" @click="goToUpdateCandidato"> Editar </b-button>
        <b-button variant="danger" @click="deleteCandidatos"> Eliminar </b-button>
      </b-card>

    </div>
</template>

<script>

import { mapMutations, mapActions } from 'vuex';
import { BootstrapVueIcons } from 'bootstrap-vue'

export default {
    name: "CandidatoItem",
    props: {
        candidato: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions('candidatos', {
            _deleteCandidatos: 'deleteCandidatos'
        }),
        ...mapMutations('candidatos', ['setCandidato']),
        goToUpdateCandidato(){
            this.setCandidato(this.candidato);
            this.$router.push({
                name: 'Actualizar',
                params: { id: this.candidato.id }
            });
        },
        deleteCandidatos(){
            this._deleteCandidatos(this.candidato)
        }
    },
    components:{
        BootstrapVueIcons
    }
}
</script>
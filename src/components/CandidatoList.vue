<template>
    <div v-if="candidatos.length">
        
        <paginate name="candidatos"
        :list="candidatos"
        :per-page="perPage"
        class="row"
    >
        <b-col cols="4"
            v-for="item in paginated('candidatos')"
            :key="item.id"
        >
            <CandidatoItem :candidato="item"></CandidatoItem>
        </b-col>
    </paginate>
    </div>
    <b-alert variant="info" show v-else> No hay candidatos registrados. </b-alert>
</template>

<script>
import CandidatoItem from '@/components/CandidatoItem.vue'
import {  mapActions } from 'vuex';
import { BPagination } from 'bootstrap-vue'

export default {
    name: "CandidatoList",
    data(){
        return {
            paginate: ['candidatos'],
            perPage: 10
        }
    },
    components:{
        CandidatoItem, BPagination
    }, 
    props:{
        candidatos:{
            type: Array,
            required: true
        }
    }
}
</script>
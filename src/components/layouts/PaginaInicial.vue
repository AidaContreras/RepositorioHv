<template>
    <div>
    <div>
        <center>
        <br/><br/><br/><br/><br/>
        <h1>Bienvenido al repositorio</h1>
        <br/><br/>
        <h3>Buscar candidato de acuerdo a su profesión</h3>
        <br/>
        </center>
    </div>
    <div>
        <b-input-group
        v-for="size in ['']"
        :key="size"
        :size="size"
        class="mb-3">

        <b-form-input></b-form-input>
        <b-input-group-append>
            <b-button size=" " text="Button" variant="primary">Buscar</b-button>
        </b-input-group-append>
        </b-input-group>
    </div>
    <br/>
    <b-container class="mt-5">
        <b-row>
            <b-col cols="12">
                <slot name="products"></slot>
            </b-col>
        </b-row>
    </b-container>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

import { BCollapse } from 'bootstrap-vue';
import { BButton } from 'bootstrap-vue'
import { BInputGroupAppend, BInputGroup } from 'bootstrap-vue'

export default {
    name: "PaginaInicial",
    components:{
         BButton, BInputGroupAppend, BInputGroup
    }
}
</script>
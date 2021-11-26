<template>
<div>
  <div>
      <!-- Image and text -->
      <b-navbar variant="faded" type="light">
        <b-navbar-brand to="/home">
          <h3> <img src="@/assets/logohv.png" class="d-inline-block align-top" alt="Kitten">
          RespositorioHV</h3>
        </b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav align="center">
              <b-navbar-nav>
                <b-nav-item to="/mision" exact>Misión</b-nav-item>
                <b-nav-item href="#">Visión</b-nav-item>
                <b-nav-item href="#">Contacto</b-nav-item>
                <b-nav-item href="#">Objetivo</b-nav-item>
              </b-navbar-nav>
        </b-collapse>
      <b-row>
        <b-col lg="4" class="pb-2"><b-button to="/formulario" variant="primary">Registrar</b-button></b-col>
      </b-row>
      </b-navbar>
  </div>
  
</div>
</template>

<script>
import { BNavItem, BNavbarBrand, BNavbarNav } from 'bootstrap-vue';
import { mapMutations } from 'vuex'

import { BCollapse } from 'bootstrap-vue';
import { BButton } from 'bootstrap-vue'
import { BInputGroupAppend, BInputGroup } from 'bootstrap-vue'

export default {
    name: "BaseLayout",
    components:{
        BNavItem, BNavbarBrand, BNavbarNav, BCollapse, BButton, BInputGroupAppend, BInputGroup
    }
}
</script>
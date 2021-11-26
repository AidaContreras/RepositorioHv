import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import localForage from "localforage";

import candidatos from './modules/candidatos'
import users from './modules/users'

const vuexLocal = new VuexPersistence({
  storage: localForage
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    candidatos, users
  },
  plugins: [vuexLocal.plugin]
})
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import candidatos from '@/modules/candidatos'
import users from '@/modules/users'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['candidatos', 'users']
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading(state, bool){
      state.loading = bool;
    }
  },
  modules: {
    candidatos, users
  },
  plugins: [vuexLocal.plugin]
})

import Vue from 'vue';

export async function fetchCandidatos({ commit }){
    await Vue.axios.get('/candidatos').then( ({ data }) => {
        commit('setCandidatos', data);
    }).catch(err => {
        commit('candidatosError', err.message);
    }).finally(() => {
        console.log("Petición de fetchCandidatos resuelta");
    });
}

export async function fetchCandidato({ commit }, id){
    await Vue.axios.get('/candidatos/'+id).then( ({ data }) => {
        commit('setCandidato', data);
    }).catch(err => {
        commit('candidatosError', err.message);
    }).finally(() => {
        console.log("Petición de fetchCandidato resuelta");
    });
}

export async function addCandidatos({ commit, dispatch }, candidato){
    await Vue.axios.post('/candidatos', {
        id: candidato.id,
        nombre: candidato.nombre,
        apellido: candidato.apellido,
        correo: candidato.correo,
        celular: candidato.celular,
        direccion: candidato.direccion,
        profesion: candidato.profesion,
        image: candidato.image
    }).catch( err => {
        commit('candidatosError', err.message);
    }).finally(() => {
        dispatch('fetchCandidatos');
        console.log("Petición de addCandidatos resuelta");
    });
}

export async function updateCandidatos({ commit }, candidato){
    await Vue.axios.put(`/candidatos/${ candidato.id}`, {
        id: candidato.id,
        nombre: candidato.nombre,
        apellido: candidato.apellido,
        correo: candidato.correo,
        celular: candidato.celular,
        direccion: candidato.direccion,
        profesion: candidato.profesion,
        image: candidato.image
    }).catch( err => {
        commit('candidatosError', err.message);
    }).finally(() => {
        console.log("Petición de updateCandidatos resuelta");
    });
}

export async function deleteCandidatos({ commit, dispatch }, candidato){
    await Vue.axios.delete(`/candidatos/${ candidato.id }`)
                    .catch( err => {
                        commit('candidatosError', err.message);
                    }).finally(() => {
                        dispatch('fetchCandidatos');
                        console.log("Petición de deleteCandidatos resuelta");
                    });
}
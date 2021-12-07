export function setCandidatos(state, candidatos){
    state.candidatos = candidatos;
}

export function setCandidato(state, candidato){
    state.selectedcandidato = candidato;
}

export function updateCandidatoStatus(state, payload){
    const candidato = state.candidatos.find(currentCandidatos => currentCandidatos.id === payload.id);
    
}

export function candidatosError(state, payload){
    state.error = true;
    state.errorMessage = payload;
    state.candidatos = [];
}
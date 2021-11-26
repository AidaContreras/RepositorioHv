export function lista(state){
    return state.candidatos.filter(candidato => candidato.nombre);
}

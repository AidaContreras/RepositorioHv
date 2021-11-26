export async function fetchProducts({ state, commit, dispatch, rootState }){
    const data = await fetch('https://fakestoreapi.com/users');
    
    const users = await data.json();
    
    console.log(users);
    commit('setUsers', users);
}
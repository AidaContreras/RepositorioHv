<template>
    <div v-if="users.length">
        <h1>Candidatos</h1>
        <paginate name="users"
            :list="users"
            :per-page="perPage"
            class="row"
        >
            <b-col cols="4"
                v-for="item in paginated('users')"
                :key="item.id"
            >
                <UserItem :user="item"></UserItem>
            </b-col>
        </paginate>
    </div>
    <b-alert variant="primary" show v-else> No hay candidatos registrados. </b-alert>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import UserItem from '@/components/UserItem.vue'
import { BPagination } from 'bootstrap-vue'

export default {
    name: "UserList",
    data(){
        return {
            paginate: ['users'],
            perPage: 6
        }
    },
    components:{
        UserItem, BPagination
    },
    computed: {
        ...mapState('users', ['users'])
    },
    created(){
        this.fetchProducts();
    },
    methods: {
        ...mapActions('users', ['fetchProducts'])
    }
}
</script>
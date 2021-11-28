<template>
    <span>
        {{ message }}
    </span>
</template>

<script>

export default ({
    data() {
        return{
            message: "Probando"
        }
    },
    created(){
        this.message = "Created";
    }
})
</script>

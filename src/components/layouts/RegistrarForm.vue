<template>
  <div>
    <br>
    <center><h1>Registrar Información del Candidato</h1></center>
    <b-form @submit.prevent="$emit('submitForm', candidato)">
        <br/>
      <b-form-group  label="Identificacion:" label-for="input-2">
        <b-form-input
          id="candidato"
          v-model="candidato.id"
          placeholder="Identificacion"
          required
        ></b-form-input>
      </b-form-group>
        
        <br/>
      <b-form-group  label="Nombre:" label-for="input-2">
        <b-form-input
          id="candidato"
          v-model="candidato.nombre"
          placeholder="Nombre"
          required
        ></b-form-input>
      </b-form-group>
        <br/>
      <b-form-group  label="Apellido:" label-for="input-2">
        <b-form-input
          id="candidato"
          v-model="candidato.apellido"
          placeholder="Apellido"
          required
        ></b-form-input>
      </b-form-group>
        <br/>
      <b-form-group
        label="Correo electronico:"
        label-for="input-1"
      >
        <b-form-input
          id="candidato"
          v-model="candidato.correo"
          type="email"
          placeholder="Correo"
          required
        ></b-form-input>
      </b-form-group>
        <br/>
        <b-form-group label="Celular:" label-for="input-2">
        <b-form-input
          id="candidato"
          v-model="candidato.celular"
          placeholder="Celular"
          required
        ></b-form-input>
      </b-form-group>
        <br/>
        <b-form-group label="Direccion:" label-for="input-2">
        <b-form-input
          id="candidato"
          v-model="candidato.direccion"
          placeholder="Direccion"
          required
        ></b-form-input>
      </b-form-group>     
        <br/>
      <b-form-group label="Profesion:" label-for="input-2">
        <b-form-input
          id="candidato"
          v-model="candidato.profesion"
          placeholder="Profesion"
          required>
        </b-form-input>
      </b-form-group> 
      <br/>
      <b-form-group  label="Imagen:" label-for="input-2">
        <b-form-input
          id="candidato"
          v-model="candidato.image"
          placeholder="Imagen"
          required>
        </b-form-input>
      </b-form-group> 
      <br/>
      <center>
      <b-button type="submit" variant="primary">{{ submitText }}</b-button>
      <b-button type="reset" variant="danger">Cancelar</b-button>
      </center>
    </b-form>
  </div>
</template>

<script>
  export default {
    name:"Formulario",
    props: {
        candidato: {
          type: Object,
            required: true
        },
        submitText: {
            type: String,
            default: 'Guardar'
        }
    },
    data() {
      return {
        form: {
          correo: '',
          nombre: '',
          apellido:'',
          telefono:'',
          direccion:'',
          profesion:'',
          id:'',
          image:'',
          checked: []
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.correo = ''
        this.form.nombre = ''
        this.form.id = ''
        this.form.apellido = ''
        this.form.telefono = ''
        this.form.direccion = ''
        this.form.profesion=''
        this.form.image=''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<template>
  <FormulateForm v-model="userForm" @submit="handleSubmit"> 
    <FormulateInput 
      type="text"
      name="name"
      label="Nome"
      validation="required"
      wrapper-class="form-group"
      input-class="form-control"
    />
    <FormulateInput 
      type="text"
      name="phone"
      label="Telefone"
      wrapper-class="form-group"
      input-class="form-control"
    />
    <FormulateInput type="group" name="address">
      <FormulateInput 
        type="email"
        name="email"
        label="E-mail"
        validation="bail|required|email|"
        wrapper-class="form-group"
        input-class="form-control"
      />
      <FormulateInput 
        type="text"
        name="street"
        label="Rua"
        validation="required"
        wrapper-class="form-group"
        input-class="form-control"
      />
      <FormulateInput 
        type="text"
        name="district"
        label="Bairro"
        validation="required"
        wrapper-class="form-group"
        input-class="form-control"
      />
      <FormulateInput 
        type="text"
        name="number"
        label="Número"
        validation="required"
        wrapper-class="form-group"
        input-class="form-control"
      />
      <FormulateInput 
        type="text"
        name="city"
        label="Cidade"
        validation="required"
        wrapper-class="form-group"
        input-class="form-control"
      />
      <FormulateInput 
        type="text"
        name="state"
        label="Estado"
        validation="required"
        wrapper-class="form-group"
        input-class="form-control"
      />
      <FormulateInput type="submit" :input-class="['btn','btn-primary']"  />
    </FormulateInput>
  </FormulateForm>
</template>

<script>

export default {
  name: 'UserForm',

  data(){
    return {
      userForm: {
        name: '',
        photo:'',
        phone:'',
        email:'',
        address: {
          street: '',
          district: '',
          number: '',
          city: '',
          state: ''
        }
      }
    }
  },
  methods: {  
    handleSubmit(data){
      this.$emit('saveUser',data)
    }
  },
  
}
</script>

<style>

</style>
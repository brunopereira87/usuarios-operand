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
    <FormulateInput 
        type="email"
        name="email"
        label="E-mail"
        validation="bail|required|email|"
        wrapper-class="form-group"
        input-class="form-control"
      />

    <FormulateInput type="group" name="address">
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
  props: ['previous_user'],
  data(){
    return {
      userForm: {
        name: '',
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
  beforeMount(){
    if(this.previous_user) this.userForm = this.initUserForm(this.previous_user);
    console.log('previous:',this.previous_user);
    console.log('form:',this.userForm);
  },
  methods: {  
    handleSubmit(data){
      const formatedUser = this.formatUser(data);
      this.$emit('saveUser',formatedUser)
    },
    formatUser(user){
      const address = user.address[0]; 
      return {
        ...user,
        address
      }
    },
    initUserForm(userForm){
      const address = [userForm.address]
      return {
        ...userForm,
        address
      }
    }
  }
  
}
</script>

<style>

</style>
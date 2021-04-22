<template>
  <section class="new-user">
    <h1 class="page-title">Novo Usuário</h1>
    <UserForm @saveUser="addUser" />
  </section>
</template>

<script>
import UserForm from '@/components/UserForm';
import { USER_POST } from '@/api';

export default {
  name: 'NewUser',
  components: {
    UserForm
  },
  methods: {
    async addUser(user){
      
      const { url, options } = USER_POST(user);
      try {
        const resp = await fetch(url, options);
        if(resp.ok) this.$router.push('/');
      }catch(error){
        this.$store.dispatch({
          type: 'error',
          message: error.message
        })
      }
    }
    
  }
}
</script>

<style lang="scss" scoped>

</style>
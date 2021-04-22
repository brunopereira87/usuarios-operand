<template>
  <div class="new-user">
    <h1 class="page-title">Novo Usuário</h1>
    <UserForm @saveUser="addUser" />
  </div>
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
        const json = await resp.json();
        console.log(resp)
      }catch(error){
        this.$store.commit('UPDATE_ERROR', error.message)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
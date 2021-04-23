<template>
  <section class="new-user">
    <h1 class="page-title">Novo Usuário</h1>
    <UserForm @saveUser="addUser" />
  </section>
</template>

<script>
import UserForm from '@/components/UserForm';
import { USER_POST } from '@/api';
import { mapMutations, mapActions } from 'vuex';

export default {
  name: 'NewUser',
  components: {
    UserForm
  },
  methods: {
    ...mapMutations(['UPDATE_LOADING']),
    ...mapActions(['setAlert']),
    async addUser(user){
      this.UPDATE_LOADING(true);
      const { url, options } = USER_POST(user);
      try {
        const resp = await fetch(url, options);
        if(resp.ok) {
          this.setAlert({
            type: 'success',
            message: 'Usuário cadastrado com sucesso'
          });

          this.$router.push('/');
        }
      }catch(error){
        this.setAlert({
          type: 'error',
          message: error.message
        });

      } finally {
        this.UPDATE_LOADING(false);
      }
    }
  },
  created(){
    this.UPDATE_LOADING(false);
  }
}
</script>

<style lang="scss" scoped>

</style>
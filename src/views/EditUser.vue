<template>
  <section>
    <h1 class="page-title">Editar Usuário</h1>
    <UserForm v-if="user" :previous_user="user" @saveUser="updateUser" />
  </section>
</template>

<script>
import { USER_GET, USER_PUT } from '@/api';
import UserForm from '@/components/UserForm';
import { mapMutations, mapActions } from 'vuex';

export default {
  name: 'EditUser',
  props:['id'],
  components: {
    UserForm
  },
  data() {
    return {
      user: null
    }
  },
  methods: {
    ...mapMutations(['UPDATE_LOADING']),
    ...mapActions(['setAlert']),
    async getUser(id){
      const { url, options } = USER_GET(id);
      
      try{
        const resp = await fetch(url, options);
        const json = await resp.json();
        
        if(resp.ok) this.user = json;
      } catch( error ) {
        this.setAlert({
          type: 'error',
          message: error.message
        });
      } finally {
        this.UPDATE_LOADING(false);
      }
    },

    async updateUser(user){
      this.UPDATE_LOADING(true);
      const { url, options } = USER_PUT(this.id, user);

      try{
        const resp = await fetch(url, options);
        const json = await resp.json();
        if(resp.ok) {
          this.setAlert({
            type: 'success',
            message: 'Usuário atualizado com sucesso'
          });

          this.$router.push('/');
        }
      } catch(error) {
        this.setAlert({
          type: 'error',
          message: error.message
        });
      } finally {
        this.UPDATE_LOADING(false);
      }
    }
  },
  async created(){
    await this.getUser(this.id)
  }
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <section>
    <h1 class="page-title">Editar Usuário</h1>
    <UserForm v-if="user" :previous_user="user" @saveUser="updateUser" />
  </section>
</template>

<script>
import { USER_GET, USER_PUT } from '@/api';
import UserForm from '@/components/UserForm';

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
    async getUser(id){
      const { url, options } = USER_GET(id);
      
      try{
        const resp = await fetch(url, options);
        const json = await resp.json();
        
        if(resp.ok) this.user = json;
      } catch( error ) {
        this.$store.dispatch({
            type: 'error',
            message: error.message
          })
      }
    },

    async updateUser(user){
      const { url, options } = USER_PUT(this.id, user);

      try{
        const resp = await fetch(url, options);
        const json = await resp.json();
        if(resp.ok) this.$router.push('/');
      } catch(error) {
        this.$store.dispatch({
          type: 'error',
          message: error.message
        })
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
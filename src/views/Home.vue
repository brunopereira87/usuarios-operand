<template>
  <section class="home">
    <h1 class="page-title">Usuários</h1>
    <div class="users">
      <UserItem 
        v-for="user in users" 
        :key="user.id" :user="user" 
        @refreshUsers="refreshUsers" />
    </div>
  </section>
</template>

<script>
import { USERS_GET } from '@/api';
import UserItem from '@/components/UserItem';
import { mapMutations } from 'vuex';
export default {
  name: 'Home',
  components: {
    UserItem
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    ...mapMutations(['UPDATE_LOADING']),
    async getUsers(){
      
      const { url, options } = USERS_GET();
      try{
        const resp = await fetch(url, options);
        const json = await resp.json();
        
        if(resp.ok) this.users = json;
      } catch( error ) {
        this.$store.dispatch({
          type: 'error',
          message: error.message
        })
      } finally {
        this.UPDATE_LOADING(false);
      }
    },
    async refreshUsers(){
      await this.getUsers()
    }
  },
  async created(){
    await this.getUsers();
  }
}
</script>
<style lang="scss" scoped>

</style>
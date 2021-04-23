<template>
  <div class="user">
    <h3>
      <router-link :to="`/usuarios/${user.id}`">{{user.name}}</router-link>
    </h3>
    <div class="actions">
      <button class="btn-icon" @click="$router.push(`/usuarios/${user.id}/editar`)">
        <i class="fas fa-edit"></i>
      </button>
      <button class="btn-icon" @click="deleteUser(user.id)">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { USER_DELETE } from '@/api';

export default {
  name: 'UserItem',
  props:['user'],
  methods: {
    async deleteUser(id){
      const confirm = window.confirm('Deseja excluir este usuário?');

      if(confirm){
        const { url, options } = USER_DELETE(id);

        try {
          const resp = await fetch(url, options);
          if(resp.ok) this.$emit('refreshUsers');
        } catch(error){
          this.$store.dispatch({
            type: 'error',
            message: error.message
          })
        }
      }
      
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(#d0b9f7, 0.4);
  margin-bottom: 2rem;
  .actions {
    display: flex;
    gap: 1rem;
  }

  h3 a {
    @include textcolor("dark");

    &:hover,
    &:active {
      @include textcolor("light");
    }
  }
}
</style>
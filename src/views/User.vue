<template>
  <section>
    <h1 class="page-title">Dados do usuário</h1>
    <div class="user" v-if="user">
      <p>
        <strong>Nome </strong>
        <span>{{user.name}}</span>
      </p>
      <p>
        <strong>Telefone </strong>
        <span>{{user.phone}}</span>
      </p>
      <p>
        <strong>E-mail </strong>
        <span>{{user.email}}</span>
      </p>
      <p>
        <strong>Endereço</strong>
        <span>
          {{user.address.street}}, nº {{user.address.number}} {{user.address.district}} - 
          {{user.address.city}}/{{user.address.state}}
        </span>
      </p>
    </div>
  </section>
</template>

<script>
import { USER_GET, USER_DELETE } from '@/api';
export default {
  name: 'User',
  props:['id'],
  data() {
    return {
      user:null
    }
  },
  methods: {
    async getUser(id){
      console.log(id)
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
  },
  async beforeMount(){
    await this.getUser(this.id);
  }
}
</script>

<style lang="scss" scoped>
p{
  @include border(1px, "first", "-bottom");
  margin-bottom: 1rem;
  padding-bottom: 0.3rem;
}
span {
  display: block;
}
</style>
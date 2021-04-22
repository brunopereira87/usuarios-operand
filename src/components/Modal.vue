<template>
  <div class="modal">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(#000, 0.7);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
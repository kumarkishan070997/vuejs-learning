<template>
<div>
  <button class="btn-color">app-button</button>
  <router-view>
  
  </router-view>
  <todo-component />
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoComponent from './components/TodoComponent.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld
    TodoComponent
  }
}
</script>
// scoped used to use the styles to be used for the current file only
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn-color{
  background-color:red;
}
</style>

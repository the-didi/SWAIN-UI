<script setup lang="ts">
  
</script>

<template>
  <swainButton type="default" icon="bookmark" @click="handleClick" fill>你好世界</swainButton>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const handleClick=(e)=>{
      console.log(e)
    }
    return {
      handleClick
    }    
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

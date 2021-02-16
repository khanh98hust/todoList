<template>
  <div class="home">
    <h1 class="text-center">TodoList</h1>
    <ListWork></ListWork>
    <Prop :ten="author"></Prop>
  </div>
</template>

<script>
import Prop from '../components/prop'
import ListWork from '../components/listWork'
export default {
  name: 'Home',
  data() {
    return {
      author : 'hoa'
    }
  },
  components: {
    Prop,
    ListWork,
  }
}
</script>

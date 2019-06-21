<template>
  <div id="app">
    <Navbar />
    <Banner />
    <div class="container fluid">
    <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">Email address</label>
      <input v-model="data.email" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Rip Genji">
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Task Name</label>
      <input v-model="data.task" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Rip Genji">
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">idk</label>
      <input v-model="data.idk" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Rip Genji">
    </div>
    <button type="button" @click="addTask" class="btn btn-primary btn-block">Add Task</button>
  </form>
  <br><br><br>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
const Navbar =()=> import('@/components/Navbar.vue'),
      Banner =()=> import('@/components/Banner.vue')
export default {
  name: 'App',
  data: ()=> ({
    data: {
      email: '',
      task: '',
      idk: ''
    }
  }),
  methods: {
    addTask() {
      axios.post('http://localhost:8081/', this.data)
        .then((res) => {
          let { success, data } = res.data
          if(success) {
            alert(JSON.stringify(data))
          }
        })
    }
  },
  components: {
    Navbar, Banner
  }
}
</script>


<style lang="scss">

</style>

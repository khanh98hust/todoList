<template>
  <div id="nav">
    <div class="d-flex p-3 top">
      <router-link to="/" tag="a" class="nav-link" active-class="active" append>Home</router-link>
      <router-link to="/about" class="nav-link" tag="a" active-class="active">About</router-link>
    </div>
    <router-view style="margin-top : 100px"/>
  </div>
</template>

<style scoped>
.top{
  position: fixed;
  top: 0px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  border-bottom: 1px solid red;
}
.active{
  color: rgb(0, 255, 213);
  font-size: 20px;
}
.nav-link{
  font-size: 30px;
  font-weight: 500;
}
.nav-link:hover{
  color: rgb(195, 0, 255);
}
</style>

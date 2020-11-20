<template>
  <div id="app">
    <div class="nav">
      <div class="nav-brand">
        <h2>Ethan Whittier</h2>
      </div>
      <div class="nav-items">
        <div class="nav-item">
        <router-link to="/">Home</router-link> 
        </div>
        <div class="nav-item">
        <router-link to="/post">Add</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/edit">Edit</router-link>
        </div>
        <div class="nav-item">
        <router-link to="/contact">Contact</router-link>
      </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  display: flex;
  color: white;
  background-color: #5d5e61;
  border-bottom: 5px solid #016881;
}
.nav-brand {
  margin: 1em;
}
.nav-items  {
  margin: 1.25em;
  margin-left: auto;
  display: flex;
  
}
.nav-item {
  margin-left: 1em;
}
.nav-item a {
  color: white;
  text-decoration: none;
}

</style>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img class="oblogo" src="../assets/ob-logo1.png">

    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <!-- <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li> -->
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
          <!-- <a class="nav-link" href="#">Home</a> -->
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/user">User</router-link>
        </li> -->
        <li class="nav-item">
          <router-link class="nav-link" to="/addbook">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/signup">Signup</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/place">Place</router-link>
        </li>
        <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> -->

        <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> -->

      </ul>
      <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> -->
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click=logOut()>Log out</button>
    </div>
  </nav>
</template>

<script>

export default {
  methods: {
    logOut() {
      document.cookie = `access-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `user-id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      window.location.href = '/';
      
    }
  }
};
</script>

<style scoped>
.oblogo{
  width:200px;
  float: left;
}
</style>
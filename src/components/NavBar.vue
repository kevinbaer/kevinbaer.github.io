<template>
<div>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/home" class="display-6 ">
                <p class="link nav-link">Home</p>
            </router-link>
            <router-link to="/gallery" class="display-6">
                <p class="link nav-link">Gallery</p>
            </router-link>
            <router-link to="/info" class="display-6">
                <p class="link nav-link">Info</p>
            </router-link>
            <router-link to="/contact" class="display-6">
                <p class="link nav-link">Contact</p>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
</div>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style>
    .link {
        margin: 0px 10px 0px 10px;
        display: inline;
    }
    .tumbleweed {
        background-color: #E09F7D;
    }
    .azure {
        background-color: #CEE0DC;
    }
    .charleston {
        color: #2C302E;
    }
</style>
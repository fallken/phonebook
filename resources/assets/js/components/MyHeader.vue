<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </a>
            <div class="navbar-menu is-active">  
                <router-link class="navbar-item" to="/home">Home</router-link>
                <router-link class="navbar-item" to="/about">About</router-link>

            </div>
            
      </div>
  </nav>
</template>
<template>
<div class="modal" :class='openModal' >
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close" @click='close'></button>
    </header>
    <section class="modal-card-body">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae labore iure voluptatibus, aspernatur officia! Esse dolore obcaecati qui quis quam necessitatibus minima commodi perspiciatis libero, pariatur, quia a, excepturi perferendis.Explicabo pariatur officiis voluptates, magnam architecto, illo voluptatem! Quas iste soluta molestias velit odio quaerat, libero porro corporis labore ducimus ipsum, pariatur obcaecati illum sed. Perferendis laborum ipsam minus. Voluptatibus!Atque delectus velit, explicabo iure, ex laudantium, consequuntur dolorem illum voluptatibus molestiae recusandae cupiditate quas tenetur quam. Quo, velit excepturi nisi reprehenderit quia doloribus minus perferendis voluptatum facilis, dicta nostrum.
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
	export default{	
		props:['openModal']
		,
		methods:{
			close(){
				this.$emit('closeReq');
			}
		}
	}
</script>
<template>

<div class="modal" :class='EditModal' >
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close" @click='close'></button>
    </header>
    <section class="modal-card-body">
     <div class="field">
			 <label class="label">Name </label>
			  <div class="control">
			    	<input class="input"  type="text" placeholder="Text input"  v-model="mylist.name" >
			    	<small v-if="errors.name" class="has-text-danger"> {{errors.name[0]}} </small>
			  </div>
	
		</div>
		 <div class="field">
			 <label class="label">Phone </label>
			  <div class="control">
			    	<input class="input"  type="number" placeholder="Phone input"  v-model="mylist.phone" >
			  </div>
	<small v-if="errors.phone" class="has-text-danger"> {{errors.phone[0]}} </small>
		</div>
		 <div class="field">
			 <label class="label">Email </label>
			  <div class="control">
			    	<input class="input"  type="email" placeholder="email input"  v-model="mylist.email" >
			  </div>
	<small v-if="errors.phone" class="has-text-danger"> {{errors.email[0]}} </small>
		</div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click='update'>Save changes</button>
      <button class="button" @click='close'>Cancel</button>
    </footer>
  </div>
</div>
</template>
<script>
	export default{
			props:['EditModal'],
			data(){
				return{
					mylist:{},
					errors:{}
				}
			},
			methods:{
				close(){
					this.$emit('closeReq');
				},
				update(){
					axios.patch(`/notebook/public/notebook/${this.mylist.id}`,this.$data.mylist).then( (response)=>this.close()).catch( (error)=> this.errors=error.response.data);
					
				}
			}


		}
</script>
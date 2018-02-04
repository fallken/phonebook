<template>
<div><nav class="panel column is-offset-2 is-8">
  <p class="panel-heading ">
    repositories
     <button class="button is-link is-outlined is-round" @click='openAdd'>reset all filters</button>
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input is-small" type="text" placeholder="search">
      <span class="icon is-small is-left">
        <i class="fa fa-search"></i>
      </span>
    </p>
  </div>
  <a class="panel-block">
    
    <span class="column is-7">marksheet</span>
    <span class="has-text-danger panel-icon column is-1"><i class="fa fa-trash "></i></span>
    <span class="has-text-info panel-icon column is-1"><i class="fa fa-edit "></i></span>
    <span class="has-text-primary panel-icon column is-1"><i class="fa fa-eye "></i></span>
  </a>
  <div class="panel-block">
   
  </div>
</nav>
<Add :openModal='addActive' @closeReq='close'></Add>
</div>


</template>
<script>
let Add=require('./Add.vue');

  export default{
      components:{Add},
      data(){
        return {
          addActive:''
        }
      },
      methods:{
        openAdd(){
          this.addActive='is-active';
        },
        close(){
          this.addActive='';
        }
      }
  }
</script>
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
  <a class="panel-block" v-for="item,key in lists">
    
    <span class="column is-7">{{item.name}}</span>
    <span class="has-text-danger panel-icon column is-1"><i class="fa fa-trash "></i></span>
    <span class="has-text-info panel-icon column is-1"><i class="fa fa-edit "></i></span>
    <span class="has-text-primary panel-icon column is-1"><i class="fa fa-eye " @click="show(key)"></i></span>
  </a>
  <div class="panel-block">
   
  </div>
</nav>
<Add :openModal='addActive' @closeReq='close'></Add>
<Show :showModal='showActive' @closeReq='close'></Show>
</div>


</template>
<script>
let Add=require('./Add.vue');
let Show=require('./Show.vue'); 
  export default{
      components:{Add,Show},
      data(){
        return {
          addActive:'',
          showActive:'',
          lists:{},
          errors:{}
        }
      },
      created(){
          axios.get('/notebook/public/listData').then( (response)=>this.lists=response.data).catch( (error)=> this.errors=error.response.data);//will save the error on the object errors
        },
      methods:{

        openAdd(){
          this.addActive='is-active';
        },
        close(){
          this.addActive=this.showActive='';
        },
        show(key){
          this.$children[1].list=this.lists[key];
          this.showActive='is-active';
        }
      }
  }
</script>
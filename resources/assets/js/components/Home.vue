<template>
<div><nav class="panel column is-offset-2 is-8">
  <p class="panel-heading ">
    repositories
     <button class="button is-link is-outlined is-round" @click='openAdd'>new contact</button>
    <span class="is-pulled-right" v-if="loading"><i class="fa fa-refresh fa-spin fa-2x fa-fw"></i></span>
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
    <span class="has-text-danger panel-icon column is-1"><i class="fa fa-trash " @click='del(key,item.id)'></i></span>
    <span class="has-text-info panel-icon column is-1"><i class="fa fa-edit " @click='edit(key)'></i></span>
    <span class="has-text-primary panel-icon column is-1"><i class="fa fa-eye " @click="show(key)"></i></span>
  </a>
  <div class="panel-block">
   
  </div>
</nav>
<Add :openModal='addActive' @closeReq='close'></Add>
<Show :showModal='showActive' @closeReq='close'></Show>
<Edit :EditModal='showEdit' @closeReq='close'></Edit>
</div>


</template>
<script>
let Add=require('./Add.vue');
let Show=require('./Show.vue'); 
let Edit=require('./Edit.vue');
  export default{
      components:{Add,Show,Edit},
      data(){
        return {
          addActive:'',
          showActive:'',
          showEdit:'',
          lists:{},
          errors:{},
          loading:false
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
          this.addActive=this.showActive=this.showEdit='';
        },
        show(key){
          this.$children[1].list=this.lists[key];
          this.showActive='is-active';
        },
        edit(key){
          this.$children[2].mylist=this.lists[key];
          this.showEdit='is-active';
        },
        del(key,id){
          if (confirm('are u sure about deleting this contact?')) {
          this.loading=!this.loading;
          axios.delete(`/notebook/public/notebook/${id}`).then( (response)=>{this.lists.splice(key,1),this.loading=!this.loading}).catch( (error)=> this.errors=error.response.data);
            
          }
        }
      }
  }
</script>
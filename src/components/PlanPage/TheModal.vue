<template lang="">
    <div class="modal">
        <header class="modalHeader">
        <slot name="header"></slot>
        <div  style="float:right" @click="closeModal" >
           <i  class="fa fa-times"></i>
        </div>
       
      </header>
      <div class="content">
          <slot>默认值</slot>
      </div>
      <footer v-if="show && !test" class="modalFooter">
        <slot name="footer"></slot>
      </footer>
    </div>
</template>
<script>
export default {
  data(){
    return {
      show: true,
    }
  },
  props:{
    test:{
      type:Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      console.log("clicked");
      this.$emit("closeModal");
    }
  },
  mounted() {
    if(this.$route.path === '/planlist'){
      this.show = false
    } 
  },
};
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  background: #fff;
  width: 1024px;
  height: 1024px;
  overflow-y: scroll;
  border-bottom: 10px solid #66cdb6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 99999;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
    top: 5%;
    height: 90%;
  header {
    background: #66cdb6;
    color: #fff;
    padding: 12px 12px;
    text-align: left;
    font-size: 1.5rem;
  }

  .content {
    padding: 12px 32px;
  }

  footer {
    width: 40%;
    text-align: center;
    background: #66cdb6;
    margin: auto;
    padding: 12px;
    color: #fff;
    margin-bottom: 12px;
    border-radius: 4px;
  }
}

.modal::-webkit-scrollbar {
  display:none;
}
</style>
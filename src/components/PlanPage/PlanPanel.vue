<template>
  <div class="plan-panel">
    <div class="plan-panel__left">
      <div><router-link to="planlist">回清單</router-link></div>
      <div class="plan-panel__left--btn">匯出WORD檔</div>
    </div>
    <div class="plan-panel__right">
      <div class="plan-panel__right--time">
        <i class="fa fa-clock"></i>
        <span>
          自動登出：
          <span class="_font--warning">29:46</span>
        </span>
      </div>
      <div class="plan-panel__right--logout">
        <i class="fas fa-sign-out-alt"></i>
        <span>登出</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.plan-panel__left div a {
  color: #787878;
}
  
</style>
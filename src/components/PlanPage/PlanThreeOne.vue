<template>
  <div class="plan-section">
    <div class="planHeader">
      <div class="planHeader__title">災害風險評估</div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/advice.png" alt />
        <span>撰寫原則或建議</span>
      </div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/template.png" alt />
        <span>參考撰寫範本</span>
      </div>
    </div>
    <div class="planTopic">
      <div class="themeColor">(一)自然災害風險檢查系統初評結果
        <div class="planTitle__redIcon" style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;
" data-red="先至「防災易起來網站-長照機構防災」填答長照機構天然災害風險檢查（https://easy2do.ncdr.nat.gov.tw/ssa/survey）系統，此部分由系統自動帶入結果。">
        <i class="fas fa-question"></i>
      </div>
      </div>
      <p
        class="textDarkGrey"
      >以下內容為直接帶入「長照機構天然災害風險檢查」系統之評估結果，如為空白表示您未曾填報過，請至 https://easy2do.ncdr.nat.gov.tw/ssa/survey 進行填答</p>
    </div>
    <div class="threeColumn">
      <input class="greyInput" type="text" />
      <input class="greyInput" type="text" />
      <input class="greyInput" type="text" />
    </div>
    <div class="threeColumn">
      <input class="greyInput" type="text" />
      <input class="greyInput" type="text" />
      <input class="greyInput" type="text" />
    </div>
  </div>
</template> 
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
  .planTopic .themeColor {
    margin: 23px 0;
  }
</style>
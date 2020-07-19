<template>
  <div class="plan-section">
    <div class="planHeader">
      <div class="planHeader__title">計畫說明</div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/advice.png"  alt />
        <span>撰寫原則或建議</span>
      </div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/template.png" alt />
        <span>參考撰寫範本</span>
      </div>
    </div>
    <div class="planTitle">
      <div class="planTitle__text">計畫目的</div>
      <div class="planTitle__redIcon" data-red="思考災害管理計畫的意義與功能、對機構之效用。">
        <i class="fas fa-question"></i>
      </div>
      <div class="planTitle__greenIcon" data-green="本計畫旨在引導機構進行災前整備、災中應變，以及災後復原工作，使機構具備災害應變能力、降低災害衝擊、保障住民及員工之生命安全，且讓機構可持續運作。">
        <i class="fas fa-pencil-alt"></i>
      </div>
    </div>
    <textarea class name id maxlength="500"></textarea>
    <div class="planTitle">
      <div class="planTitle__text">計畫架構</div>
      <div class="planTitle__redIcon" data-red="闡述計畫大綱，簡要說明計畫章節及各章節主要內容，幫助計畫之使用者快速掌握各章節之撰寫重點。">
        <i class="fas fa-question"></i>
      </div>
      <div class="planTitle__greenIcon" data-green="1. 計畫說明：說明本計畫之撰寫目的及主要章節內容。&#10;
2. 機構基本資料：羅列機構基本資訊。&#10;
3. 災害風險評估：藉由機構天然災害風險檢查評估結果、受災經驗，以及災害潛勢等，綜合研判機構之災害風險。
&#10; 4. 天然災害應變流程：機構於災害應變時的操作步驟、注意事項，以及負責人力。
&#10;5. 避難收容：說明機構就近避難、垂直撤離、異地撤離的場所資訊、避難路線，以及避難移動工具。
&#10;6. 教育訓練／演練：說明機構教育訓練或演練內容、施行頻率，與檢討紀錄。
&#10;7. 附件：災害管理流程實行所需相關資料，包含物資清單、災害應變設備清單、緊急聯絡網等。">
        <i class="fas fa-pencil-alt"></i>
      </div>
    </div>
    <div class="planRow" v-for="(item,index) in subtitles" :key="index">
      <div class="planSubtitle">{{item.title}}</div>
      <textarea v-model="item.content" class name id maxlength="500"></textarea>
    </div>
    <div class="planSubtitle">七、附件</div>
    <textarea class name id maxlength="500"></textarea>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      subtitles: [
        { title: "一、計畫說明", content: "" },
        { title: "二、機構基本資料", content: "" },
        { title: "三、災害風險評估", content: "" },
        { title: "四、天然災害應變流程", content: "" },
        { title: "五、避難收容", content: "" },
        { title: "六、教育訓練/演練", content: "" }
      ]
    };
  }
};
</script>
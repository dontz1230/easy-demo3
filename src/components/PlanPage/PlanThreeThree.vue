<template>
  <div class="plan-section plan-section-three-two">
    <TheModal @closeModal="closeModal" v-if="modal">
      <template #header>新增受災經驗</template>
      <div class="planTitle">
        <div class="planTitle__text">災害類型</div>
        <div
          class="planTitle__redIcon"
          style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
          data-red="視機構需求或環境狀況擷取其他圖資，如海嘯溢淹、斷層與土壤液化等，非必填"
        >
          <i class="fas fa-question"></i>
        </div>
      </div>

      <div class="teamClass" style="display: flex;">
        <div class="teamClass__block">
          <input type="checkbox" />
          <label for>地震</label>
        </div>
        <div class="teamClass__block">
          <input type="checkbox" />
          <label for>坡地災害</label>
        </div>
        <div class="teamClass__block">
          <input type="checkbox" />
          <label for>水災</label>
        </div>
        <div class="teamClass__block">
          <input type="checkbox" />
          <label for>其他</label>
        </div>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">災害時間</div>
        <div class="planTitle__redIcon" data-red="災害事件時間，包含年月日，如果可以，請列出起訖時間。">
          <i class="fas fa-question"></i>
        </div>
      </div>
      <textarea class name id maxlength="500"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">事件名稱</div>
        <div class="planTitle__redIcon" data-red="如：蘇迪勒颱風、0823熱帶性低壓、0612豪雨等。">
          <i class="fas fa-question"></i>
        </div>
        <div class="planTitle__greenIcon" data-green="0823熱帶性低氣壓水災">
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>
      <textarea class name id maxlength="500"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">受災情況</div>
        <div
          class="planTitle__redIcon"
          data-red="詳細描寫什麼時間點發生什麼事，如淹水深度、淹水時間、交通中斷情況、停電、撤離遭遇問題等，讓大家具體了解發生災害時，會面臨的狀況。"
        >
          <i class="fas fa-question"></i>
        </div>
        <div
          class="planTitle__greenIcon"
          data-green="1.機構內部從8月24晚上8點開始淹水，淹水最高深度90公分，聯外道路亦中斷，直到8月25日上午11點水退。
2.有3位長者較晚完成撤離，造成心裡有點害怕及輕微感冒。"
        >
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>
      <textarea class name id maxlength="500"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">可能致災原因</div>
        <div class="planTitle__redIcon" data-red="包含環境、人為因素等。">
          <i class="fas fa-question"></i>
        </div>
        <div
          class="planTitle__greenIcon"
          data-green="1.機構位處低窪，且當日雨勢過大。
2.晚上機構人力不足，且聯外道路淹水造成外部人員無法進入本機構，以至於將全數院民垂直撤離完畢花了太多時間，導致有長者泡到水。 "
        >
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>
      <textarea class name id maxlength="500"></textarea>

      <div class="planJob">
        <div class="planTitle__text inline txt-center">致災原因是否解決</div>
        <div class="planTitle__redIcon inline txt-center" data-red="若已解決，可填寫解決方法。">
          <i class="fas fa-question"></i>
        </div>
        <div class="planTitle__greenIcon inline txt-center" data-green="修正員工聯絡機制，並透過平時演練提高員工召回速度。">
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>
      <div class="teamClass" style="display: flex;">
        <div class="teamClass__block">
          <input type="checkbox" />
          <label for>未解決</label>
        </div>
        <div class="teamClass__block">
          <input type="checkbox" />
          <label for>已解決</label>
        </div>
      </div>
      <textarea class name id maxlength="500"></textarea>

      <template #footer>確定送出</template>
    </TheModal>
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
      <div class="themeColor">(三) 受災潛勢地圖分析</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;
"
        data-red="至「國家災害防救科技中心災害潛勢地圖網站」（https://dmap.ncdr.nat.gov.tw/）查詢，將查詢結果截圖張貼至此，並彙整上列資訊，說明機構面臨的災害潛勢狀況，即機構在什麼樣的環境條件下（如24小時降雨量達350毫米）可能要注意的災害風險，或是機構位於什麼災害潛勢範圍內，應加強留意哪些災害風險。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <div class="planJob">
      <div class="planTitle__text inline">1. 水災：淹水潛勢</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;
"
        data-red="請擷取淹水潛勢地圖畫面；優先建議查詢24小時累積500毫米雨量"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <label for="upload">上傳圖片</label>

    <input type="file" id="upload" name="upload" accept="image/png, image/jpeg" />
    <div>目前已上傳的圖片：</div>
    <img src="~@/assets/img/planList/demo.jpg" alt />

    <div class="planJob">
      <div class="planTitle__text inline" style="width: 250px;">2. 坡地災害：土石流、山崩</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;
"
        data-red="請至少勾選土石流潛勢溪流影響範圍及大規模崩塌災害潛勢地區"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <label for="upload">上傳圖片</label>

    <input type="file" id="upload" name="upload" accept="image/png, image/jpeg" />
    <div>目前已上傳的圖片：</div>
    <img src="~@/assets/img/planList/demo.jpg" alt />

    <div class="planJob">
      <div class="planTitle__text inline">3. 其他災害</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="視機構需求或環境狀況擷取其他圖資，如海嘯溢淹、斷層與土壤液化等，非必填"
      ><i class="fas fa-question"></i></div>
      <div class="addBtn" @click="modal =! modal">
        <i class="fa fa-plus"></i>
        新增其他災害
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th style="width: 30%;">災害類型</th>
          <th style="width: 30%;">上傳的圖</th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <th style="width: 30%;">地震</th>
          <th style="width: 30%;"><img  src="~@/assets/img/planList/demo.jpg" alt=""></th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
      </tbody>
    </table>
  </div>
</template> 
<script>
import TheModal from "./TheModal";
export default {
  components: {
    TheModal: TheModal
  },
  data() {
    return {
      modal: false
    };
  },
  methods: {
    closeModal() {
      console.log("close");
      this.modal = false;
    }
  }
};
</script>
<style lang="scss" scoped>
label {
  padding: 0 !important;
  font-size: 1rem !important;
  font-weight: normal !important;
  &:before {
    display: none;
  }
  &:after {
    display: none;
  }
}

.teamClass__block input[type="checkbox"] {
  margin: 0 12px 0 4px;
  position: relative !important;
  left: auto;
  -webkit-appearance: checkbox;
}

.planJob {
  margin: 15px 0;
  .planTitle__text {
    width: 200px;
  }
}

.addBtn {
      display: inline-block;
    float: right;
}
</style>
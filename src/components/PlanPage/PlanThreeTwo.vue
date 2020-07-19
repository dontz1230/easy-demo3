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
        <div
          class="planTitle__greenIcon"
          data-green="0823熱帶性低氣壓水災"
        >
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>
      <textarea class name id maxlength="500"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">受災情況</div>
        <div class="planTitle__redIcon" data-red="詳細描寫什麼時間點發生什麼事，如淹水深度、淹水時間、交通中斷情況、停電、撤離遭遇問題等，讓大家具體了解發生災害時，會面臨的狀況。">
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
        <div class="planTitle__text txt-center inline">致災原因是否解決</div>
        <div class="planTitle__redIcon txt-center inline" data-red="若已解決，可填寫解決方法。">
          <i class="fas fa-question"></i>
        </div>
        <div
          class="planTitle__greenIcon txt-center inline"
          data-green="修正員工聯絡機制，並透過平時演練提高員工召回速度。"
        >
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
      <div class="themeColor">(二) 受災經驗</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;
"
        data-red="填寫機構近10年的所有天然災害經驗，受災情況建議詳實記錄時間點及災情內容（如淹水時間點、淹水深度、淹水範圍、影響情況等），幫助所有同仁具體了解機構可能會面對那些災害情況，並可依據受災情況和可能致災原因思考減災與應變作為。如有相關撤離經驗，也將撤離過程細節（時間、使用工具、與外單位聯絡情況等）及遭遇問題列入。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>
    <div class="planTitle">
      <div class="planTitle__text">災害起迄年</div>
    </div>
    <div class="fromToYear">
      <input class="normalInput" type="text" />
      <span>起</span>
      <input class="normalInput" type="text" />
      <span>止</span>
      <div class="addBtn" @click="modal = !modal">
        <i class="fa fa-plus"></i>
        新增受災經驗
      </div>
    </div>
    <table class="blueTable">
      <thead>
        <tr>
          <th>災害類型</th>
          <th>時間</th>
          <th>事件名稱</th>
          <th style="
    width: 15%;
">受災情況</th>
          <th style="
    width: 15%;
">可能致災原因</th>
          <th>致災原因是否已解決</th>
          <th style="
    width: 5%;
">修改</th>
          <th style="
    width: 5%;
">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>地震</td>
          <td>無</td>
          <td></td>
          <td style="
    width: 15%;
"></td>
          <td style="
    width: 15%;
"></td>
          <td></td>
          <td style="
    width: 5%;
">修改</td>
          <td style="
    width: 5%;
">刪除</td>
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
      modal:false
    };
  },
  methods:{
    closeModal(){
      console.log('close')
      this.modal = false;
    }
  }
};
</script>
<style lang="scss">
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
</style>
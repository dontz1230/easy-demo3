<template>
  <div class="plan-section plan-section-three-four">
    <TheModal @closeModal="closeModal" v-if="modal">
      <template #header>新增綜合研判結果</template>

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
        <div class="planTitle__text">災害風險</div>
        <div class="planTitle__redIcon" data-red="請綜整前述天然災害風險檢查系統評估結果+災害經驗+災害潛勢地圖分析結果，說明在什麼情境下會發生災害，以及機構面臨的風險情況。">
          <i class="fas fa-question"></i>
        </div>
        <div
          class="planTitle__greenIcon"
          data-green="□過去10年機構沒有坡地災害經驗，也非位於土石流潛勢溪流影響範圍及大規模崩塌災害潛勢地區，然而機構附近擋土牆龜裂、附近擋土牆排水口雨後無排水（或無水痕），依據天然災害風險檢查系統初評結果。坡地災害風險為中。

□機構建物為2000年以後建設，且建物結構為鋼筋混凝土（RC）、鋼構或鋼骨鋼筋混凝土（SRC），地震風險較低，且過去10年也沒有遭受地震災害。"
        >
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>
      <textarea class name id maxlength="500"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">減災策略</div>
        <div class="planTitle__redIcon" data-red="若天然災害風險檢查評估結果為中或高，或機構落在災害潛勢範圍內，請務必填寫減災策略，若天然災害風險檢查評估結果為低且未落在災害潛勢範圍內，可不填寫。
減災策略如果致災原因已解決，可填寫已解決。
減災策略可包含硬體設施設備或是非工程的管理方法。">
          <i class="fas fa-question"></i>
        </div>
        <div
          class="planTitle__greenIcon"
          data-green="□因為致災原因尚未解決，自行裝設防水閘門減少損害，並規劃垂直避難的時機。當機構所在地發布海上陸上颱風警報或是24小時累積雨量達200毫米時，召回機構應變小組所有成員啟動應變。
□請土木技師協助鑑定擋土牆的安全狀況。□免填寫。"
        >
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>
      <textarea class name id maxlength="500"></textarea>

<div class="planTopic">
      <div class="themeColor">(一) 自然災害風險檢察系統初評結果</div>
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

    <div class="planTopic">
      <div class="themeColor">受災經驗</div>
    </div>
    <table class="blueTable">
      <thead>
        <tr>
          <th>災害類型</th>
          <th>時間</th>
          <th>事件名稱</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>地震</th>
          <th>無</th>
          <th></th>
        </tr>
         <tr>
          <th>地震</th>
          <th>無</th>
          <th></th>
        </tr>
         <tr>
          <th>地震</th>
          <th>無</th>
          <th>蘇迪勒颱風</th>
        </tr>
      </tbody>
    </table>

    <div class="planTopic">
      <div class="themeColor">災害潛勢地圖</div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th>災害類型</th>
          <th>上傳的圖</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>地震地震地震地震</th>
          <th></th>
        </tr>
      </tbody>
    </table>
     

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
      <div class="themeColor">(四) 綜合研判結果</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="請綜整前述天然災害風險檢查系統評估結果+災害經驗+災害潛勢地圖分析結果，說明在什麼情境下會發生災害，並優先針對機構面臨較高風險類型的災害，撰寫本災害管理計畫。"
      ><i class="fas fa-question"></i></div>
      <div class="addBtn"  @click="modal = !modal">
        <i class="fa fa-plus"></i>
        新增研判結果
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th>災害類型</th>
          <th style="width: 30%;">受災情況</th>
          <th style="width: 30%;">可能致災原因</th>
          <th style="width: 10%;">修改</th>
          <th style="width: 10%;">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td style="width: 30%;"></td>
          <td style="width: 30%;"></td>
          <td style="width: 10%;">修改</td>
          <td style="width: 10%;">刪除</td>
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
      this.modal = false;
    }
  }
};
</script>
<style lang="scss" scoped>
  .planTopic .themeColor {
    margin: 23px 0;
  }
</style>
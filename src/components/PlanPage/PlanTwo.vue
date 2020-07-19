<template>
  <div class="plan-section">
    <div class="planHeader">
      <div class="planHeader__title">機構基本資料</div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/advice.png" alt />
        <span>撰寫原則或建議</span>
      </div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/template.png" alt />
        <span>參考撰寫範本</span>
      </div>
    </div>
    <div class="planTitle">
      <div class="planTitle__text">機構名稱</div>
      <div class="planTitle__redIcon" data-red="向政府登記之全名。">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <textarea class name id maxlength="500"></textarea>
    <div class="planTitle">
      <div class="planTitle__text">機構地址</div>
      <div class="planTitle__redIcon" data-red="機構完整地址包含村里。">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <textarea placeholder="新北市健康區安心里長壽路1號1~2樓" class name id maxlength="500"></textarea>

    <div class="planTitle">
      <div class="planTitle__text">機構類型</div>
    </div>
    <div class="checkBlock">
      <div class="checkContainer">
        <input type="checkbox" name id />
        <label for>老人福利機構</label>
      </div>
      <div class="checkContainer">
        <input type="checkbox" name id />
        <label for>身心障礙福利機構</label>
      </div>
      <div class="checkContainer">
        <input type="checkbox" name id />
        <label for>兒少福利機構</label>
      </div>
      <div class="checkContainer">
        <input type="checkbox" name id />
        <label for>一般護理之家</label>
      </div>
    </div>
    <div class="checkBlock">
      <div class="checkContainer">
        <input type="checkbox" name id />
        <label for>精神護理之家</label>
      </div>
      <div class="checkContainer">
        <input type="checkbox" name id />
        <label for>精神復健機構</label>
      </div>
      <div class="checkContainer">
        <input type="checkbox" name id />
        <label for>住宿式長照機構(含提供住宿服務之綜合長照機構)</label>
      </div>
    </div>
    <div class="checkBlock">
      <div class="checkContainer">
        <input type="checkbox" name id />
        <label for>其他</label>
      </div>
    </div>

    <div class="planTitle">
      <div class="planTitle__text">核定床位數</div>
      <div class="planTitle__redIcon" data-red="註明不同類型（如老人福利機構為長照、養護、失智，以及安養；身心障礙福利機構為成人日間照顧、全日型、早療日間照顧、夜間型住宿等）的核定床位數或是服務量。">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <textarea class name id maxlength="500"></textarea>
    <div class="planTitle">
      <div class="planTitle__text">可自行增補其他項目</div>
      <div class="planTitle__redIcon" data-red="可自行增補其他基本且重要的機構資訊。">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <div class="twoColumn">
      <input type="text" name id />
      <input type="text" name id />
    </div>
    <div class="twoColumn">
      <input type="text" name id />
      <input type="text" name id />
    </div>
    <div class="addBtn">
      <i class="fa fa-plus"></i>
      新增機構資訊
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
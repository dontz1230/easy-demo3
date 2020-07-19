<template>
  <div class="plan-section">
    <div class="planHeader">
      <div class="planHeader__title">長照機構災管計畫 編輯封面</div>
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
      <div class="planTitle__text">計畫目的</div>
      <div class="planTitle__redIcon" data-red="思考災害管理計畫的意義與功能、對機構之效用。">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <textarea class name id maxlength="500"></textarea>
    <div class="planTitle">
      <div class="planTitle__text">計劃名稱</div>
      <div class="planTitle__redIcon" data-red="顯示於封面主題第2列。">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <textarea class name id maxlength="500"></textarea>

    <div class="planTitle">
      <div class="planTitle__text">撰寫者</div>
      <div class="planTitle__redIcon" data-red="列出本計畫撰寫人員資訊（職稱 姓名），建議撰寫過程可邀集相關成員（員工、住民）共同討論計畫內容。">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <textarea class name id maxlength="500"></textarea>

    <div class="planTitle">
      <div class="planTitle__text">核定者</div>
      <div class="planTitle__redIcon" data-red="列出本計畫核定人員資訊（職稱 姓名），建議為機構內部最高主管">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <input type="text" name id />

    <div class="planTitle">
      <div class="planTitle__text">更新頻率</div>
      <div class="planTitle__redIcon" data-red="計畫務必定期更新，建議每2年更新一次，可視需求調整，須經常更新之資料項目可放於附件，以利抽換及彙整。">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <input type="text" name id />

    <div class="planTitle">
      <div class="planTitle__text">封面樣式</div>
      <div
        class="planTitle__redIcon"
        data-red="註明不同類型（如老人福利機構為長照、養護、失智，以及安養；身心障礙福利機構為成人日間照顧、全日型、早療日間照顧、夜間型住宿等）的核定床位數或是服務量。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>
    <div class="styleList">
      <div class="styleList__left">
        <div class="styleBlock">
          <input type="radio" name="style" id />
          <label for="style">樣式A</label>
          <img src="~@/assets/img/planList/typea.jpg" alt />
          <div class="styleBlock__btn">
            <i class="fas fa-eye"></i>
            預覽
          </div>
        </div>
        <div class="styleBlock">
          <input type="radio" name="style" id />
          <label for="style">樣式B</label>
          <img src="~@/assets/img/planList/typeb.jpg" alt />
          <div class="styleBlock__btn">
            <i class="fas fa-eye"></i>
            預覽
          </div>
        </div>
        <div class="styleBlock">
          <input type="radio" name="style" id />
          <label for="style">樣式C</label>
          <img src="~@/assets/img/planList/typec.jpg" alt />
          <div class="styleBlock__btn">
            <i class="fas fa-eye"></i>
            預覽
          </div>
        </div>
      </div>
      <div class="styleList__right">
        <label for="upload">上傳圖片</label>

        <input type="file" id="upload" name="upload" accept="image/png, image/jpeg" />
        <div>目前已上傳的圖片：</div>
        <img src="~@/assets/img/planList/demo.jpg" alt />
         <div class="deleteBtn">刪除</div>
      </div>
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
.planTitle {
  width: 180px;
}

.styleList {
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  &__left {
    display: flex;
    justify-content: space-between;
    border-right: 3px solid #d4d4d4;
    padding-right: 8px;
    margin-right: 8px;
    .styleBlock {
      display: flex;
      align-items: center;
          padding: 12px 20px;
    flex-direction: column;
    background: #fff;
    img {
      margin: 6px auto;
    }
      &__btn {
        border: 1px solid #d4d4d4;
        border-radius: 4px;
        padding: 2px 10px;
      }
    }
  }
}

input[type="radio"] {
  display: inline-block;
  left: unset;
  position: relative;
  width: 30px;
  height: 30px;
  border: 3px solid #d4d4d4;
  border-radius: 50em;
  -webkit-appearance: auto;
}

.deleteBtn {
  width: 50px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background:#f45454;
  color:#fff;
  border-radius: 4px;
}
</style>
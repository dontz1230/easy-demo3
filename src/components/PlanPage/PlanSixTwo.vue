<template>
  <div class="plan-section plan-section-three-four">
     <TheModal @closeModal="closeModal" v-if="modal">
      <template #header>新增物資</template>
     <div class="planTitle">
        <div class="planTitle__text">物資分類</div>
      </div>
     <textarea name="" id="" cols="30" rows="10"></textarea>
      <div class="planTitle">
        <div class="planTitle__text">物資名稱</div>
      </div>
     <textarea name="" id="" cols="30" rows="10"></textarea>
      <div class="planTitle">
        <div class="planTitle__text">必要數量</div>
      </div>
     <textarea name="" id="" cols="30" rows="10"></textarea>
      <div class="planTitle">
        <div class="planTitle__text">現有數量</div>
      </div>
     <textarea name="" id="" cols="30" rows="10"></textarea>
     <div class="planTitle">
        <div class="planTitle__text">保管場所</div>
      </div>
     <textarea name="" id="" cols="30" rows="10"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">有效期限</div>
      </div>
     <textarea name="" id="" cols="30" rows="10"></textarea>
      <div class="planTitle">
        <div class="planTitle__text">供應商名稱</div>
      </div>
     <textarea name="" id="" cols="30" rows="10"></textarea>
      <div class="planTitle">
        <div class="planTitle__text">供應商聯絡方式</div>
      </div>
     <textarea name="" id="" cols="30" rows="10"></textarea>
      
    
      <template #footer>確定送出</template>
    </TheModal>
    <div class="planHeader">
      <div class="planHeader__title">附件</div>
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
      <div class="themeColor">物資清單</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="如需加入其他附件，例如員工名冊、院民需求清冊、院民家屬聯繫名冊等，可自行利用匯出之Word檔新增。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <div class="planJob">
      <div class="planTitle__text inline">物資儲備標準</div>
    </div>
    <textarea class name id maxlength="500"></textarea>

    <div class="planJob">
      <div class="planTitle__text inline">儲備物資</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="依據災害可能影響的時間、機構所處的環境等，預估物資所需儲備量，建議以3到7天為儲備標準，如果機構位於山區或易形成孤島地區則可以14天為儲備天數。"
      >
        <i class="fas fa-question"></i>
      </div>
      <div class="addBtn" @click="modal = !modal">
        <i class="fa fa-plus"></i>
        新增物資
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th>類別</th>
          <th>名稱</th>
          <th>必要數量</th>
          <th>現有數量</th>
          <th style="width: 12%;">保管場所</th>
          <th style="width: 12%;">有效期限</th>
          <th style="width: 12%;">供應商名稱</th>
          <th style="width: 12%;">供應商聯絡方式</th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>食物</th>
          <th>飲用水</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
        <tr>
          <th>食物</th>
          <th>白米</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
        <tr>
          <th>食物</th>
          <th>罐頭</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
        <tr>
          <th>食物</th>
          <th>奶粉</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
        <tr>
          <th>醫療用品</th>
          <th>退燒藥</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
        <tr>
          <th>醫療用品</th>
          <th>紗布</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
        <tr>
          <th>醫療用品</th>
          <th>胰島素</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
        <tr>
          <th>生活用品</th>
          <th>紙尿布</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
        <tr>
          <th>生活用品</th>
          <th>內衣褲</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
        <tr>
          <th>生活用品</th>
          <th>衛生紙</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
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
.planTopic {
  margin: 30px auto;
}

.planTitle__text {
  width: 200px;
}

.planJob {
  margin: 30px auto;
  img {
    vertical-align: bottom;
    margin-left: 20px;
    margin-bottom: 4px;
  }
  .addBtn {
    display: inline-block;
    float: right;
  }
}
</style>

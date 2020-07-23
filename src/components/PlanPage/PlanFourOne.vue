<template>
  <div class="plan-section plan-section-three-four">

 <TheModal @closeModal="closeModal" v-if="modal">
      <template #header>新增應變小組負責人員</template>
   <div class="planJob">
      <div class="planTitle__text inline">應變人員</div>
      <div
          class="planTitle__redIcon"
          style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
          data-red="填寫機構內所有應變人員姓名、聯絡電話。
機構內所有人員均應納入應變編制內。"
        >
          <i class="fas fa-question"></i>
        </div>
      <div class="addBtn" style="display: inline-block;
    float: right;
    clear: both;">
        <i class="fa fa-plus"></i>
        新增應變人員
      </div>
    </div>

     
<div class="twoColumn" style="width: 100%;">
      <input type="text" placeholder="應變人員姓名" name id />
      <input type="text" placeholder="應變人員電話" name id />
    </div>
    <div class="twoColumn" style="width: 100%;">
      <input type="text" placeholder="應變人員姓名" name id />
      <input type="text" placeholder="應變人員電話" name id />
    </div>
    <div class="twoColumn" style="width: 100%;">
      <input type="text" placeholder="應變人員姓名" name id />
      <input type="text" placeholder="應變人員電話" name id />
    </div>
    <div class="twoColumn" style="width: 100%;">
      <input type="text" placeholder="應變人員姓名" name id />
      <input type="text" placeholder="應變人員電話" name id />
    </div>
    <div class="twoColumn" style="width: 100%;">
      <input type="text" placeholder="應變人員姓名" name id />
      <input type="text" placeholder="應變人員電話" name id />
    </div>
     

      <template #footer>確定送出</template>
    </TheModal>

    <div class="planHeader">
      <div class="planHeader__title">天然災害應變流程</div>
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
      <div class="themeColor">應變人員資料設定</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="填寫機構內所有應變人員姓名、聯絡電話。機構內所有人員均應納入應變編制內。"
      ><i class="fas fa-question"></i></div>
      <div class="addBtn" style="position: absolute;
    right: 0;"  @click="modal = !modal">
        <i class="fa fa-plus"></i>
        新增應變人員
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th>姓名</th>
          <th style="width: 60%;">聯絡電話</th>
          <th style="width: 10%;">修改</th>
          <th style="width: 10%;">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ＯＯＯ</td>
          <td style="width: 60%;">09XX-XXX-XXX</td>
          <td class="underline" style="width: 10%;">修改</td>
          <td class="underline" style="width: 10%;">刪除</td>
        </tr>
        <tr>
          <td>ＯＯＯ</td>
          <td style="width: 60%;">09XX-XXX-XXX</td>
          <td class="underline" style="width: 10%;">修改</td>
          <td class="underline" style="width: 10%;">刪除</td>
        </tr>
        <tr>
          <td>ＯＯＯ</td>
          <td style="width: 60%;">09XX-XXX-XXX</td>
          <td class="underline" style="width: 10%;">修改</td>
          <td class="underline" style="width: 10%;">刪除</td>
        </tr>
        <tr>
          <td>ＯＯＯ</td>
          <td style="width: 60%;">09XX-XXX-XXX</td>
          <td class="underline" style="width: 10%;">修改</td>
          <td class="underline" style="width: 10%;">刪除</td>
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

input{
  border: 1px solid;
}

.twoColumn {
  grid-template-columns: 1fr 1fr;
}
</style>
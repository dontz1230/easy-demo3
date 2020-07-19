<template>
  <div class="plan-list">
    <loading v-if="isLoading" />
    <TheModal @closeModal="closeModal" v-if="modalDelete">
      <template #header>刪除</template>
      <div class="modalContent">
        <p>按下確定後，計畫書就立即刪除無法找回～</p>
      <p>您確定要刪除您的計劃書嗎？</p>
      <div class="confirmBtn modalBtn">確定</div>
      <div class="cancelBtn modalBtn" @click="closeModal">取消</div>
      </div>
    </TheModal>
    <div class="plan-list__title">
      <h1>長照機構災管計畫工具</h1>
    </div>
    <div class="plan-list__content">
      <div class="plan-block">
        <div class="plan-block__content">
          <i class="fa fa-plus"></i>
          <span>建立新計畫</span>
        </div>
      </div>
      <div class="plan-block new-plan" v-for="(plan,index) in plans" :key="index">
        <div class="new-plan__header">
          <span>{{plan.year}}</span>
          <span @click="modalDelete = true" class="new-plan__header__close">
            <i class="fa fa-times"></i>
          </span>
        </div>
        <div class="new-plan__content">
          <div class="plan-options">
            <div class="plan-options__btn">
              <i class="fas fa-edit"></i>
              <span>修改</span>
            </div>
            <div class="plan-options__btn">
              <i class="fas fa-eye"></i>
              <span>預覽</span>
            </div>
          </div>
          <div class="plan-img">
            <img :src="plan.photo" alt />
          </div>
          <span>編修日期：{{plan.createTime}}</span>
        </div>
        <div class="new-plan__footer">
          <img src="~@/assets/img/planList/docIcon.png" alt />
          <a :href="plan.downloadLink">下載計畫書</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';

export default {
  data: function() {
    return {
      isLoading: false,
      modalDelete: false,
      plans: [
        {
          year: 2020,
          photo:
            "https://miro.medium.com/max/1088/1*ZxRo2Tzei-wZOlotb5vzSw.png",
          createTime: "2020.05.16",
          downloadLink: "https://google.com"
        },
        {
          year: 2020,
          photo:
            "https://miro.medium.com/max/1088/1*ZxRo2Tzei-wZOlotb5vzSw.png",
          createTime: "2020.05.16",
          downloadLink: "https://google.com"
        },
        {
          year: 2020,
          photo:
            "https://miro.medium.com/max/1088/1*ZxRo2Tzei-wZOlotb5vzSw.png",
          createTime: "2020.05.16",
          downloadLink: "https://google.com"
        },
        {
          year: 2020,
          photo:
            "https://miro.medium.com/max/1088/1*ZxRo2Tzei-wZOlotb5vzSw.png",
          createTime: "2020.05.16",
          downloadLink: "https://google.com"
        }
      ]
    };
  },
  computed: {},
  methods: {
    closeModal(){
      this.modalDelete = !this.modalDelete 
    }
  },
  components: {
    TheModal: () => import("../components/PlanPage/TheModal")
  }
};
</script>
<style lang="scss" scoped>
.modal {
  color: #787878;
}
.plan-list__content {
  width: 90%;
  margin: auto;
}
.modal {
  height: auto !important;
  
  .modalFooter {
    display: none !important;
  }
}

.modalContent {
    text-align: center !important;
  }

.modalBtn {
  display: inline-block;
  padding: 0 24px;
  margin: 0 12px;
  color: #fff;
}

.cancelBtn {
  background: #66cdb6;
}

.confirmBtn {
  background: rgb(159, 159, 159);
}
</style>
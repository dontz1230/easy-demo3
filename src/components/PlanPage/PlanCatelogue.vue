<template>
  <div class="plan-catelogue">
    <div class="stepList" v-for="(item,index) in steps" :key="index">
      <div class="stepList__dot"></div>
      <div class="stepList__index" :class="{'active' : step===item.page}">{{item.index}}</div>
      <div
        class="stepList__title"
        :class="{'active' : step===item.page && step !==3}"
      >
        <span @click="changeStep(item.page)">{{item.title}}</span>
        <div v-if="item.index === '三.'" class="subTitle">
          <ul>
            <li :class="{'active' : step===3}" @click="changeStep(3)">(一)自然災害風險檢查結果</li>
            <li :class="{'active' : step===4}" @click="changeStep(4)">(二)受災經驗</li>
            <li :class="{'active' : step===5}" @click="changeStep(5)">(三)災害潛勢地圖分析</li>
            <li :class="{'active' : step===6}" @click="changeStep(6)">(四)綜合研判結果</li>
          </ul>
        </div>
        <div v-if="item.index === '四.'" class="subTitle">
          <ul>
            <li :class="{'active' : step===7}" @click="changeStep(7)">應變人員資料設定</li>
            <li>
              <div :class="{'active' : step===8}">
                <span @click="changeStep(8)">(一)地震災害應變流程</span>
              </div>
              <ul class="subTitleContainer">
                <li @click="changeStep(8)">
                   <span v-if=" step ===8" class="activeCircle"></span> 流程圖</li>
                <li @click="changeStep(9)">
                   <span v-if=" step ===9" class="activeCircle"></span> 應變工作分配</li>
                <li @click="changeStep(10)">
                   <span v-if=" step ===10"  class="activeCircle"></span> 應變檢核表</li>
              </ul>
            </li>
            <li :class="{'active' : step===11}" @click="changeStep(11)">(二)颱虹災害應變流程</li>
          </ul>
        </div>
        <div v-if="item.index === '五.'" class="subTitle">
          <ul class="subTitleContainer">
            <li  @click="changeStep(12)">
               <span v-if=" step ===12" class="activeCircle"></span> 就近避難</li>
            <li>垂直避難</li>
            <li  @click="changeStep(13)">
              <span v-if=" step ===13" class="activeCircle"></span> 異地避難</li>
          </ul>
        </div>
        <div v-if="item.index === '七.'" class="subTitle">
          <ul class="subTitleContainer">
            <li @click="changeStep(15)">
               <span v-if=" step ===15" class="activeCircle"></span> 物資清單</li>
            <li>災害應變設備</li>
            <li @click="changeStep(16)">
               <span v-if=" step ===16" class="activeCircle"></span> 緊急聯絡網</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: "",
      steps: [
        {
          index: "一.",
          page: 1,
          title: "計畫說明"
        },
        {
          inde: "二.",
          page: 2,
          title: "機構基本資料"
        },
        {
          index: "三.",
          page: 3,
          title: "計畫說明"
        },
        {
          index: "四.",
          page: 4,
          title: "天然災害應變流程"
        },
        {
          index: "五.",
          page: "4",
          title: "避難收容"
        },
        {
          index: "六.",
          page: 4,
          title: "教育訓練/演練"
        },
        {
          index: "七.",
          page: 5,
          title: "附件"
        }
      ]
    };
  },
  methods: {
    changeStep(step) {
      if(step !== 3 || step!==4){
        this.$emit("changeStep", step);
      this.step = step;
      }
      
    }
  }
};
</script>
<style lang="scss" scoped>
.subTitleContainer {
  background: #66cdb6;
  color: #fff;
  border-radius: 10px;
  padding: 10px;
}

.active {
  color: #66cdb6;
}

.activeCircle {
    border-radius: 100%;
    width: 20px;
    height: 20px;
    border: 4px solid #EAEAEA;
    background: #66CDB6;
    display: inline-block;
    vertical-align: middle;
}
</style>
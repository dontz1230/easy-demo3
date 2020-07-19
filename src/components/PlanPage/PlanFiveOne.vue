<template>
  <div class="plan-section plan-section-three-four">
    <div class="planHeader">
      <div class="planHeader__title">避難收容場所</div>
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
      <div class="themeColor">就近避難</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="為因應不同災害類型與災害應變情況，平時即應於機構內、外事先選定數個避難收容地點。
選定避難收容地點後，務必與避難收容地點相關人員於平時建立合作關係，並確認該避難地點可在災時提供實際協助。
就近避難指在機構內部或附近避難，但不須交通工具移動，例如至機構門口停車場、機構中庭廣場、機構地震避難平台、機構旁公園空地等，通常適用於地震。"
      ><i class="fas fa-question"></i></div>
    </div>

    <div class="planJob">
      <div class="planTitle__text inline">災害類型</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="臺灣常見的天然災害為地震、水災，以及坡地災害，如有需要可自行增補其他災害類別，如海嘯、風災等。
若不同災害類別適用同樣避難類型與相同避難收容地點，可合併填寫一份表格。"
      ><i class="fas fa-question"></i></div>
    </div>
    <textarea class name id maxlength="500"></textarea>
    <div class="planJob">
      <div class="planTitle__text inline">避難路線</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="應將避難路線記載於機構建物平面圖、機構附近環境地圖上。
避難路線選擇注意事項：
1.無論是機構內部或外部移動，盡可能設定兩條以上避難路徑。
2.機構內部之避難路線應隨時保持動線通暢。"
      ><i class="fas fa-question"></i></div>
    </div>
    <img src="~@/assets/img/planList/upload.jpg" alt />

    <div class="planJob">
      <div class="planTitle__text inline">移動工具</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="填寫移動工具名稱、數量、置放場所，以及備註。"
      ><i class="fas fa-question"></i></div>
      <div class="addBtn">
        <i class="fa fa-plus"></i>
        新增移動工具
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th style="width: 23%;">避難移動工具名稱</th>
          <th>數量</th>
          <th style="width: 23%;">置放場所</th>
          <th style="width: 23%;">備註</th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
           <th style="width: 23%;">輪椅</th>
          <th>20</th>
          <th style="width: 23%;">14台在每一個房間門口<br>6台在一樓倉庫</th>
          <th style="width: 23%;"></th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
        <tr>
          <th style="width: 23%;">擔架</th>
          <th>6</th>
          <th style="width: 23%;">一樓倉庫</th>
          <th style="width: 23%;"></th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
      </tbody>
    </table>
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

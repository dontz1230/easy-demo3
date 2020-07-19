<template>
  <div class="historyBtn">
    <div class="historyBtn__pre" v-if="step !== 1" @click="prevNext(-1)">上一步</div>
    <div class="historyBtn__Next" v-if="step !== 7" @click="prevNext(1)">下一步</div>
  </div>
</template>
<script>
export default {
  name: "PreviousNext",
  props: {
    step: {
      type: Number,
      default: 1
    }
  },
  methods: {
    prevNext(type) {
      console.log(type)
      this.$emit("prevNext", type);
    }
  }
};
</script>

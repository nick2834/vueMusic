<template>
  <div class="close_bar">
    <template v-if="isMainWindow">
      <a-icon class="icon unDrag" type="minus" title="" />
      <a-icon class="icon unDrag" type="plus" title="" />
    </template>
    <a-icon
      class="icon close unDrag"
      type="close"
      title="关闭"
      @click="closeWin"
    />
  </div>
</template>

<script>
export default {
  props: {
    isMainWindow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeWin() {
      this.$win.closeWin();
    },
  },
};
</script>

<style lang="less" scoped>
.close_bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  .icon {
    width: 35px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333333;
    cursor: pointer;
    &:hover {
      background: rgb(234, 235, 236);
    }
    &:last-child {
      border-top-right-radius: 2px;
      &:hover {
        background: red;
        color: #ffffff;
      }
    }
  }
}</style
>>

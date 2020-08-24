<template>
  <div class="search_content unDrag">
    <input class="input" type="text" placeholder="搜索" />
    <a-icon class="icon" slot="prefix" type="search" />
    <a-icon class="icon icon_plus" slot="prefix" type="plus" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.search_content {
  position: relative;
  padding: 25px 10px 10px;
  .input {
    border: 1px solid #eaeaea;
    padding-left: 25px;
    box-sizing: border-box;
    width: 150px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    border-radius: 2px;
    &::-webkit-input-placeholder {
      color: #999999;
    }
  }
  .icon {
    position: absolute;
    left: 18px;
    top: 37.5px;
    transform: translateY(-50%);
    font-size: 14px;
    &.icon_plus {
      right: 10px;
      left: unset;
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: rgb(245, 245, 245);
      }
    }
  }
}
</style>

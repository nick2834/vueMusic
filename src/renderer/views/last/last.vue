<template>
  <a-layout class="content">
    <a-layout-sider class="side_container">
      <div class="search_content unDrag">
        <input class="input" type="text" placeholder="搜索" />
        <a-icon class="icon" slot="prefix" type="search" />
        <a-icon class="icon icon_plus" slot="prefix" type="plus" />
      </div>
      <a-list class="playlists unDrag" item-layout="horizontal" :data-source="playlists">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-list-item-meta :description="item.copywriter">
            <a slot="title" href="">{{ item.name }}</a>
            <a-avatar slot="avatar" :src="item.coverImgUrl" />
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </a-layout-sider>
    <a-layout>
      <a-layout-content>
        <closeBar :isMainWindow="true" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import closeBar from "@/components/closeBar/closeBar";
export default {
  data() {
    return {
      playlists: [],
    };
  },
  components: { closeBar },
  mounted() {
    let self = this;
    this.$http
      .get("http://45.32.59.106:3000/top/playlist/highquality")
      .then(({ data }) => {
        console.log(data);
        if (data && data.playlists) {
          self.playlists = data.playlists;
        }
      });
  },
};
</script>

<style lang="less">
.content {
  height: 100%;
  .side_container {
    background: #ffffff;
    border-right: 1px solid #eaeaea;
    padding: 25px 10px 10px;
    box-sizing: border-box;
    .search_content {
      position: relative;
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
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
        &.icon_plus {
          right: 0;
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
    .playlists{
      height: calc(100% - 60px);
      overflow-y: scroll;
    }
  }
}
</style>

<template>
  <a-layout class="content">
    <a-layout-sider class="side_container">
      <search-bar />
      <div class="todo_content unDrag">
        <a-icon type="check-circle" />
        <span>代办·0</span>
        <a-icon class="close" type="close-circle" theme="filled" />
      </div>
      <a-list
        class="playlists unDrag"
        item-layout="horizontal"
        :data-source="playlists"
      >
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-list-item-meta
            class="textOverflow"
            description="Ant Design, a design language"
          >
            <a slot="title" href="">{{ item.title }} {{ index }}</a>
            <a-avatar shape="square" size="large" slot="avatar" />
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
import searchBar from "@/components/searchBar/searchBar";
export default {
  data() {
    return {
      playlists: [
        {
          title: "Ant Design Title 1",
        },
        {
          title: "Ant Design Title 2",
        },
        {
          title: "Ant Design Title 3",
        },
        {
          title: "Ant Design Title 4",
        },
        {
          title: "Ant Design Title 1",
        },
        {
          title: "Ant Design Title 2",
        },
        {
          title: "Ant Design Title 3",
        },
        {
          title: "Ant Design Title 4",
        },
        {
          title: "Ant Design Title 1",
        },
        {
          title: "Ant Design Title 2",
        },
        {
          title: "Ant Design Title 3",
        },
        {
          title: "Ant Design Title 4",
        },
      ],
    };
  },
  components: { closeBar, searchBar },
  mounted() {
    let self = this;
  },
};
</script>

<style lang="less">
.todo_content {
  border-bottom: 1px solid #eaeaea;
  min-height: 35px;
  line-height: 35px;
  padding: 0 12px;
  cursor: pointer;
  position: relative;
  .close {
    position: absolute;
    display: none;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
  }
  &:hover {
    background: #eaeaea;
    .close {
      display: block;
    }
  }
}
.playlists {
  height: calc(100% - 95px);
  overflow-y: scroll;
  .ant-list-item {
    padding: 12px 10px;
    &:hover {
      background: #eaeaea;
    }
  }
  .ant-list-item-meta-avatar {
    margin-right: 10px;
  }
  .ant-list-item-meta-title {
    max-width: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333333;
  }
  .ant-list-item-meta-description {
    max-width: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgb(121, 121, 121);
    font-size: 12px;
  }
}
</style>

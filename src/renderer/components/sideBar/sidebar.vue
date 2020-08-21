<template>
  <div class="sidebar" @click.stop="isShow = false">
    <a-avatar
      :size="40"
      shape="square"
      class="avatar unDrag"
      :src="avatar"
      @click.stop="showUserInfo"
    >
    </a-avatar>
    <img
      v-if="status"
      class="status unDrag"
      :src="status.icon"
      :title="status.title"
      @click.stop="showStatus"
    />
    <ul class="status_list unDrag" v-if="isShow">
      <li
        v-for="(item, index) in statusList"
        :key="index"
        @click.stop="selectStatus(item)"
      >
        <img class="icon" :src="item.icon" alt="" />
        <span class="title">{{ item.title }}</span>
      </li>
    </ul>
    <ul class="nav unDrag">
      <router-link
        tag="li"
        class="item"
        v-for="(item, index) in baseRoutes"
        :key="index"
        :to="item.path"
      >
        <img
          class="icon"
          :src="activeId == index ? item.meta.activeIcon : item.meta.icon"
          @click="selectRoute(index)"
          @mouseover="changeImage(item.name, 'hover', index)"
          @mousedown="changeImage(item.name, 'selected', index)"
          @mouseleave="changeImage(item.name, 'normal', index)"
        />
      </router-link>
    </ul>

    <ul class="tool unDrag">
      <li v-for="(item, index) in toolIcon" class="item" :key="index">
        <img
          class="icon"
          :src="item.icon"
          @mouseover="changeImageSrc(item.name, 'hover', index)"
          @mousedown="changeImageSrc(item.name, 'selected', index)"
          @mouseleave="changeImageSrc(item.name, 'normal', index)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: require("@/assets/images/avatar.jpg"),
      statusList: [
        {
          title: "在线",
          icon: require("@/assets/images/imonline.png"),
        },
        {
          title: "忙碌",
          icon: require("@/assets/images/busy.png"),
        },
        {
          title: "隐身",
          icon: require("@/assets/images/invisible.png"),
        },
        {
          title: "离线",
          icon: require("@/assets/images/away.png"),
        },
      ],
      isShow: false,
      baseRoutes: [],
      toolIcon: [
        {
          icon: require("@/assets/images/more_normal.png"),
          name: "more",
        },
        {
          icon: require("@/assets/images/main_normal.png"),
          name: "main",
        },
      ],
      activeId: 0
    };
  },
  computed: {
    status: {
      get() {
        return this.$store.state.user.status;
      },
      set(val) {
        this.$store.dispatch("updateStatus", val);
      },
    },
  },
  watch: {
    $route: {
      handler: (val) => {
        let self = this;
        console.log(val);
      },
      deep: true, //对象内部的属性监听，也叫深度监听
    },
  },
  mounted() {
    let self = this;
    let routes = self.$router.options.routes;
    let status = new Object();
    status.icon = self.statusList[0].icon;
    status.title = self.statusList[0].title;
    self.status = status;
    self.baseRoutes = routes.filter((item) => item.children)[0].children;
    console.log(self.baseRoutes);
  },
  methods: {
    showUserInfo(e) {
      let win = this.$win.createWin({
        width: 400,
        height: 600,
        windowConfig: {
          router: "/user",
          name: "User",
        },
      });
      win.show();
    },
    showStatus() {
      this.isShow = !this.isShow;
    },
    selectStatus(item) {
      let self = this;
      self.status = item;
      self.isShow = false;
    },
    changeImage(key, val, index) {
      let self = this;
      let baseRoutes = self.baseRoutes;
      baseRoutes.map((item, i) => {
        if (index == i) {
          item.meta.icon = require(`@/assets/images/${key}_${val}.png`);
        }
      });
    },
    changeImageSrc(key, val, index) {
      let self = this;
      let toolIcon = self.toolIcon;
      toolIcon.map((item, i) => {
        if (index == i) {
          item.icon = require(`@/assets/images/${key}_${val}.png`);
        }
      });
    },
    selectRoute(index){
      console.log(index)
      this.activeId = index
    }
  },
};
</script>

<style lang="less">
.sidebar {
  height: 100%;
  width: 54px;
  position: relative;
  border-right: 1px solid #eaeaea;
  .avatar {
    display: block;
    margin: 20px auto;
    cursor: pointer;
    position: relative;
  }
  .status {
    position: absolute;
    z-index: 2;
    top: 50px;
    width: 10px;
    height: 10px;
    right: 10px;
    cursor: pointer;
    border-radius: 50%;
    &:active {
      box-shadow: 0px 1px 7px #969696;
    }
  }
  .status_list {
    position: absolute;
    right: -80px;
    background: #ffffff;
    box-shadow: 0px 1px 7px #969696;
    border-radius: 2px;
    font-size: 12px;
    top: 60px;
    z-index: 2;
    li {
      padding: 8px 10px;
      cursor: pointer;
      display: flex;
      &:hover {
        background: rgb(237, 237, 237);
      }
      .icon {
        width: 10px;
        height: 10px;
      }
      .title {
        margin: 0 15px 0 5px;
      }
    }
  }
  .tool,
  .nav {
    position: absolute;
    bottom: 0;
    width: 100%;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;
      .icon {
        width: 25px;
        height: 25px;
      }
    }
  }
  .nav {
    position: relative;
  }
}
</style>

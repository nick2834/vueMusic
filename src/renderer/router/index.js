import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "*",
      redirect: "/",
    },
    {
      path: "/",
      redirect: "/last",
    },
    {
      path: "/",
      name: "main",
      component: require("@/views/Main/main").default,
      children: [
        {
          path: "last",
          name: "last",
          component: require("@/views/last/last").default,
          meta: {
            icon: require("@/assets/images/last_normal.png"),
            activeIcon: require("@/assets/images/last_selected.png")
          },
          children:[

          ]
        },
        {
          path: "contacts",
          name: "contacts",
          component: require("@/views/contacts/contacts").default,
          meta: {
            icon: require("@/assets/images/contacts_normal.png"),
            activeIcon: require("@/assets/images/contacts_selected.png")
          },
        },
        {
          path: "file",
          name: "file",
          component: require("@/views/file/file").default,
          meta: {
            icon: require("@/assets/images/file_normal.png"),
            activeIcon: require("@/assets/images/file_selected.png")
          },
        },
      ],
    },
    {
      path: "/user",
      name: "User",
      component: require("@/views/common/user").default,
    },
  ],
  linkActiveClass: "active",
});

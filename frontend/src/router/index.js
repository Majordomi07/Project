import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/admin",
    component: Admin,
    meta: {
      admin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.admin) {
    const admin = JSON.parse(localStorage.getItem("authData")).admin;
    console.log(admin);
    if (admin == "1") {
      next();
    } else {
      alert("Nem vagy admin");
    }
  } else {
    next();
  }
});

export default router;

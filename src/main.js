import VueMaterial from "vue-material";
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import vuetify from './plugins/vuetify'

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import Detail from "./pages/Detail";
import List from "./pages/List";
import About from "./pages/About";
import Login from "./pages/Login";

import NotFound from './pages/error-pages/NotFound';

import DataService from "./dataservice";

Vue.use(VueMaterial);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: [
    { name: "List", path: "/", component: List },
    { name: "Detail", path: "/detail/:id", component: Detail },
    { name: "About", path: "/about", component: About },
    { name: "Login", path: "/login", component: Login },
    { name: 'NotFound', path: '*', component: NotFound }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !DataService.isAuthenticated()) {
    next({ name: "Login" });
  } else {
    next();
  }
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");

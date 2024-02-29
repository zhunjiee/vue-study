import { createRouter, createWebHashHistory } from "vue-router";
import Footer from "../views/Footer.vue";
import Home from "../views/Home.vue";
import Second from "../views/Second.vue";
import CompA from "../views/ComponentA.vue";
import CompB from "../views/ComponentB.vue";

const routes = [
  {
    path: "/",
    name: "Footer",
    component: Footer,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
        components: {
          default: CompA,
          a: CompA,
          b: CompB,
        },
      },
      { path: "second/:id", name: "Second", component: Second },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;

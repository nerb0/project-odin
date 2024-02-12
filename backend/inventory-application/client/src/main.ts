import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import About from "./pages/About.vue";
import Blog from "./pages/Blog.vue";
import BlogPost from "./pages/BlogPost.vue";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import "./style.css";

const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/about", name: "About", component: About },
	{ path: "/blog", name: "Blog", component: Blog },
	{ path: "/blog/:id", name: "Blog Post", component: BlogPost },
	{ path: "/:path(.*)*", name: "Not Found", component: NotFound },
] as const;

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");

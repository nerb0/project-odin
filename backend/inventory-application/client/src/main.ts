import "@milkdown/theme-nord/style.css";
import { createApp } from "vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import About from "./pages/About.vue";
import AdminIndex from "./pages/AdminIndex.vue";
import Blog from "./pages/BlogList.vue";
import BlogPost from "./pages/BlogPost.vue";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import "./style.css";

const routes: RouteRecordRaw[] = [
	{ path: "/home", name: "home", component: Home, alias: "/" },
	{ path: "/about", name: "about", component: About },
	{
		path: "/blog",
		children: [
			{
				path: "",
				name: "blog_list",
				component: Blog,
			},
			{
				name: "blog_post",
				path: ":id",
				component: BlogPost,
			},
		],
	},
	{ path: "/admin", name: "admin", component: AdminIndex },
	{ path: "/:path(.*)*", name: "Not Found", component: NotFound },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");

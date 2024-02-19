import "@milkdown/theme-nord/style.css";
import { createApp } from "vue";
import { createVfm } from "vue-final-modal";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import About from "./pages/About.vue";
import AdminIndex from "./pages/AdminIndex.vue";
import Blog from "./pages/BlogList.vue";
import BlogPost from "./pages/BlogPost.vue";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import "./style.css";
import BlogEdit from "./pages/BlogEdit.vue";

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
	{
		path: "/admin",
		children: [
			{
				path: "",
				name: "admin",
				component: AdminIndex,
			},
			{
				path: "post/:id",
				name: "post_edit",
				component: BlogEdit,
			},
		],
	},
	{ path: "/:path(.*)*", name: "Not Found", component: NotFound },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

const app = createApp(App);
app.use(router);
app.use(createVfm());
app.use(Toast, {
	transition: "Vue-Toastification__fade",
	maxToasts: 20,
	newestOnTop: true,
});
app.mount("#app");

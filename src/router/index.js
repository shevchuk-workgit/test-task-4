import { createRouter, createWebHashHistory } from "vue-router";
import UsersList from "@/components/pages/UsersList";
import UserPage from "@/components/pages/UserPage";
import UserPostList from "@/components/pages/UserPostList";
import UserPost from "@/components/pages/UserPost";

const routes = [
  {
    path: "/",
    name: "userList",
    component: UsersList,
  },
  {
    path: "/user-:userId",
    name: "user",
    component: UserPage,
  },
  {
    path: "/user-:userId/post-list",
    name: "postList",
    component: UserPostList,
  },
  {
    path: "/user-:userId/post-list/:postId",
    name: "userPost",
    component: UserPost,
  },
  {
    path: "/:pathMatch(.*)",
    redirect: {
      path: "/",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

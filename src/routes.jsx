import { DashboardPage } from "./pages/dashboard/DashboardPage"
import { PostPage } from "./pages/post/PostPage";

const routes = [
    {path: '/*', element: <DashboardPage />},
    {path: '/post', element: <PostPage />},
];

export default routes;
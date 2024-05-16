import { DashboardPage } from "./pages/dashboard/DashboardPage"
import { PostPage } from "./pages/post/PostPage";
import { InfoPostPage } from "./pages/infoPost/InfoPage";

const routes = [
    {path: '/*', element: <DashboardPage />},
    {path: '/post', element: <PostPage />},
    {path: '/postContent/:id', element: <InfoPostPage />}
];

export default routes;
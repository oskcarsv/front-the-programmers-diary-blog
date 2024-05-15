import { useRoutes } from "react-router-dom/dist"
import { DashboardPage } from "./pages/dashboard/DashboardPage"
import { PostPage } from "./pages/post/PostPage";

// eslint-disable-next-line react-hooks/rules-of-hooks
const routes = useRoutes([
    {path: '/*', element: <DashboardPage/>},
    {path: 'post', element: <PostPage/>},
]);

export default routes
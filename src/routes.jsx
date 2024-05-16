import { HomePage } from "./pages/homePage";
import { Posts } from "./pages/posts";
import { AddPostPage } from "./pages/addPost/addPost";
import { InfoPostPage } from "./pages/infoPost/InfoPostPage";

const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/posts', element: <Posts /> },
    { path: '/addPost', element: <AddPostPage /> },
    { path: '/publicationContent/:id', element: <InfoPostPage /> }
];

export default routes;
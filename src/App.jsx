import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import { DashboardPage } from "./pages/dashboard/DashboardPage"
import { PostPage } from "./pages/post/PostPage";



function AppRoutes() {
  const routes = useRoutes(
    [
      { path: '/', element: <DashboardPage /> },
      { path: '/post', element: <PostPage /> },
    ]
  )
  return routes;
}
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import { DashboardPage } from "./pages/dashboard/DashboardPage"



function AppRoutes() {
  const routes = useRoutes(
    [
      { path: '/', element: <DashboardPage /> },
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
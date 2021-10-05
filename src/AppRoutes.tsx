import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SelectPage from './pages/SelectPage/SelectPage';
import NotFound from './pages/NotFound/NotFound';

const AppRoutes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/select-example" component={SelectPage} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRoutes;

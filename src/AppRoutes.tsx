import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SelectPage from './pages/SelectPage/SelectPage';

const AppRoutes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/select-example" component={SelectPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  </Router>
);

export default AppRoutes;

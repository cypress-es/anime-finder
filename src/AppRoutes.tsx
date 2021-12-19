import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SelectPage from './pages/SelectPage/SelectPage';
import NotFound from './pages/NotFound/NotFound';
import AnimeDetail from './pages/AnimeDetail/AnimeDetail';
import Oauth from './pages/Oauth/Oauth';

const AppRoutes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/select-example" component={SelectPage} />
        <Route exact path="/oauth" component={Oauth} />
        <Route exact path="/animes/:id" component={AnimeDetail} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRoutes;

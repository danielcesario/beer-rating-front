import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateBeer from './pages/createbeer';
import DetailBeer from './pages/detailbeer';
import ListBeer from './pages/listbeer';
import { Navbar } from './pages/stiles';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </Navbar>

        <Switch>
          <Route path="/create">
            <CreateBeer />
          </Route>
          <Route path="/detail">
            <DetailBeer />
          </Route>
          <Route path="/">
            <ListBeer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

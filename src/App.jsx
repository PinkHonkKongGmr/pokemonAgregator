import React from 'react';
import StartPage from './components/startPage';
import Pokemon from './components/pokemon';
import Ability from './components/ability';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" component={StartPage} exact />
            <Route path="/pokemon/:id" render={(props) => <Pokemon id={props.match.params.id} />} />
            <Route path="/abilities/:id" render={() => <Ability />} />
        </Switch>
    </Router>
);

export default App;

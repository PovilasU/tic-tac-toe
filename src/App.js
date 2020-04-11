import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Game from './components/Game';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Game} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
serviceWorker.register();
export default App;

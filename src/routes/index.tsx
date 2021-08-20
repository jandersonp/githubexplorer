import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Repository } from '../pages/Repository';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}

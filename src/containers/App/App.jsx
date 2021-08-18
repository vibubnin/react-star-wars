import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routesConfig } from '@routes/routesConfig';
import { Header } from '@components/Header';
import classes from "./App.module.css";

export const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <Header />
        <Switch>
          {routesConfig.map(route =>
            <Route key={route.path} {...route} />
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

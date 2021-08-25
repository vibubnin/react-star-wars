import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routesConfig } from '@routes/routesConfig';
import { Header } from '@components/Header';
import classes from "./App.module.css";
import { REPO_NAME } from '@constants/repo';

export const App = () => {
  return (
    <BrowserRouter basename={`/${REPO_NAME}/`}>
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

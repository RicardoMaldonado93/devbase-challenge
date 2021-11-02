import { Home } from "pages/Home";
import { Profile } from "pages/Profile";
import { Route, Redirect } from "react-router-dom";

export const Router = () => {
  return (
    <Route>
      <Route path="/home" render={() => <Home />} key={"home"} />
      <Route
        path="/profile/:username"
        render={() => <Profile />}
        key={"profile"}
      />
      <Redirect path="/" to="/home" key={"redirect"} />
    </Route>
  );
};

export interface IParamsProps {
    username:string
}
import { Home } from "pages/Home";
import { Profile } from "pages/Profile";
import { Route, Redirect } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

export const Router = () => {
  return (
    <Route>
      <AnimatedSwitch
        atEnter={{ offset: 100 }}
        atLeave={{ offset: -100 }}
        atActive={{ offset: 0 }}
        mapStyles={(styles) => ({
          transform: `translateX(${styles.offset}%)`,
          height: "100%",
          width: "100%",
          position: "absolute",
        })}
      >
        <Route path="/home" render={() => <Home />} key={"home"} />
        <Route
          path="/profile/:username"
          render={() => <Profile />}
          key={"profile"}
        />
        <Redirect path="/" to="/home" key={"redirect"} />
      </AnimatedSwitch>
    </Route>
  );
};

export interface IParamsProps {
  username: string;
}

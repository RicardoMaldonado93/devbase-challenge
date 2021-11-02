import { Navbar } from "components/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import "styles/pages/Home.scss";

export const Home = () => {
  const [users, setUsers] = useState<string[]>([]);

  const redirectToViewProfile = (userName: string) => {};

  useEffect(() => {
    setUsers(usernames);
  }, []);

  return (
    <div>
      <Navbar title="Home" />
      <div className="col-12 p-4 ">
        <div className="row w-100 text-start  p-0">
          <h1 className="bold home__title">Top 5 GitHub Users</h1>
        </div>
        <div className="row w-100 text-start">
          <p className="">Tap the username to see more information</p>
        </div>
        <div className="d-flex justify-content-lg-start justify-content-start flex-wrap">
          {users.map((key, index) => (
            <div className="col-xl-auto col-auto p-1" key={index}>
              <button
                key={`${key}-${index}`}
                type="button"
                className="btn btn-primary w-auto m-auto"
                onClick={() => redirectToViewProfile(key)}
              >
                {key}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const usernames = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];

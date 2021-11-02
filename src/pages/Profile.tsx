import { Card } from "components/Card";
import { Navbar } from "components/Navbar";
import { IParamsProps } from "components/Router";
import { UseToogle } from "hooks/UseToogle";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = "https://api.github.com/users";

export const Profile = () => {
  const params = useParams<IParamsProps>();
  const [userData, setUserData] = useState<IUserDataProps>();
  const { onToogle, toogle } = UseToogle();

  const loadData = async () => {
    const recoverUserParam = params.username;
    const data = ""

    data && setUserData(data);
    !data && onToogle();
  };

  useEffect(() => {
    loadData()
  }, [])
  
  return (
    <div className="col-12">
      <Navbar title="Person" />
      <div className="col-12">
        {
          userData && ( <Card avatar_url={userData.avatar_url} name={userData.name} location={userData.location} /> )
        }
        {
          toogle && ( <h4>Not found...</h4>  )
        }
      </div>
    </div>
  );
};

interface IUserDataProps {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name?: any;
  company?: any;
  blog: string;
  location?: any;
  email?: any;
  hireable?: any;
  bio?: any;
  twitter_username?: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

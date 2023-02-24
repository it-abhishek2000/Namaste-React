import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import example from "../utils/example.json";
import Card from "./card";

import UserStats from "./UserStats";

const TeamInfo = () => {
  const [user, setuser] = useState("");
  const { id } = useParams();
  async function fetchUser() {
    const data = await fetch(`https://api.github.com/users/${id}`);
    const json = await data.json();
    setuser(json);
    return json;
  }
  useEffect(() => {
    fetchUser();
  }, []);

  //console.log(user);
  return (<>
    <div className="flex flex-row justify-center items-center">
      <Card res={user} />
      <UserStats res={user} />
    </div></>
  );
};
export default TeamInfo;

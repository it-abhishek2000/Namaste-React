import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import example from "./example.json";
import Card from "./card";
const TeamInfo = () => {
    const [user,setuser] = useState("");
    const {id} = useParams();
    async function fetchUser(){
        const data = await fetch(`https://api.github.com/users/${id}`)
        const json = await data.json();
        setuser(json);
        return json;
    }
    useEffect(()=>{
      fetchUser();
    },[]);

    //console.log(user);
    return <Card res={user} />;
}
export default TeamInfo;
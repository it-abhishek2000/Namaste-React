import React from "react";
const Card = ({ member }) => {
  return (
    <div className="memberCard">
      <img src={member.profilePic} className="profilepic"></img>
      <h4>Name:{member.name}</h4>
      <h5>Degination: {member.designation}</h5>
      <h5>Experience: {member.experience}</h5>
      <h5>Location: {member.location}</h5>
      <div className="linktosite">
        <a className="instagram" href={member.instagram}>
          <img
            src="https://img.icons8.com/metro/26/null/instagram-new.png"
            className="icon"
          />
        </a>
        <a className="linkdin" href={member.linkedin}>
          <img
            src="https://img.icons8.com/metro/26/null/linkedin.png"
            className="icon"
          />
        </a>
        <a className="github" href={member.github}>
          <img
            src="https://img.icons8.com/material/24/null/github.png"
            className="icon"
          />
        </a>
        <a className="discord" href={member.discord}>
          <img
            src="https://img.icons8.com/material/24/null/discord-new-logo.png"
            className="icon"
          />
        </a>
      </div>
    </div>
  );
};
export default Card;

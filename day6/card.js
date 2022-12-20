import { Link } from "react-router-dom";
const Card = ({res}) =>{ 
     return (<Link to={"/teaminfo/"+res?.login}>
     <div className="singleCard">
        <img src={res?.avatar_url} className="cardProfilepic"></img>
        <h3 className="cardName">Name:{res?.login}</h3>
        <h3 className="cardLocation">Location:{res?.location}</h3>
     </div></Link>);
}
export default Card;
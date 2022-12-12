const Card = ({res}) =>{
     return (<div className="singleCard">
        <img src={res?.avatar_url} className="cardProfilepic"></img>
        <h3 className="cardName">Name:{res?.login}</h3>
        <h3 className="cardLocation">Location:{res?.location}</h3>
     </div>);
}
export default Card;
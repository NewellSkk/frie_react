import React from "react";
const Card = (props) =>{
    const{name,email,username}=props;
    return(
        <div className='tc hover-gold bg-moon-gray dib br3 pa3 ma2 grow '>
            <img alt='robots'src={`https://robohash.org/${username}.png?set=set5`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;

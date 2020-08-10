import React from 'react'

const Card=(props)=>
{
    const {name,id,email}=props
    return(
        <div className="bg-light-green dib br3 ma3 pa3 grow shadow-2 tc">
            <img alt="robots" src={`https://robohash.org/${id}?size=250x250`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card
import React from 'react'
import Card from './Card'

const CardList=(props)=>
{
    const {robots}=props
    const CardArray=robots.map((user)=>
    {
         return <Card key={user.id} name={user.name} id={user.id} email={user.email}/>
    })
    return(
        <div>
            {CardArray}
        </div>
    );
}

export default CardList
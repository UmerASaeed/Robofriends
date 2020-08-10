import React from 'react'


const Scroll=(props)=>
{
    console.log(props.children)
    return(
        <div style={{overflow: 'scroll',border:'2px solid #0cacc4',height:'1500px'}}>
            {props.children}
        </div>
    );
}

export default Scroll
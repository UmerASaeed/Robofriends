import React from 'react'

const SearchBox=(props)=>
{
   const {searchChange}=props
    return(
        <div>
            <input className="bg-lightest-blue b--green pa2" type="search" placeholder="Search robots" onChange={searchChange}></input>
        </div>
    );
}

export default SearchBox
import React from 'react'


class ErrorBoundary extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {
           hasError:false 
        }
    }

    componentDidCatch()
    {
        this.setState({hasError:true})
    }
    render()
    {
        return this.state.hasError===true?<h1>oops something went wrong try again after sometime</h1>:this.props.children
    }
}


export default ErrorBoundary
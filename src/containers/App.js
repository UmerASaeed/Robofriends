import React,{Component} from 'react'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import  Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

class App extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            robotlist:[],
            SearchResult:''
        }
    }

    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())
        .then((user)=>
        {
            this.setState({robotlist:user})
        })
    }
    
    SearchChange=(event)=>
    {
        this.setState({SearchResult:event.target.value})      
    }

    render()
    {
        const filteredArr=this.state.robotlist.filter((item)=>
        {
            return item.name.toLowerCase().includes(this.state.SearchResult.toLowerCase())
        })

        return(
            <div className="tc">
                <h1 className='f1'>robof r i e n d s</h1>
                <SearchBox searchChange={this.SearchChange}/>
                <br/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredArr}/>
                    </ErrorBoundary>
                </Scroll>    
            </div>
        );
    }
}

export default App
import React from 'react'
// import {BrowserRouter, Route , Link} from 'react-router-dom'
// import Gender from './gender'
import axios from 'axios'



class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '' ,
            gender: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const name = this.state.name
        axios.get(`http://localhost:3034/gender?name=${name}`)
            .then((response) => {
                console.log(response.data)
                const gender = response.data.gender
                this.setState({gender})
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    render(){
        return (
            <div>
                <h1>Gender determination</h1>
                <form onSubmit = {this.handleSubmit}>
                    <label>enter a name</label>
                    <input type = 'text' name='name' placeholder='enter a name' value={this.state.name}  onChange={this.handleChange} />
                    <input type='submit' />
                </form>
                {this.state.gender ? <p>{this.state.name} is {this.state.gender}</p>: ''}
            </div>
        )
    }
}

export default App
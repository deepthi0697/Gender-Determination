import React from 'react'
import Axios from 'axios'

class Gender extends React.Component{
    constructor(){
        super()
        this.state = {
            gender: ''
        }
    }

    componentDidMount = (name) => {
        Axios.get(`https://api.genderize.io?name=${name}`)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render(){
        return (
            <div>
                <h3>gender</h3>
            </div>
        )
    }
}

export default Gender
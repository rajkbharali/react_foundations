import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            userInfo :{
                name : "Dummy",
                avatar_url : ""
            }
        }
        // console.log(this.props.name + " Constructor")
    }
    
    async componentDidMount(){
        // console.log(this.props.name + ' Component Did Mount')
        const data = await fetch("https://api.github.com/users/rajkbharali")
        const json = await data.json()

        this.setState({
            userInfo : json
        })
    }

    render(){
        // console.log(this.props.name + " Component Rendered")

        return (
            <div>
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name:  {this.state.userInfo.name}</h2>
            </div>
        )
    }
}

export default UserClass
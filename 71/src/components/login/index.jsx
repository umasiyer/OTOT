import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Login extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            username:   '',
            password: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const { name } = event.target; 
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.state.username === ''){
            alert('Enter the username');
        } else if (this.state.password === ''){
            alert('Enter the password');
        } else {
        alert('username' + this.state.username + '    password:' + this.state.password);
}   
    }
    render(){
        return(
            <div>
<MuiThemeProvider>
        <form onSubmit={this.handleSubmit}>
            <TextField hintText="Enter your username"
                       floatingLabelText="Username"
                       type="text" value={this.state.username}
                       onChange={this.handleInputChange}
                       errorText="*"
                       name="username"
                       /><br />
            <TextField hintText="Enter your password"
                       floatingLabelText="Password"
                       type="password" value={this.state.password} 
                       onChange={this.handleInputChange} 
                       errorText="*"
                       name="password"
                       /><br />
             <div>
                 <RaisedButton type="submit" value="Submit" label="Submit" primary={true} />
             </div>
        </form>
        </MuiThemeProvider>
        </div>
            )
    }
}
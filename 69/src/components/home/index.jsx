import React, { Component } from 'react'
import { connect } from 'react-redux'


class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const items = [{name:'uma',age:28},{name:'arun',age:32}];
        const mappedItems = items.map ( (val,index) => {
            return <tr key={index}><td>{val.name}</td><td>{val.age}</td></tr>
        })
        return(
            <div>
                <table>
                    <thead>
                        <tr>Name</tr>
                        <tr>Age</tr>
                    </thead>
                    <tbody>
                        {mappedItems}
                    </tbody>
                </table>
            </div>
            )
    }
}
export default Home;                                                                                                                                   
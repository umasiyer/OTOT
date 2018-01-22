import React from 'react'

export default class LifeCycleMethodsExample extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
    }

    componentWillMount(){
        console.log('componentWillMount: This methods is called initially and only once');
    }

    increment() {
        this.setState({
            count : this.state.count + 1
        })
    }
    render() {
        console.log('render: This method is called everytime a state or prop is changed');
        return(
            <div>
    <p>{this.props.text}</p>
    <button onClick={this.increment}>{this.state.count}</button>
    </div>)
    }

    componentDidMount() {
        console.log('componentDidMount: This methods is called once the component gets rendered completely (initially) and only once');
    }
}
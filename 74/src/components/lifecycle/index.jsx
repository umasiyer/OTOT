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

    componentWillReceiveProps(nextProps)
    {
        console.log('componentWillReceiveProps: can decide to update state here . You can compare this.props and nextProps')
        if(this.props.text === nextProps.text) {
            this.setState({
                count: 0
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log('shouldComponentUpdate: return true by default')
        console.log('props:  ' + nextProps.text + 'state:   ' + JSON.stringify(nextState));
        if(this.state.count > 2){
            return false;
        } else {
            return true;
        }
    }

    componentWillUpdate(nextProps, nextState)
    {
        console.log('componentWillUpdate: invoked if component is re-rendered (not on initial render): STRICTLY DO NOT update state/props here')
        console.log('You can compare and dispatch actions if required')
        if(this.props.text === nextProps.text) {
            //do something
        }
    }

    componentDidUpdate(prevProps, prevState)
    {
        console.log('componentDidUpdate: after the re-render has occured')
    }
    componentDidMount() {
        console.log('componentDidMount: This methods is called once the component gets rendered completely (initially) and only once');
    }
}
import React from 'react'
import Moment from 'react-moment';

export default class DateTimeFormatting extends React.Component {

    constructor(props) {
        super( props )
        this.handleDateChange = this.handleDateChange.bind(this);
        this.state = {
            dateVal: new Date()
        }
    }

    handleDateChange(e) {
        const val = e.target.value;
    }
    render() {  
        
        const dateToFormat = new Date('1976-04-19T12:59-0500');
        return (
        <Moment interval={30000} date={dateToFormat} />
            )
    }
}
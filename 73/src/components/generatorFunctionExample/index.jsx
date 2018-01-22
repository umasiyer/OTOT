import React from 'react'

export default class GeneratorFuncExample extends React.Component {

    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }

    add() {
        //addNumbers.next();
    }

// THe generator function is defined with a * along with si ngle/multiple yield to play and pause the generators

    //function* addNumbers(){
    //    let x = yield 'Enter a number for x';
    //    let y = yield 'Enter a number for y';
    //    return x + y;

    //}
    render() {
        return(
            <div>
                Run Generators:
                <br />
                Example 1: Simple Asyn add
                <br/>
                <button onClick={this.add}>Add</button>
            </div>
            )
    }
}


////----------Simple Generator------ Baseless Logic!!

//function* generator(a) {
//    console.log('starting the generator in a suspended state');
//    let x = yield 'expecting x';
//    console.log(x);
//    let y = x + 10;
//    return y
//}

//var gen = generator();
//var value = $('.value');
//var a = gen.next();
//console.log(a);
//var b = gen.next(4);
//console.log(b);

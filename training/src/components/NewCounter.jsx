import React from "react"; 

class NewCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }

    increment() {
        this.setState({count: ++this.state.count});
    }

    decrement() {
        this.setState({count: --this.state.count});
    }

        render() {
            return (
                <div>
                    <h2>Counter: {this.state.count}</h2>
                    <button onClick = {this.decrement}>
                    Decrement
                    </button>
                    <button onClick = {this.increment}>
                    Increment
                    </button>
                </div>
            )
        }
}

export default NewCounter;
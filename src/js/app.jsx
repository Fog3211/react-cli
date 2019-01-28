import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.initState();
        this.initEvent();
    }
    initState() {
        this.state = {
            count: 0,
        };
    }
    initEvent() {
        this.onAdd = this.onAdd.bind(this);
        this.onReduce = this.onReduce.bind(this);
    }
    onAdd() {
        this.setState({
            count: this.state.count+1,
        });
    }
    onReduce() {
        this.setState({
            count: this.state.count-1,
        });
    }
    render() {
        return (
            <div className="app">
                <div className="count">
                    {this.state.count}
                </div>
                <div className="btn-group">
                    <button
                        onClick={() => this.onAdd()}
                    >
                        +
                    </button>
                    <button
                        onClick={() => this.onReduce()}
                    >
                        -
                    </button>
                </div>
            </div>
        );
    }
}
export default App;
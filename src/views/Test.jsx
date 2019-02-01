import React, { Component } from 'react';
import '../css/style.css';

class Test extends Component {
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
            count: this.state.count + 1,
        });
    }
    onReduce() {
        this.setState({
            count: this.state.count - 1,
        });
    }
    render() {
        return (
            <div className="main">
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
                <h3 className="goback" onClick={() => this.props.history.goBack()}>返回上一页</h3>
            </div>
        );
    }
}
export default Test;
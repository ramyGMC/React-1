import React, { Component } from 'react';


class Box extends Component {
    render() {
        return (
            <div className="Box">
                <center>
                    <h2>{this.props.name}</h2>
                </center>
                <p>{this.props.des}</p>
                <button>en savoir</button>
            </div>
        );
    }
}

export default Box;
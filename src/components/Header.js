import React from "react";
import logo from '../logo.svg';

export class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{this.props.title}</h1>
                <div>{JSON.stringify(this.props.myObj)}</div>
                <div>{this.props.myArr[0]}</div>
                <div>{this.props.myFunc(10, 12)}</div>
            </header>
        );
    }
}

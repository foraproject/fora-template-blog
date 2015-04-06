import React from "react";

export default class HelloMessage extends React.Component {

    *getPropsOnServer() {

    }

    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

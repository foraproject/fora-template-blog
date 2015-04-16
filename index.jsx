import React from "react";

export default class HelloMessage extends React.Component {

    static *getInitialData() {
        return {
            title: "Hello World",
            message: `For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved
                so much—the wheel, New York, wars and so on—whilst all the dolphins had ever done was muck about in the water having a good time.
                But conversely, the dolphins had always believed that they were far more intelligent than man—for precisely the same reasons.`
        };
    }

    handleClick() {
        alert("hello world...");
    }

    render() {
        return <div onClick={this.handleClick}>Hello {this.props.message}</div>;
    }
}

import React from "react";
import getDb from "../lib/db-connector";

export default class HelloMessage extends React.Component {

    static *getInitialData() {
        var db = yield* getDb();
        var collection = yield* db.collection("projects");
        var project = "This is THE project."; //yield* collection.findOne({});
        return { project };
    }

    render() {
        var self = this;
        return (
            <div>{this.props.project.toString()}</div>
        );
    }
}

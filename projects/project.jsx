import React from "react";
import getDb from "../lib/db-connector";
import http from "../lib/http-connector";

export default class HelloMessage extends React.Component {

    static *getInitialProps() {
        var db = yield* getDb();
        var collection = yield* db.collection("projects");
        var project = "This is THE project."; //yield* collection.findOne({});
        return { project };
    }

    static *getInitialPropsViaAjax() {
        var response = yield* http(function(req) {
            req.open('GET', '/api/projects/10', true);
            req.send();
        });
        return response;
    }

    render() {
        var self = this;
        return (
            <div>{JSON.stringify(this.props.project)}</div>
        );
    }
}

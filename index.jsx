import React from "react";
import getDb from "./lib/db-connector";

export default class HelloMessage extends React.Component {

    static *getInitialData() {
        var db = yield* getDb();
        var collection = yield* db.collection("projects");
        var cursor = yield* collection.find({});
        return { projects: yield* cursor.toArray() };
    }

    render() {
        var self = this;
        return (
            <ul>
                {
                    this.props.projects.map(project => <li><a href={`/projects/${project.id}`}>{project.id}</a></li>)
                }
            </ul>
        );
    }
}

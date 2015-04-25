import React from "react";
import getDb from "./lib/db-connector";

export default class HelloMessage extends React.Component {

    static *getInitialProps() {
        var db = yield* getDb();
        var collection = yield* db.collection("projects");
        var cursor = yield* collection.find({});
        return { projects: yield* cursor.toArray() };
    }

    clicked(p) {
        console.log(JSON.stringify(p));
    }

    render() {
        var self = this;
        return (
            <ul>
                {
                    this.props.projects.map(project => <li onClick={() => this.clicked(project)}><a href={`/projects/${project.id}?text=hello&ver=1`}>{project.id}</a></li>)
                }
            </ul>
        );
    }
}

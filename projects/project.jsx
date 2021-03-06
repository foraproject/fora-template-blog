import React from "react";
import Project from "../models/project";
import { http } from "../lib/http-connector";

export default class HelloMessage extends React.Component {

    static *getInitialProps(name) {
        var project = yield* Project.getByName(name);
        return { project };
    }

    static *getInitialPropsViaAjax(name) {
        var response = yield* http(function(req) {
            req.open('GET', `/api/projects/${name}`, true);
            req.send();
        });
        var project = JSON.parse(response);
        return { project };
    }

    render() {
        var self = this;
        return (
            <div>
                <div>
                    <h2>{this.props.project.name}</h2>
                    <p>{this.props.project.desc}</p>
                </div>

                <div>
                    <p>
                        Back to <a href="/">Projects</a>
                    </p>
                </div>
            </div>
        );
    }
}

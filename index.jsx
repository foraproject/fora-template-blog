import React from "react";
import Project from "./models/project";
import http from "./lib/http-connector";

export default class HomePage extends React.Component {

    static *getInitialProps() {
        var projects = yield* Project.getAll();
        return { projects };
    }


    static *getInitialPropsViaAjax() {
        var response = yield* http(function(req) {
            req.open('GET', '/api/projects', true);
            req.send();
        });
        var projects = JSON.parse(response);
        return { projects };
    }


    render() {
        var self = this;
        return (
            <ul>
                {
                    this.props.projects.map(project => <li><a href={`/projects/${project.name}`}>{project.name}: {project.desc}</a></li>)
                }
            </ul>
        );
    }
}

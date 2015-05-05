import React from "react";
import Project from "./models/project";
import { http } from "./lib/http-connector";
import co from "co";

export default class HomePage extends React.Component {

    static *getInitialProps() {
        var projects = yield* Project.getAll();
        return { pageTitle: "Home", projects };
    }


    static *getInitialPropsViaAjax() {
        var response = yield* http(function(req) {
            req.open('GET', '/api/projects', true);
            req.send();
        });
        var projects = JSON.parse(response);
        return { pageTitle: "Home", projects };
    }


    saveProject() {
        co(function*() {
            var response = yield* http(function(req) {
                req.open('POST', '/api/projects', true);
                req.send();
            });
        });
    }


    ajaxAlert(name) {
        co(function*() {
            var response = yield* http(function(req) {
                req.open('GET', `/api/projects/${name}`, true);
                req.send();
            });
            var project = JSON.parse(response);
            alert(JSON.stringify(project));
        });
    }

    render() {
        var self = this;
        return (
            <div>
                <form>
                    <input id="name" name="name" />
                    <textarea id="desc" name="desc">
                    </textarea>
                    <button onClick={this.saveProject}>Save</button>
                </form>
                <ul>
                    {
                        this.props.projects.map(project => <li><a href={`/projects/${project.name}`}>{project.name}: {project.desc}</a></li>)
                    }
                </ul>
                <h2>AJAX Alert</h2>
                <ul>
                    {
                        this.props.projects.map(project => <li onClick={this.ajaxAlert.bind(this, project.name)}>{project.name}: {project.desc}</li>)
                    }
                </ul>
            </div>
        );
    }
}

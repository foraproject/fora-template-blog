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
            </div>
        );
    }
}

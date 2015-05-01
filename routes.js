import pages_index from "./index";
import pages_projects_project from "./projects/project";
import api_projects from "./api/projects";

export default {
    pages: [
        { method: "get", url: "", handler: pages_index },
        { method: "get", url: "/projects/:id", handler: pages_projects_project }
    ],
    api: [
        { method: "get", url: "/api/projects", handler: api_projects.getAll },
        { method: "post", url: "/api/projects", handler: api_projects.create },
        { method: "del", url: "/api/projects", handler: api_projects.remove },
        { method: "put", url: "/api/projects", handler: api_projects.update },
        { method: "get", url: "/api/projects/:id", handler: api_projects.getByName }
    ]
};

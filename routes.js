import index from "./index";
import projects_project from "./projects/project";

export default {
    pages: [
        { method: "get", url: "", handler: index },
        { method: "get", url: "/projects/:id", handler: projects_project }
    ]
};

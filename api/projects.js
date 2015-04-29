import Project from "../models/project";

let getAll = function*() {
    var projects = yield* Project.getAll();
    this.body = projects;
};

let getByName = function*(name) {
    var project = yield* Project.getByName(name);
    this.body = project;
};

module.exports = {
    getAll, getByName
};

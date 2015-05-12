import Project from "../models/project";
import parse from "co-body";

let getAll = function*() {
    var projects = yield* Project.getAll();
    this.body = projects;
};

let getByName = function*(name) {
    var project = yield* Project.getByName(name);
    this.body = project;
};

let create = function*() {
    var params = yield parse(this);
    params.from = "SERVER!";
    this.body = params;
};

let remove = function*(name) {
    console.log(name);
};

let update = function*(item) {
    console.log(item);
};

module.exports = {
    getAll, getByName, create, remove, update
};

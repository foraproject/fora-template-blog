let getProject = function*(id) {
    this.body = {
        project: {
            id: "new_project_id",
            description: "lorem ipsum dolor sit"
        }
    };
};

module.exports = {
    getProject
};

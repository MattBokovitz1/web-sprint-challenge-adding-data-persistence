const db = require("../../data/dbConfig");

module.exports = {
  add(task) {
    return db("tasks")
      .insert(task)
      .then(([id]) => {
        return db("tasks").where("id", id).first();
      });
  },

  getTasks() {
    return db("tasks as t")
      .join("projects as p", "t.project_id", "p.id")
      .select(
        "project_name",
        "project_description",
        "task_completed",
        "task_description",
        "task_notes"
      );
  },
};

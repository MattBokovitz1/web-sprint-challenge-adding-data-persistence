exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      return knex("tasks").insert([
        {
          task_description: "Do foo",
          task_notes: "",
          task_completed: false,
          project_id: 1,
        },
      ]);
    });
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { task_completed: false, task_description: "Do foo", task_notes: "" },
      ]);
    });
};

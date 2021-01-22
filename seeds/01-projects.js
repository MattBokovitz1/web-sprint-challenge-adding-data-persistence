exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Databases",
          project_description: "Learn SQL",
          project_completed: false,
        },
        {
          project_name: "Web API",
          project_description: "Build APIs",
          project_completed: false,
        },
      ]);
    });
};

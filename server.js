var SequelizeAuto = require("sequelize-auto");
var auto = new SequelizeAuto(
  "BirthAndDeathRegistrationDB",
  "LAPTOP-FMG8AKPUFdc_dev",
  "",
  {
    host: "LAPTOP-FMG8AKPUSQLEXPRESS",
    port: "",
    dialect: "mssql",
  }
);

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});

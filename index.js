let addDays = require("date-fns/addDays");

module.exports = function days(d) {
  let date = addDays(new Date(2020, 8, 22), d);
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};

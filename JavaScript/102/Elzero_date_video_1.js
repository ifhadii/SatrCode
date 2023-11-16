let dateNow = new Date();

console.log(dateNow);
console.log(Date.now());

let seconds = Date.now() / 1000; // Number of seconds
console.log(`seconds: ${parseInt(seconds)}`);

let minutes = seconds / 60; // Number of minutes
console.log(`minutes: ${parseInt(minutes)}`);

let hours = minutes / 60; // Number of hours
console.log(`hours: ${parseInt(hours)}`);

let days = hours / 24; // Number of days
console.log(`days: ${parseInt(days)}`);

let years = days / 365; // Number of years
console.log(`years: ${parseInt(years)}`);


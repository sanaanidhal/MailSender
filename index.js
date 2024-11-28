const { readCSV } = require("./generate");
const fs = require("fs");
const { send_emails_accepted } = require("./mailer");
const mail_template = fs.readFileSync("./template.html", "utf8");
const mail_templatee = fs.readFileSync("./stage.html", "utf8");

async function Main() {
  const mail_subject = "Invitation Forum Sup'com 2024";
  const rows = await readCSV("data/_test.csv");
  send_emails_accepted(rows, mail_subject, mail_templatee, []);
}

Main();

const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  experiences = fs.readFileSync("data/experience", { encoding: "utf-8" });
  experiences = JSON.parse(String(experiences));

  skills = fs.readFileSync("data/skills", { encoding: "utf-8" });
  skills = JSON.parse(String(skills));

  languages = fs.readFileSync("data/language", { encoding: "utf-8" });
  languages = JSON.parse(String(languages));

  edus = [];
  experience = [];
  skill = [];
  language = [];
  for (let key in educations) {
    edus.push(educations[key]);
  }

  for (let key in experiences) {
    experience.push(experiences[key]);
  }
  for (let key in languages) {
    language.push(languages[key]);
  }
  for (let key in skills) {
    skill.push(skills[key]);
  }

  res.render("cv", {
    name: "Abir Fuad",
    educations: edus,
    experiences: experience,
    skills: skill,
    language: language,
  });
};

module.exports = { getCV: getCV };

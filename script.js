/* =========================================================
   RESUME BUILDER — SCRIPT
   ========================================================= */

const $ = (id) => document.getElementById(id);

let resume = {
  personal: {
    name: "",
    title: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    district: "",
    city: "",
    address: "",
    linkedin: "",
    github: ""
  },

  summary: "",

  experience: [],
  education: [],
  projects: [],
  certifications: [],
  languages: [],

  skills: [],

  photo: "",

  settings: {
    theme: "light",
    template: "classic",
    accent: "#3157d5"
  }
};


/* =========================================================
   STORAGE
   ========================================================= */

const STORAGE_KEY = "professionalResumeBuilder";

function saveResume() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resume));
}

function loadResume() {

  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) return;

  try {

    const data = JSON.parse(saved);

    resume = {
      ...resume,
      ...data,

      personal: {
        ...resume.personal,
        ...(data.personal || {})
      },

      settings: {
        ...resume.settings,
        ...(data.settings || {})
      }
    };

  } catch (error) {

    console.warn("Could not load saved resume.");

  }
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  loadResume();

  fillInputs();

  renderAll();

  setupEvents();

  applyTheme();

  applyTemplate();

  applyAccent();

});


/* =========================================================
   INPUT HELPERS
   ========================================================= */

function setValue(id, value) {

  const element = $(id);

  if (element) {
    element.value = value || "";
  }

}


function fillInputs() {

  const p = resume.personal;

  setValue("name", p.name);
  setValue("title", p.title);
  setValue("email", p.email);
  setValue("phone", p.phone);

  setValue("country", p.country);
  setValue("state", p.state);
  setValue("district", p.district);

  setValue("city", p.city);
  setValue("address", p.address);

  setValue("linkedin", p.linkedin);
  setValue("github", p.github);

  setValue("summary", resume.summary);

  if (resume.photo) {

    $("photoPreview").innerHTML =
      `<img src="${resume.photo}" alt="Profile photo">`;

  }
}


/* =========================================================
   EVENTS
   ========================================================= */

function setupEvents() {

  const personalFields = [
    "name",
    "title",
    "email",
    "phone",
    "country",
    "state",
    "district",
    "city",
    "address",
    "linkedin",
    "github"
  ];


  personalFields.forEach(id => {

    const element = $(id);

    if (!element) return;

    element.addEventListener("input", () => {

      resume.personal[id] = element.value;

      updatePreview();
      saveResume();

    });

    element.addEventListener("change", () => {

      resume.personal[id] = element.value;

      updatePreview();
      saveResume();

    });

  });


  $("summary").addEventListener("input", () => {

    resume.summary = $("summary").value;

    updatePreview();
    saveResume();

  });


  /* Theme */

  $("themeBtn").addEventListener("click", () => {

    resume.settings.theme =
      resume.settings.theme === "light"
        ? "dark"
        : "light";

    applyTheme();
    saveResume();

  });


  /* Template */

  $("templateSelect").addEventListener("change", () => {

    resume.settings.template =
      $("templateSelect").value;

    applyTemplate();
    saveResume();

  });


  /* Accent */

  $("accentColor").addEventListener("input", () => {

    resume.settings.accent =
      $("accentColor").value;

    applyAccent();
    saveResume();

  });


  /* Photo */

  $("photoInput").addEventListener("change", handlePhoto);


  /* Clear */

  $("clearBtn").addEventListener("click", clearResume);

}


/* =========================================================
   PHOTO
   ========================================================= */

function handlePhoto(event) {

  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function () {

    resume.photo = reader.result;

    $("photoPreview").innerHTML =
      `<img src="${resume.photo}" alt="Profile photo">`;

    saveResume();

    updatePreview();

  };

  reader.readAsDataURL(file);

}


/* =========================================================
   EXPERIENCE
   ========================================================= */

function addExperience(data = {}) {

  resume.experience.push({

    id: Date.now(),

    role: data.role || "",
    company: data.company || "",
    type: data.type || "Full-time",
    location: data.location || "",

    start: data.start || "",
    end: data.end || "",

    description: data.description || ""

  });

  renderExperience();

  updatePreview();

  saveResume();

}


function renderExperience() {

  const container = $("experienceList");

  container.innerHTML = "";

  resume.experience.forEach((item, index) => {

    const div = document.createElement("div");

    div.className = "entry";

    div.innerHTML = `

      <button
        class="entry-remove"
        onclick="removeExperience(${index})"
        title="Remove"
      >×</button>

      <div class="grid two">

        <div class="field">
          <label>Job Title</label>
          <input
            value="${escapeAttr(item.role)}"
            oninput="updateExperience(${index}, 'role', this.value)"
            placeholder="e.g. Software Developer"
          >
        </div>

        <div class="field">
          <label>Company</label>
          <input
            value="${escapeAttr(item.company)}"
            oninput="updateExperience(${index}, 'company', this.value)"
            placeholder="Company name"
          >
        </div>

        <div class="field">
          <label>Employment Type</label>

          <select
            onchange="updateExperience(${index}, 'type', this.value)"
          >

            ${option("Full-time", item.type)}
            ${option("Part-time", item.type)}
            ${option("Internship", item.type)}
            ${option("Freelance", item.type)}
            ${option("Contract", item.type)}

          </select>
        </div>

        <div class="field">
          <label>Location</label>
          <input
            value="${escapeAttr(item.location)}"
            oninput="updateExperience(${index}, 'location', this.value)"
            placeholder="City, Country"
          >
        </div>

        <div class="field">
          <label>Start Date</label>
          <input
            type="month"
            value="${item.start}"
            onchange="updateExperience(${index}, 'start', this.value)"
          >
        </div>

        <div class="field">
          <label>End Date</label>
          <input
            type="month"
            value="${item.end}"
            onchange="updateExperience(${index}, 'end', this.value)"
          >
        </div>

      </div>

      <div class="field">

        <label>Description</label>

        <textarea
          rows="4"
          oninput="updateExperience(${index}, 'description', this.value)"
          placeholder="Describe your responsibilities and achievements."
        >${escapeHTML(item.description)}</textarea>

      </div>

    `;

    container.appendChild(div);

  });

}


function updateExperience(index, key, value) {

  resume.experience[index][key] = value;

  updatePreview();

  saveResume();

}


function removeExperience(index) {

  resume.experience.splice(index, 1);

  renderExperience();

  updatePreview();

  saveResume();

}


/* =========================================================
   EDUCATION
   ========================================================= */

function addEducation(data = {}) {

  resume.education.push({

    id: Date.now(),

    degree: data.degree || "",
    institution: data.institution || "",
    location: data.location || "",

    start: data.start || "",
    end: data.end || "",

    grade: data.grade || "",
    description: data.description || ""

  });

  renderEducation();

  updatePreview();

  saveResume();

}


function renderEducation() {

  const container = $("educationList");

  container.innerHTML = "";

  resume.education.forEach((item, index) => {

    const div = document.createElement("div");

    div.className = "entry";

    div.innerHTML = `

      <button
        class="entry-remove"
        onclick="removeEducation(${index})"
      >×</button>

      <div class="grid two">

        <div class="field">

          <label>Qualification</label>

          <select
            onchange="updateEducation(${index}, 'degree', this.value)"
          >

            ${option("Bachelor's Degree", item.degree)}
            ${option("Master's Degree", item.degree)}
            ${option("Diploma", item.degree)}
            ${option("Doctorate", item.degree)}
            ${option("Higher Secondary", item.degree)}
            ${option("Other", item.degree)}

          </select>

        </div>

        <div class="field">

          <label>Institution</label>

          <input
            value="${escapeAttr(item.institution)}"
            oninput="updateEducation(${index}, 'institution', this.value)"
            placeholder="University / College / School"
          >

        </div>

        <div class="field">

          <label>Location</label>

          <input
            value="${escapeAttr(item.location)}"
            oninput="updateEducation(${index}, 'location', this.value)"
            placeholder="City, Country"
          >

        </div>

        <div class="field">

          <label>Grade / CGPA</label>

          <input
            value="${escapeAttr(item.grade)}"
            oninput="updateEducation(${index}, 'grade', this.value)"
            placeholder="e.g. 8.7 CGPA"
          >

        </div>

        <div class="field">

          <label>Start Date</label>

          <input
            type="month"
            value="${item.start}"
            onchange="updateEducation(${index}, 'start', this.value)"
          >

        </div>

        <div class="field">

          <label>End Date</label>

          <input
            type="month"
            value="${item.end}"
            onchange="updateEducation(${index}, 'end', this.value)"
          >

        </div>

      </div>

      <div class="field">

        <label>Description</label>

        <textarea
          rows="3"
          oninput="updateEducation(${index}, 'description', this.value)"
          placeholder="Relevant coursework, achievements or academic details."
        >${escapeHTML(item.description)}</textarea>

      </div>

    `;

    container.appendChild(div);

  });

}


function updateEducation(index, key, value) {

  resume.education[index][key] = value;

  updatePreview();

  saveResume();

}


function removeEducation(index) {

  resume.education.splice(index, 1);

  renderEducation();

  updatePreview();

  saveResume();

}


/* =========================================================
   PROJECTS
   ========================================================= */

function addProject(data = {}) {

  resume.projects.push({

    id: Date.now(),

    name: data.name || "",
    technologies: data.technologies || "",
    link: data.link || "",
    github: data.github || "",
    description: data.description || ""

  });

  renderProjects();

  updatePreview();

  saveResume();

}


function renderProjects() {

  const container = $("projectList");

  container.innerHTML = "";

  resume.projects.forEach((item, index) => {

    const div = document.createElement("div");

    div.className = "entry";

    div.innerHTML = `

      <button
        class="entry-remove"
        onclick="removeProject(${index})"
      >×</button>

      <div class="grid two">

        <div class="field">

          <label>Project Name</label>

          <input
            value="${escapeAttr(item.name)}"
            oninput="updateProject(${index}, 'name', this.value)"
            placeholder="e.g. Smart Attendance System"
          >

        </div>

        <div class="field">

          <label>Technologies / Tools</label>

          <input
            value="${escapeAttr(item.technologies)}"
            oninput="updateProject(${index}, 'technologies', this.value)"
            placeholder="HTML, CSS, JavaScript"
          >

        </div>

        <div class="field">

          <label>Project Link</label>

          <input
            value="${escapeAttr(item.link)}"
            oninput="updateProject(${index}, 'link', this.value)"
            placeholder="https://..."
          >

        </div>

        <div class="field">

          <label>GitHub</label>

          <input
            value="${escapeAttr(item.github)}"
            oninput="updateProject(${index}, 'github', this.value)"
            placeholder="https://github.com/..."
          >

        </div>

      </div>

      <div class="field">

        <label>Description</label>

        <textarea
          rows="3"
          oninput="updateProject(${index}, 'description', this.value)"
          placeholder="Explain what you built and what problem it solves."
        >${escapeHTML(item.description)}</textarea>

      </div>

    `;

    container.appendChild(div);

  });

}


function updateProject(index, key, value) {

  resume.projects[index][key] = value;

  updatePreview();

  saveResume();

}


function removeProject(index) {

  resume.projects.splice(index, 1);

  renderProjects();

  updatePreview();

  saveResume();

}


/* =========================================================
   CERTIFICATIONS
   ========================================================= */

function addCertification(data = {}) {

  resume.certifications.push({

    id: Date.now(),

    name: data.name || "",
    issuer: data.issuer || "",
    date: data.date || "",
    credential: data.credential || ""

  });

  renderCertifications();

  updatePreview();

  saveResume();

}


function renderCertifications() {

  const container = $("certificationList");

  container.innerHTML = "";

  resume.certifications.forEach((item, index) => {

    const div = document.createElement("div");

    div.className = "entry";

    div.innerHTML = `

      <button
        class="entry-remove"
        onclick="removeCertification(${index})"
      >×</button>

      <div class="grid two">

        <div class="field">

          <label>Certification</label>

          <input
            value="${escapeAttr(item.name)}"
            oninput="updateCertification(${index}, 'name', this.value)"
            placeholder="Certification name"
          >

        </div>

        <div class="field">

          <label>Issuing Organization</label>

          <input
            value="${escapeAttr(item.issuer)}"
            oninput="updateCertification(${index}, 'issuer', this.value)"
            placeholder="Organization"
          >

        </div>

        <div class="field">

          <label>Date</label>

          <input
            type="month"
            value="${item.date}"
            onchange="updateCertification(${index}, 'date', this.value)"
          >

        </div>

        <div class="field">

          <label>Credential ID / Link</label>

          <input
            value="${escapeAttr(item.credential)}"
            oninput="updateCertification(${index}, 'credential', this.value)"
            placeholder="Optional"
          >

        </div>

      </div>

    `;

    container.appendChild(div);

  });

}


function updateCertification(index, key, value) {

  resume.certifications[index][key] = value;

  updatePreview();

  saveResume();

}


function removeCertification(index) {

  resume.certifications.splice(index, 1);

  renderCertifications();

  updatePreview();

  saveResume();

}


/* =========================================================
   LANGUAGES
   ========================================================= */

function addLanguage(data = {}) {

  resume.languages.push({

    id: Date.now(),

    language: data.language || "",
    proficiency: data.proficiency || "Professional"

  });

  renderLanguages();

  updatePreview();

  saveResume();

}


function renderLanguages() {

  const container = $("languageList");

  container.innerHTML = "";

  resume.languages.forEach((item, index) => {

    const div = document.createElement("div");

    div.className = "entry";

    div.innerHTML = `

      <button
        class="entry-remove"
        onclick="removeLanguage(${index})"
      >×</button>

      <div class="grid two">

        <div class="field">

          <label>Language</label>

          <input
            value="${escapeAttr(item.language)}"
            oninput="updateLanguage(${index}, 'language', this.value)"
            placeholder="e.g. English"
          >

        </div>

        <div class="field">

          <label>Proficiency</label>

          <select
            onchange="updateLanguage(${index}, 'proficiency', this.value)"
          >

            ${option("Native", item.proficiency)}
            ${option("Fluent", item.proficiency)}
            ${option("Professional", item.proficiency)}
            ${option("Intermediate", item.proficiency)}
            ${option("Basic", item.proficiency)}

          </select>

        </div>

      </div>

    `;

    container.appendChild(div);

  });

}


function updateLanguage(index, key, value) {

  resume.languages[index][key] = value;

  updatePreview();

  saveResume();

}


function removeLanguage(index) {

  resume.languages.splice(index, 1);

  renderLanguages();

  updatePreview();

  saveResume();

}


/* =========================================================
   SKILLS
   ========================================================= */

function addSkill() {

  const input = $("skillInput");

  const value = input.value.trim();

  if (!value) return;

  if (
    resume.skills.some(
      skill => skill.toLowerCase() === value.toLowerCase()
    )
  ) {

    input.value = "";

    return;

  }

  resume.skills.push(value);

  input.value = "";

  renderSkills();

  updatePreview();

  saveResume();

}


function renderSkills() {

  const container = $("skillList");

  container.innerHTML = "";

  resume.skills.forEach((skill, index) => {

    const tag = document.createElement("div");

    tag.className = "skill-tag";

    tag.innerHTML = `

      <span>${escapeHTML(skill)}</span>

      <button
        onclick="removeSkill(${index})"
        title="Remove skill"
      >×</button>

    `;

    container.appendChild(tag);

  });

}


function removeSkill(index) {

  resume.skills.splice(index, 1);

  renderSkills();

  updatePreview();

  saveResume();

}


/* =========================================================
   RENDER ALL
   ========================================================= */

function renderAll() {

  renderExperience();

  renderEducation();

  renderProjects();

  renderCertifications();

  renderLanguages();

  renderSkills();

}


/* =========================================================
   PREVIEW
   ========================================================= */

function updatePreview() {

  const p = resume.personal;


  /* Name */

  $("previewName").textContent =
    p.name || "Your Name";


  /* Title */

  $("previewTitle").textContent =
    p.title || "Professional Title";


  /* Contact */

  const contact = [];

  if (p.email) contact.push(p.email);

  if (p.phone) contact.push(p.phone);

  const location = [
    p.city,
    p.district,
    p.state,
    p.country
  ].filter(Boolean).join(", ");

  if (location) contact.push(location);

  if (p.address) contact.push(p.address);

  $("previewContact").textContent =
    contact.length
      ? contact.join("  •  ")
      : "email@example.com";


  /* Links */

  const links = [];

  if (p.linkedin) {

    links.push(
      `<a href="${safeURL(p.linkedin)}" target="_blank">
        LinkedIn
      </a>`
    );

  }

  if (p.github) {

    links.push(
      `<a href="${safeURL(p.github)}" target="_blank">
        GitHub
      </a>`
    );

  }

  $("previewLinks").innerHTML =
    links.join("  •  ");


  /* Summary */

  $("previewSummary").textContent =
    resume.summary ||
    "Your professional summary will appear here.";


  toggleSection(
    "summarySection",
    Boolean(resume.summary.trim())
  );


  renderExperiencePreview();

  renderEducationPreview();

  renderProjectPreview();

  renderSkillPreview();

  renderCertificationPreview();

  renderLanguagePreview();


  /* Photo */

  if (resume.photo) {

    $("previewPhoto").src = resume.photo;

    $("previewPhoto").style.display = "block";

  } else {

    $("previewPhoto").style.display = "none";

  }

}


/* =========================================================
   EXPERIENCE PREVIEW
   ========================================================= */

function renderExperiencePreview() {

  const container = $("previewExperience");

  container.innerHTML = "";

  const valid = resume.experience.filter(
    item => item.role || item.company
  );


  valid.forEach(item => {

    const div = document.createElement("div");

    div.className = "resume-entry";

    div.innerHTML = `

      <div class="resume-entry-top">

        <div class="resume-entry-title">
          ${escapeHTML(item.role)}
        </div>

        <div class="resume-entry-date">
          ${dateRange(item.start, item.end)}
        </div>

      </div>

      <div class="resume-entry-company">

        ${escapeHTML(item.company)}

        ${item.type ? ` • ${escapeHTML(item.type)}` : ""}

        ${item.location ? ` • ${escapeHTML(item.location)}` : ""}

      </div>

      ${
        item.description
          ? `<div class="resume-entry-description">
              ${formatDescription(item.description)}
             </div>`
          : ""
      }

    `;

    container.appendChild(div);

  });


  toggleSection(
    "experienceSection",
    valid.length > 0
  );

}


/* =========================================================
   EDUCATION PREVIEW
   ========================================================= */

function renderEducationPreview() {

  const container = $("previewEducation");

  container.innerHTML = "";

  const valid = resume.education.filter(
    item => item.degree || item.institution
  );


  valid.forEach(item => {

    const div = document.createElement("div");

    div.className = "resume-entry";

    div.innerHTML = `

      <div class="resume-entry-top">

        <div class="resume-entry-title">
          ${escapeHTML(item.degree)}
        </div>

        <div class="resume-entry-date">
          ${dateRange(item.start, item.end)}
        </div>

      </div>

      <div class="resume-entry-company">

        ${escapeHTML(item.institution)}

        ${item.location
          ? ` • ${escapeHTML(item.location)}`
          : ""
        }

      </div>

      ${
        item.grade
          ? `<div class="resume-entry-description">
              <strong>Grade:</strong> ${escapeHTML(item.grade)}
             </div>`
          : ""
      }

      ${
        item.description
          ? `<div class="resume-entry-description">
              ${formatDescription(item.description)}
             </div>`
          : ""
      }

    `;

    container.appendChild(div);

  });


  toggleSection(
    "educationSection",
    valid.length > 0
  );

}


/* =========================================================
   PROJECT PREVIEW
   ========================================================= */

function renderProjectPreview() {

  const container = $("previewProjects");

  container.innerHTML = "";

  const valid = resume.projects.filter(
    item => item.name || item.description
  );


  valid.forEach(item => {

    const div = document.createElement("div");

    div.className = "resume-entry";

    let links = [];

    if (item.link) {

      links.push(
        `<a href="${safeURL(item.link)}">Live</a>`
      );

    }

    if (item.github) {

      links.push(
        `<a href="${safeURL(item.github)}">GitHub</a>`
      );

    }


    div.innerHTML = `

      <div class="resume-entry-title">

        ${escapeHTML(item.name)}

      </div>

      ${
        item.technologies
          ? `<div class="resume-entry-company">
              ${escapeHTML(item.technologies)}
             </div>`
          : ""
      }

      ${
        item.description
          ? `<div class="resume-entry-description">
              ${formatDescription(item.description)}
             </div>`
          : ""
      }

      ${
        links.length
          ? `<div class="resume-entry-description">
              ${links.join(" • ")}
             </div>`
          : ""
      }

    `;

    container.appendChild(div);

  });


  toggleSection(
    "projectSection",
    valid.length > 0
  );

}


/* =========================================================
   SKILL PREVIEW
   ========================================================= */

function renderSkillPreview() {

  const container = $("previewSkills");

  container.innerHTML = "";

  resume.skills.forEach(skill => {

    const span = document.createElement("span");

    span.className = "resume-skill";

    span.textContent = skill;

    container.appendChild(span);

  });


  toggleSection(
    "skillSection",
    resume.skills.length > 0
  );

}


/* =========================================================
   CERTIFICATION PREVIEW
   ========================================================= */

function renderCertificationPreview() {

  const container = $("previewCertifications");

  container.innerHTML = "";

  const valid = resume.certifications.filter(
    item => item.name || item.issuer
  );


  valid.forEach(item => {

    const div = document.createElement("div");

    div.className = "resume-entry";

    div.innerHTML = `

      <div class="resume-entry-top">

        <div class="resume-entry-title">
          ${escapeHTML(item.name)}
        </div>

        <div class="resume-entry-date">
          ${formatMonth(item.date)}
        </div>

      </div>

      <div class="resume-entry-company">

        ${escapeHTML(item.issuer)}

      </div>

      ${
        item.credential
          ? `<div class="resume-entry-description">
              ${escapeHTML(item.credential)}
             </div>`
          : ""
      }

    `;

    container.appendChild(div);

  });


  toggleSection(
    "certificationSection",
    valid.length > 0
  );

}


/* =========================================================
   LANGUAGE PREVIEW
   ========================================================= */

function renderLanguagePreview() {

  const container = $("previewLanguages");

  container.innerHTML = "";

  const valid = resume.languages.filter(
    item => item.language
  );


  valid.forEach(item => {

    const div = document.createElement("div");

    div.className = "resume-language";

    div.innerHTML = `

      <strong>${escapeHTML(item.language)}</strong>

      ${
        item.proficiency
          ? ` — ${escapeHTML(item.proficiency)}`
          : ""
      }

    `;

    container.appendChild(div);

  });


  toggleSection(
    "languageSection",
    valid.length > 0
  );

}


/* =========================================================
   SECTION VISIBILITY
   ========================================================= */

function toggleSection(id, show) {

  const section = $(id);

  if (!section) return;

  section.classList.toggle("hidden", !show);

}


/* =========================================================
   THEME
   ========================================================= */

function applyTheme() {

  document.body.classList.toggle(
    "dark",
    resume.settings.theme === "dark"
  );


  $("themeBtn").textContent =
    resume.settings.theme === "dark"
      ? "☀"
      : "☾";

}


/* =========================================================
   TEMPLATE
   ========================================================= */

function applyTemplate() {

  const resumeElement = $("resume");

  resumeElement.classList.remove(
    "modern",
    "minimal"
  );


  if (resume.settings.template === "modern") {

    resumeElement.classList.add("modern");

  }

  if (resume.settings.template === "minimal") {

    resumeElement.classList.add("minimal");

  }


  $("templateSelect").value =
    resume.settings.template;

}


/* =========================================================
   ACCENT
   ========================================================= */

function applyAccent() {

  const color =
    resume.settings.accent || "#3157d5";


  $("accentColor").value = color;

  $("resume").style.setProperty(
    "--resume-accent",
    color
  );

}


/* =========================================================
   CLEAR
   ========================================================= */

function clearResume() {

  const confirmed =
    confirm(
      "Clear all resume information? This cannot be undone."
    );

  if (!confirmed) return;


  localStorage.removeItem(STORAGE_KEY);

  location.reload();

}


/* =========================================================
   FORMATTING
   ========================================================= */

function option(label, current) {

  return `
    <option
      value="${escapeAttr(label)}"
      ${current === label ? "selected" : ""}
    >
      ${escapeHTML(label)}
    </option>
  `;

}


function formatMonth(value) {

  if (!value) return "";

  const parts = value.split("-");

  if (parts.length !== 2) return value;

  const date = new Date(
    Number(parts[0]),
    Number(parts[1]) - 1
  );

  return date.toLocaleDateString(
    "en-US",
    {
      month: "short",
      year: "numeric"
    }
  );

}


function dateRange(start, end) {

  const first = formatMonth(start);

  const second = formatMonth(end);

  if (!first && !second) return "";

  if (first && !second) {

    return `${first} – Present`;

  }

  if (!first) return second;

  return `${first} – ${second}`;

}


/* =========================================================
   DESCRIPTION
   ========================================================= */

function formatDescription(text) {

  if (!text) return "";

  const lines = text
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);


  if (!lines.length) return "";


  if (lines.length === 1) {

    return escapeHTML(lines[0]);

  }


  return `
    <ul>
      ${lines.map(line =>
        `<li>${escapeHTML(line)}</li>`
      ).join("")}
    </ul>
  `;

}


/* =========================================================
   SECURITY HELPERS
   ========================================================= */

function escapeHTML(value) {

  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


function escapeAttr(value) {

  return escapeHTML(value);

}


function safeURL(value) {

  if (!value) return "#";

  let url = value.trim();

  if (
    !url.startsWith("http://") &&
    !url.startsWith("https://")
  ) {

    url = "https://" + url;

  }

  return escapeAttr(url);

}


/* =========================================================
   KEYBOARD SHORTCUT
   ========================================================= */

document.addEventListener("keydown", event => {

  if (
    (event.ctrlKey || event.metaKey) &&
    event.key.toLowerCase() === "s"
  ) {

    event.preventDefault();

    saveResume();

  }

});


/* =========================================================
   INITIAL PREVIEW
   ========================================================= */

window.addEventListener("load", () => {

  updatePreview();

});

/* =========================================================
   RESUME BUILDER — COMPLETE SCRIPT.JS
   Matches the supplied index.html + style.css
   ========================================================= */

const STORAGE_KEY = "resumeBuilderData_v1";

const defaultResume = {
    personal: {
        fullName: "",
        jobTitle: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        github: "",
        portfolio: "",
        photo: ""
    },
    summary: "",
    education: [],
    experience: [],
    projects: [],
    skills: [],
    certifications: [],
    achievements: [],
    languages: [],
    custom: {
        title: "",
        content: ""
    },
    settings: {
        theme: "light",
        template: "professional"
    }
};

let resumeData = loadResumeData();
let saveTimer = null;


/* ================= HELPERS ================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function cloneDefault() {
    return JSON.parse(JSON.stringify(defaultResume));
}

function escapeHTML(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function isEmpty(value) {
    return value === null ||
        value === undefined ||
        String(value).trim() === "";
}

function formatText(value = "") {
    return escapeHTML(value).replace(/\n/g, "<br>");
}

function generateId(prefix) {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function formatDate(value) {
    if (!value) return "";

    const date = new Date(`${value}-01T00:00:00`);

    if (Number.isNaN(date.getTime())) {
        return escapeHTML(value);
    }

    return date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric"
    });
}

function formatRange(start, end, current = false) {
    const a = formatDate(start);
    const b = current ? "Present" : formatDate(end);

    if (!a && !b) return "";
    if (!a) return b;
    if (!b) return a;

    return `${a} – ${b}`;
}


/* ================= STORAGE ================= */

function mergeData(saved) {
    return {
        ...cloneDefault(),
        ...saved,
        personal: {
            ...cloneDefault().personal,
            ...(saved?.personal || {})
        },
        custom: {
            ...cloneDefault().custom,
            ...(saved?.custom || {})
        },
        settings: {
            ...cloneDefault().settings,
            ...(saved?.settings || {})
        },
        education: Array.isArray(saved?.education) ? saved.education : [],
        experience: Array.isArray(saved?.experience) ? saved.experience : [],
        projects: Array.isArray(saved?.projects) ? saved.projects : [],
        skills: Array.isArray(saved?.skills) ? saved.skills : [],
        certifications: Array.isArray(saved?.certifications) ? saved.certifications : [],
        achievements: Array.isArray(saved?.achievements) ? saved.achievements : [],
        languages: Array.isArray(saved?.languages) ? saved.languages : []
    };
}

function loadResumeData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? mergeData(JSON.parse(saved)) : cloneDefault();
    } catch {
        return cloneDefault();
    }
}

function saveResumeData() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
        updateSaveStatus("Saved");
    } catch {
        updateSaveStatus("Save failed");
    }
}

function scheduleSave() {
    updateSaveStatus("Saving...");

    clearTimeout(saveTimer);

    saveTimer = setTimeout(() => {
        saveResumeData();
    }, 450);
}

function updateSaveStatus(status) {
    const el = $(".save-status");
    if (!el) return;

    const text = el.querySelector("span:last-child");
    if (text) text.textContent = status;
}


/* ================= TOAST ================= */

function showToast(message) {
    const container = $("#toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => toast.remove(), 3400);
}


/* ================= NAVIGATION ================= */

function setupNavigation() {
    $$(".section-nav button[data-section]").forEach(button => {
        button.addEventListener("click", () => {
            activateSection(button.dataset.section);
        });
    });

    $$(".add-custom-section[data-section]").forEach(button => {
        button.addEventListener("click", () => {
            activateSection("custom");
            $("#customTitle")?.focus();
        });
    });
}

function activateSection(sectionName) {
    $$(".section-nav button").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.section === sectionName
        );
    });

    $$(".editor-section").forEach(section => {
        section.classList.toggle(
            "active",
            section.dataset.section === sectionName
        );
    });
}


/* ================= BASIC INPUTS ================= */

function bindBasicInput(id, setter) {
    const input = document.getElementById(id);
    if (!input) return;

    input.value = setter.get() || "";

    input.addEventListener("input", () => {
        setter.set(input.value);
        refresh();
    });
}

function setupBasicInputs() {
    const fields = {
        fullName: "fullName",
        jobTitle: "jobTitle",
        email: "email",
        phone: "phone",
        location: "location",
        linkedin: "linkedin",
        github: "github",
        portfolio: "portfolio"
    };

    Object.entries(fields).forEach(([id, key]) => {
        bindBasicInput(id, {
            get: () => resumeData.personal[key],
            set: value => {
                resumeData.personal[key] = value;
            }
        });
    });

    const summary = $("#summary");

    if (summary) {
        summary.value = resumeData.summary;

        summary.addEventListener("input", () => {
            resumeData.summary = summary.value;
            refresh();
        });
    }

    const customTitle = $("#customTitle");
    const customContent = $("#customContent");

    if (customTitle) {
        customTitle.value = resumeData.custom.title;

        customTitle.addEventListener("input", () => {
            resumeData.custom.title = customTitle.value;
            refresh();
        });
    }

    if (customContent) {
        customContent.value = resumeData.custom.content;

        customContent.addEventListener("input", () => {
            resumeData.custom.content = customContent.value;
            refresh();
        });
    }
}


/* ================= THEME ================= */

function applyTheme() {
    const dark = resumeData.settings.theme === "dark";

    document.body.classList.toggle("dark", dark);

    const button = $(".theme-toggle");

    if (button) {
        button.textContent = dark ? "☀" : "◐";
        button.setAttribute(
            "aria-label",
            dark ? "Switch to light mode" : "Switch to dark mode"
        );
    }
}

function setupTheme() {
    $(".theme-toggle")?.addEventListener("click", () => {
        resumeData.settings.theme =
            resumeData.settings.theme === "dark"
                ? "light"
                : "dark";

        applyTheme();
        scheduleSave();
    });
}


/* ================= DYNAMIC CARD HELPERS ================= */

function field(label, value, type = "text", placeholder = "") {
    return `
        <div class="form-group">
            <label>${label}</label>
            <input
                type="${type}"
                value="${escapeHTML(value || "")}"
                placeholder="${placeholder}"
            >
        </div>
    `;
}

function textareaField(label, value, placeholder = "") {
    return `
        <div class="form-group full">
            <label>${label}</label>
            <textarea placeholder="${placeholder}">${escapeHTML(value || "")}</textarea>
        </div>
    `;
}

function emptyState(text) {
    return `<div class="empty-entry">${text}</div>`;
}


/* ================= EDUCATION ================= */

function renderEducationEditor() {
    const container = $("#educationEntries");
    if (!container) return;

    if (!resumeData.education.length) {
        container.innerHTML = emptyState(
            "No education entries yet. Add your academic background."
        );
        return;
    }

    container.innerHTML = resumeData.education.map((item, index) => `
        <div class="entry-card" data-id="${item.id}">
            <div class="entry-header">
                <div class="entry-title">
                    <span class="entry-number">${index + 1}</span>
                    Education
                </div>
                <button
                    class="remove-entry"
                    type="button"
                    data-remove-education="${item.id}"
                >×</button>
            </div>

            <div class="form-grid">
                ${field("Degree / Program", item.degree, "text", "e.g. B.E. Computer Science")}
                ${field("Institution", item.institution, "text", "University or college")}
                ${field("Location", item.location, "text", "City, Country")}
                ${field("Grade / CGPA", item.grade, "text", "e.g. 8.7 CGPA")}
                ${field("Start Date", item.start, "month")}
                ${field("End Date", item.end, "month")}
                ${textareaField("Description", item.description, "Relevant coursework, academic highlights, activities...")}
            </div>
        </div>
    `).join("");

    bindEducation();
}

function bindEducation() {
    $$("#educationEntries .entry-card").forEach(card => {
        const item = resumeData.education.find(
            x => x.id === card.dataset.id
        );
        if (!item) return;

        const inputs = card.querySelectorAll("input");
        const textarea = card.querySelector("textarea");

        const props = [
            "degree",
            "institution",
            "location",
            "grade",
            "start",
            "end"
        ];

        inputs.forEach((input, index) => {
            input.addEventListener(
                input.type === "month" ? "change" : "input",
                () => {
                    item[props[index]] = input.value;
                    refresh();
                }
            );
        });

        textarea?.addEventListener("input", () => {
            item.description = textarea.value;
            refresh();
        });
    });

    $$("[data-remove-education]").forEach(button => {
        button.addEventListener("click", () => {
            resumeData.education =
                resumeData.education.filter(
                    x => x.id !== button.dataset.removeEducation
                );

            renderEducationEditor();
            refresh();
        });
    });
}


/* ================= EXPERIENCE ================= */

function renderExperienceEditor() {
    const container = $("#experienceEntries");
    if (!container) return;

    if (!resumeData.experience.length) {
        container.innerHTML = emptyState(
            "No experience entries yet. Add internships, jobs or professional experience."
        );
        return;
    }

    container.innerHTML = resumeData.experience.map((item, index) => `
        <div class="entry-card" data-id="${item.id}">
            <div class="entry-header">
                <div class="entry-title">
                    <span class="entry-number">${index + 1}</span>
                    Experience
                </div>
                <button
                    class="remove-entry"
                    type="button"
                    data-remove-experience="${item.id}"
                >×</button>
            </div>

            <div class="form-grid">
                ${field("Job Title", item.jobTitle, "text", "e.g. Software Engineer")}
                ${field("Company", item.company, "text", "Company name")}
                ${field("Location", item.location, "text", "City, Country")}
                ${field("Start Date", item.start, "month")}
                ${field("End Date", item.end, "month")}

                <div class="form-group">
                    <label>Employment Status</label>
                    <div class="checkbox-row">
                        <input class="current-checkbox" type="checkbox" ${item.current ? "checked" : ""}>
                        <label>I currently work here</label>
                    </div>
                </div>

                ${textareaField(
                    "Responsibilities & Achievements",
                    item.description,
                    "Describe your responsibilities, impact and achievements..."
                )}
            </div>
        </div>
    `).join("");

    bindExperience();
}

function bindExperience() {
    $$("#experienceEntries .entry-card").forEach(card => {
        const item = resumeData.experience.find(
            x => x.id === card.dataset.id
        );
        if (!item) return;

        const inputs = card.querySelectorAll("input:not(.current-checkbox)");
        const checkbox = card.querySelector(".current-checkbox");
        const textarea = card.querySelector("textarea");

        const props = ["jobTitle", "company", "location", "start", "end"];

        inputs.forEach((input, index) => {
            input.addEventListener(
                input.type === "month" ? "change" : "input",
                () => {
                    item[props[index]] = input.value;
                    refresh();
                }
            );
        });

        checkbox?.addEventListener("change", () => {
            item.current = checkbox.checked;
            refresh();
        });

        textarea?.addEventListener("input", () => {
            item.description = textarea.value;
            refresh();
        });
    });

    $$("[data-remove-experience]").forEach(button => {
        button.addEventListener("click", () => {
            resumeData.experience =
                resumeData.experience.filter(
                    x => x.id !== button.dataset.removeExperience
                );

            renderExperienceEditor();
            refresh();
        });
    });
}


/* ================= PROJECTS ================= */

function renderProjectsEditor() {
    const container = $("#projectEntries");
    if (!container) return;

    if (!resumeData.projects.length) {
        container.innerHTML = emptyState(
            "No projects added yet. Showcase your strongest work."
        );
        return;
    }

    container.innerHTML = resumeData.projects.map((item, index) => `
        <div class="entry-card" data-id="${item.id}">
            <div class="entry-header">
                <div class="entry-title">
                    <span class="entry-number">${index + 1}</span>
                    Project
                </div>
                <button
                    class="remove-entry"
                    type="button"
                    data-remove-project="${item.id}"
                >×</button>
            </div>

            <div class="form-grid">
                ${field("Project Name", item.name, "text", "Project title")}
                ${field("Technologies / Tools", item.technologies, "text", "JavaScript, React, Python...")}
                ${field("Project Link", item.link, "url", "https://example.com")}
                ${field("GitHub Repository", item.github, "url", "https://github.com/...")}
                ${textareaField(
                    "Description",
                    item.description,
                    "Explain what you built, the problem it solves and your contribution..."
                )}
            </div>
        </div>
    `).join("");

    $$("#projectEntries .entry-card").forEach(card => {
        const item = resumeData.projects.find(
            x => x.id === card.dataset.id
        );
        if (!item) return;

        const inputs = card.querySelectorAll("input");
        const textarea = card.querySelector("textarea");
        const props = ["name", "technologies", "link", "github"];

        inputs.forEach((input, index) => {
            input.addEventListener("input", () => {
                item[props[index]] = input.value;
                refresh();
            });
        });

        textarea?.addEventListener("input", () => {
            item.description = textarea.value;
            refresh();
        });
    });

    $$("[data-remove-project]").forEach(button => {
        button.addEventListener("click", () => {
            resumeData.projects =
                resumeData.projects.filter(
                    x => x.id !== button.dataset.removeProject
                );

            renderProjectsEditor();
            refresh();
        });
    });
}


/* ================= CERTIFICATIONS ================= */

function renderCertificationEditor() {
    const container = $("#certificationEntries");
    if (!container) return;

    if (!resumeData.certifications.length) {
        container.innerHTML = emptyState(
            "No certifications added yet."
        );
        return;
    }

    container.innerHTML = resumeData.certifications.map((item, index) => `
        <div class="entry-card" data-id="${item.id}">
            <div class="entry-header">
                <div class="entry-title">
                    <span class="entry-number">${index + 1}</span>
                    Certification
                </div>
                <button
                    class="remove-entry"
                    type="button"
                    data-remove-certification="${item.id}"
                >×</button>
            </div>

            <div class="form-grid">
                ${field("Certification Name", item.name, "text", "Certification name")}
                ${field("Issuing Organization", item.issuer, "text", "Organization name")}
                ${field("Issue Date", item.date, "month")}
                ${field("Credential ID", item.credentialId, "text", "Credential ID")}
                ${field("Credential URL", item.link, "url", "https://...")}
            </div>
        </div>
    `).join("");

    $$("#certificationEntries .entry-card").forEach(card => {
        const item = resumeData.certifications.find(
            x => x.id === card.dataset.id
        );
        if (!item) return;

        const inputs = card.querySelectorAll("input");
        const props = ["name", "issuer", "date", "credentialId", "link"];

        inputs.forEach((input, index) => {
            input.addEventListener(
                input.type === "month" ? "change" : "input",
                () => {
                    item[props[index]] = input.value;
                    refresh();
                }
            );
        });
    });

    $$("[data-remove-certification]").forEach(button => {
        button.addEventListener("click", () => {
            resumeData.certifications =
                resumeData.certifications.filter(
                    x => x.id !== button.dataset.removeCertification
                );

            renderCertificationEditor();
            refresh();
        });
    });
}


/* ================= ACHIEVEMENTS ================= */

function renderAchievementEditor() {
    const container = $("#achievementEntries");
    if (!container) return;

    if (!resumeData.achievements.length) {
        container.innerHTML = emptyState(
            "No achievements added yet."
        );
        return;
    }

    container.innerHTML = resumeData.achievements.map((item, index) => `
        <div class="entry-card" data-id="${item.id}">
            <div class="entry-header">
                <div class="entry-title">
                    <span class="entry-number">${index + 1}</span>
                    Achievement
                </div>
                <button
                    class="remove-entry"
                    type="button"
                    data-remove-achievement="${item.id}"
                >×</button>
            </div>

            <div class="form-grid">
                ${field("Achievement / Award", item.title, "text", "Award or accomplishment")}
                ${field("Organization", item.organization, "text", "Organization / Institution")}
                ${field("Date", item.date, "month")}
                ${textareaField(
                    "Description",
                    item.description,
                    "Briefly describe the achievement..."
                )}
            </div>
        </div>
    `).join("");

    $$("#achievementEntries .entry-card").forEach(card => {
        const item = resumeData.achievements.find(
            x => x.id === card.dataset.id
        );
        if (!item) return;

        const inputs = card.querySelectorAll("input");
        const textarea = card.querySelector("textarea");
        const props = ["title", "organization", "date"];

        inputs.forEach((input, index) => {
            input.addEventListener(
                input.type === "month" ? "change" : "input",
                () => {
                    item[props[index]] = input.value;
                    refresh();
                }
            );
        });

        textarea?.addEventListener("input", () => {
            item.description = textarea.value;
            refresh();
        });
    });

    $$("[data-remove-achievement]").forEach(button => {
        button.addEventListener("click", () => {
            resumeData.achievements =
                resumeData.achievements.filter(
                    x => x.id !== button.dataset.removeAchievement
                );

            renderAchievementEditor();
            refresh();
        });
    });
}


/* ================= LANGUAGES ================= */

function renderLanguageEditor() {
    const container = $("#languageEntries");
    if (!container) return;

    if (!resumeData.languages.length) {
        container.innerHTML = emptyState(
            "No languages added yet."
        );
        return;
    }

    container.innerHTML = resumeData.languages.map((item, index) => `
        <div class="entry-card" data-id="${item.id}">
            <div class="entry-header">
                <div class="entry-title">
                    <span class="entry-number">${index + 1}</span>
                    Language
                </div>
                <button
                    class="remove-entry"
                    type="button"
                    data-remove-language="${item.id}"
                >×</button>
            </div>

            <div class="form-grid">
                ${field("Language", item.language, "text", "e.g. English")}

                <div class="form-group">
                    <label>Proficiency</label>
                    <select>
                        <option value="">Select proficiency</option>
                        ${[
                            "Basic",
                            "Conversational",
                            "Professional",
                            "Fluent",
                            "Native"
                        ].map(level => `
                            <option value="${level}" ${item.proficiency === level ? "selected" : ""}>
                                ${level}
                            </option>
                        `).join("")}
                    </select>
                </div>
            </div>
        </div>
    `).join("");

    $$("#languageEntries .entry-card").forEach(card => {
        const item = resumeData.languages.find(
            x => x.id === card.dataset.id
        );
        if (!item) return;

        const input = card.querySelector("input");
        const select = card.querySelector("select");

        input?.addEventListener("input", () => {
            item.language = input.value;
            refresh();
        });

        select?.addEventListener("change", () => {
            item.proficiency = select.value;
            refresh();
        });
    });

    $$("[data-remove-language]").forEach(button => {
        button.addEventListener("click", () => {
            resumeData.languages =
                resumeData.languages.filter(
                    x => x.id !== button.dataset.removeLanguage
                );

            renderLanguageEditor();
            refresh();
        });
    });
}


/* ================= SKILLS ================= */

function renderSkillsEditor() {
    const container = $("#skillsList");
    if (!container) return;

    container.innerHTML = resumeData.skills.map((skill, index) => `
        <div class="skill-tag">
            ${escapeHTML(skill)}
            <button
                type="button"
                data-remove-skill="${index}"
                aria-label="Remove skill"
            >×</button>
        </div>
    `).join("");

    $$("[data-remove-skill]").forEach(button => {
        button.addEventListener("click", () => {
            resumeData.skills.splice(
                Number(button.dataset.removeSkill),
                1
            );

            renderSkillsEditor();
            refresh();
        });
    });
}

function setupSkills() {
    const input = $("#skillInput");
    const button = $("#addSkill");

    if (!input || !button) return;

    const add = () => {
        const value = input.value.trim();

        if (!value) return;

        const duplicate = resumeData.skills.some(
            skill => skill.toLowerCase() === value.toLowerCase()
        );

        if (duplicate) {
            showToast("That skill is already added.");
            input.value = "";
            return;
        }

        resumeData.skills.push(value);
        input.value = "";

        renderSkillsEditor();
        refresh();
    };

    button.addEventListener("click", add);

    input.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            event.preventDefault();
            add();
        }
    });
}


/* ================= ADD BUTTONS ================= */

function setupAddButtons() {
    $("#addEducation")?.addEventListener("click", () => {
        resumeData.education.push({
            id: generateId("education"),
            degree: "",
            institution: "",
            location: "",
            start: "",
            end: "",
            grade: "",
            description: ""
        });

        renderEducationEditor();
        refresh();
    });

    $("#addExperience")?.addEventListener("click", () => {
        resumeData.experience.push({
            id: generateId("experience"),
            jobTitle: "",
            company: "",
            location: "",
            start: "",
            end: "",
            current: false,
            description: ""
        });

        renderExperienceEditor();
        refresh();
    });

    $("#addProject")?.addEventListener("click", () => {
        resumeData.projects.push({
            id: generateId("project"),
            name: "",
            description: "",
            technologies: "",
            link: "",
            github: ""
        });

        renderProjectsEditor();
        refresh();
    });

    $("#addCertification")?.addEventListener("click", () => {
        resumeData.certifications.push({
            id: generateId("certification"),
            name: "",
            issuer: "",
            date: "",
            credentialId: "",
            link: ""
        });

        renderCertificationEditor();
        refresh();
    });

    $("#addAchievement")?.addEventListener("click", () => {
        resumeData.achievements.push({
            id: generateId("achievement"),
            title: "",
            organization: "",
            date: "",
            description: ""
        });

        renderAchievementEditor();
        refresh();
    });

    $("#addLanguage")?.addEventListener("click", () => {
        resumeData.languages.push({
            id: generateId("language"),
            language: "",
            proficiency: ""
        });

        renderLanguageEditor();
        refresh();
    });
}


/* ================= PHOTO ================= */

function setupPhoto() {
    const input = $("#profilePhoto");
    if (!input) return;

    input.addEventListener("change", event => {
        const file = event.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            showToast("Please select an image file.");
            return;
        }

        if (file.size > 4 * 1024 * 1024) {
            showToast("Please choose an image smaller than 4 MB.");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            resumeData.personal.photo = reader.result;
            refresh();
        };

        reader.readAsDataURL(file);
    });

    updatePhoto();
}

function updatePhoto() {
    const photo = resumeData.personal.photo;

    const editorImage = $(".photo-preview img");
    const placeholder = $(".photo-placeholder");

    if (editorImage) {
        editorImage.src = photo || "";
        editorImage.style.display = photo ? "block" : "none";
    }

    if (placeholder) {
        placeholder.style.display = photo ? "none" : "block";
    }
}


/* ================= PREVIEW ================= */

function setDisplay(selector, visible) {
    const element = $(selector);
    if (!element) return;

    element.style.display = visible ? "" : "none";
}

function renderPreviewHeader() {
    $("#previewName").textContent =
        resumeData.personal.fullName || "Your Name";

    $("#previewJobTitle").textContent =
        resumeData.personal.jobTitle || "Professional Title";

    const contact = $("#previewContact");

    if (contact) {
        const values = [
            resumeData.personal.email,
            resumeData.personal.phone,
            resumeData.personal.location,
            resumeData.personal.linkedin,
            resumeData.personal.github,
            resumeData.personal.portfolio
        ].filter(value => !isEmpty(value));

        contact.innerHTML = values.map(value =>
            `<span>${escapeHTML(value)}</span>`
        ).join("");
    }

    const wrapper = $("#previewPhotoWrapper");
    const image = $("#previewPhoto");

    if (wrapper && image) {
        if (resumeData.personal.photo) {
            wrapper.style.display = "block";
            image.src = resumeData.personal.photo;
        } else {
            wrapper.style.display = "none";
            image.removeAttribute("src");
        }
    }
}

function renderPreviewSummary() {
    const has = !isEmpty(resumeData.summary);

    $("#previewSummary").innerHTML =
        has ? formatText(resumeData.summary) : "";

    setDisplay("#previewSummarySection", has);
}

function renderPreviewEducation() {
    const items = resumeData.education.filter(
        item => !isEmpty(item.degree) || !isEmpty(item.institution)
    );

    $("#previewEducation").innerHTML = items.map(item => `
        <article class="resume-entry">
            <div class="resume-entry-head">
                <div class="resume-entry-main">
                    <div class="resume-entry-title">
                        ${escapeHTML(item.degree)}
                    </div>
                    <div class="resume-entry-subtitle">
                        ${escapeHTML(item.institution)}
                    </div>
                    ${!isEmpty(item.location) ? `
                        <div class="resume-entry-location">
                            ${escapeHTML(item.location)}
                        </div>
                    ` : ""}
                </div>

                ${formatRange(item.start, item.end) ? `
                    <div class="resume-entry-date">
                        ${formatRange(item.start, item.end)}
                    </div>
                ` : ""}
            </div>

            ${!isEmpty(item.grade) ? `
                <div class="resume-entry-description">
                    ${escapeHTML(item.grade)}
                </div>
            ` : ""}

            ${!isEmpty(item.description) ? `
                <div class="resume-entry-description">
                    ${formatText(item.description)}
                </div>
            ` : ""}
        </article>
    `).join("");

    setDisplay("#previewEducationSection", items.length > 0);
}

function renderPreviewExperience() {
    const items = resumeData.experience.filter(
        item => !isEmpty(item.jobTitle) || !isEmpty(item.company)
    );

    $("#previewExperience").innerHTML = items.map(item => `
        <article class="resume-entry">
            <div class="resume-entry-head">
                <div class="resume-entry-main">
                    <div class="resume-entry-title">
                        ${escapeHTML(item.jobTitle)}
                    </div>
                    <div class="resume-entry-subtitle">
                        ${escapeHTML(item.company)}
                    </div>
                    ${!isEmpty(item.location) ? `
                        <div class="resume-entry-location">
                            ${escapeHTML(item.location)}
                        </div>
                    ` : ""}
                </div>

                ${formatRange(item.start, item.end, item.current) ? `
                    <div class="resume-entry-date">
                        ${formatRange(item.start, item.end, item.current)}
                    </div>
                ` : ""}
            </div>

            ${!isEmpty(item.description) ? `
                <div class="resume-entry-description">
                    ${formatText(item.description)}
                </div>
            ` : ""}
        </article>
    `).join("");

    setDisplay("#previewExperienceSection", items.length > 0);
}

function renderPreviewProjects() {
    const items = resumeData.projects.filter(
        item => !isEmpty(item.name) || !isEmpty(item.description)
    );

    $("#previewProjects").innerHTML = items.map(item => `
        <article class="resume-entry">
            <div class="resume-entry-head">
                <div class="resume-entry-main">
                    <div class="resume-entry-title">
                        ${escapeHTML(item.name)}
                    </div>

                    ${!isEmpty(item.technologies) ? `
                        <div class="resume-entry-subtitle">
                            ${escapeHTML(item.technologies)}
                        </div>
                    ` : ""}
                </div>
            </div>

            ${!isEmpty(item.description) ? `
                <div class="resume-entry-description">
                    ${formatText(item.description)}
                </div>
            ` : ""}

            ${!isEmpty(item.link) ? `
                <a
                    class="resume-entry-link"
                    href="${escapeHTML(item.link)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >Project</a>
            ` : ""}

            ${!isEmpty(item.github) ? `
                <a
                    class="resume-entry-link"
                    href="${escapeHTML(item.github)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >GitHub</a>
            ` : ""}
        </article>
    `).join("");

    setDisplay("#previewProjectsSection", items.length > 0);
}

function renderPreviewSkills() {
    const skills = resumeData.skills.filter(
        skill => !isEmpty(skill)
    );

    $("#previewSkills").innerHTML = skills.map(skill => `
        <span class="resume-skill">
            ${escapeHTML(skill)}
        </span>
    `).join("");

    setDisplay("#previewSkillsSection", skills.length > 0);
}

function renderPreviewCertifications() {
    const items = resumeData.certifications.filter(
        item => !isEmpty(item.name)
    );

    $("#previewCertifications").innerHTML = items.map(item => `
        <article class="resume-entry">
            <div class="resume-entry-head">
                <div class="resume-entry-main">
                    <div class="resume-entry-title">
                        ${escapeHTML(item.name)}
                    </div>

                    ${!isEmpty(item.issuer) ? `
                        <div class="resume-entry-subtitle">
                            ${escapeHTML(item.issuer)}
                        </div>
                    ` : ""}
                </div>

                ${!isEmpty(item.date) ? `
                    <div class="resume-entry-date">
                        ${formatDate(item.date)}
                    </div>
                ` : ""}
            </div>

            ${!isEmpty(item.credentialId) ? `
                <div class="resume-entry-description">
                    Credential ID: ${escapeHTML(item.credentialId)}
                </div>
            ` : ""}
        </article>
    `).join("");

    setDisplay("#previewCertificationsSection", items.length > 0);
}

function renderPreviewAchievements() {
    const items = resumeData.achievements.filter(
        item => !isEmpty(item.title)
    );

    $("#previewAchievements").innerHTML = items.map(item => `
        <article class="resume-entry">
            <div class="resume-entry-head">
                <div class="resume-entry-main">
                    <div class="resume-entry-title">
                        ${escapeHTML(item.title)}
                    </div>

                    ${!isEmpty(item.organization) ? `
                        <div class="resume-entry-subtitle">
                            ${escapeHTML(item.organization)}
                        </div>
                    ` : ""}
                </div>

                ${!isEmpty(item.date) ? `
                    <div class="resume-entry-date">
                        ${formatDate(item.date)}
                    </div>
                ` : ""}
            </div>

            ${!isEmpty(item.description) ? `
                <div class="resume-entry-description">
                    ${formatText(item.description)}
                </div>
            ` : ""}
        </article>
    `).join("");

    setDisplay("#previewAchievementsSection", items.length > 0);
}

function renderPreviewLanguages() {
    const items = resumeData.languages.filter(
        item => !isEmpty(item.language)
    );

    $("#previewLanguages").innerHTML = items.map(item => `
        <div class="resume-language">
            <strong>${escapeHTML(item.language)}</strong>
            <span>${escapeHTML(item.proficiency)}</span>
        </div>
    `).join("");

    setDisplay("#previewLanguagesSection", items.length > 0);
}

function renderPreviewCustom() {
    const title = resumeData.custom.title.trim();
    const content = resumeData.custom.content.trim();

    $("#previewCustomTitle").textContent =
        title || "Additional Information";

    $("#previewCustomContent").innerHTML =
        content ? formatText(content) : "";

    setDisplay(
        "#previewCustomSection",
        Boolean(title || content)
    );
}

function applyTemplate() {
    const template =
        resumeData.settings.template || "professional";

    const preview = $("#resumePreview");

    if (preview) {
        preview.className =
            `resume-page template-${template}`;
    }

    const full = $("#fullPreviewResume");

    if (full) {
        full.className =
            `resume-page template-${template}`;
    }

    $$(".template-card").forEach(card => {
        card.classList.toggle(
            "active",
            card.dataset.template === template
        );
    });
}

function updateResumePreview() {
    renderPreviewHeader();
    renderPreviewSummary();
    renderPreviewExperience();
    renderPreviewEducation();
    renderPreviewProjects();
    renderPreviewSkills();
    renderPreviewCertifications();
    renderPreviewAchievements();
    renderPreviewLanguages();
    renderPreviewCustom();
    applyTemplate();
    updatePhoto();
}

function refresh() {
    updateResumePreview();
    scheduleSave();
}


/* ================= TEMPLATE MODAL ================= */

function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.add("active");
    document.body.classList.add("no-scroll");
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.remove("active");

    if (!$(".modal.active")) {
        document.body.classList.remove("no-scroll");
    }
}

function setupModals() {
    $("#chooseTemplate")?.addEventListener(
        "click",
        () => openModal("templateModal")
    );

    $("#openPreview")?.addEventListener(
        "click",
        openFullPreview
    );

    $("#openFullPreview")?.addEventListener(
        "click",
        openFullPreview
    );

    $$("[data-close-modal]").forEach(button => {
        button.addEventListener("click", () => {
            closeModal(button.dataset.closeModal);
        });
    });

    $$(".modal").forEach(modal => {
        modal.addEventListener("click", event => {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    $$(".template-card").forEach(card => {
        card.addEventListener("click", () => {
            resumeData.settings.template =
                card.dataset.template;

            applyTemplate();
            scheduleSave();

            closeModal("templateModal");

            showToast(
                `${card.querySelector("h3")?.textContent || "Template"} selected.`
            );
        });
    });
}


/* ================= FULL PREVIEW ================= */

function openFullPreview() {
    const target = $("#fullPreviewResume");
    const source = $("#resumePreview");

    if (!target || !source) return;

    target.innerHTML = source.innerHTML;
    target.className = source.className;

    openModal("fullPreviewModal");
}


/* ================= PRINT / PDF ================= */

function printResume() {
    updateResumePreview();
    window.print();
}

function setupDownload() {
    $("#downloadPdf")?.addEventListener(
        "click",
        () => {
            printResume();
        }
    );
}


/* ================= MOBILE TABS ================= */

function setupPreviewTabs() {
    $$(".preview-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            const mode = tab.dataset.previewTab;

            $$(".preview-tab").forEach(x => {
                x.classList.toggle(
                    "active",
                    x === tab
                );
            });

            if (window.innerWidth > 700) return;

            const editor = $(".editor");
            const preview = $(".preview-panel");

            if (mode === "edit") {
                editor.style.display = "";
                preview.style.display = "";
                preview.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            } else {
                preview.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}


/* ================= KEYBOARD SHORTCUTS ================= */

function setupKeyboardShortcuts() {
    document.addEventListener("keydown", event => {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
            event.preventDefault();
            saveResumeData();
            showToast("Resume saved.");
        }

        if (event.key === "Escape") {
            $$(".modal.active").forEach(modal => {
                closeModal(modal.id);
            });
        }
    });
}


/* ================= START ================= */

document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setupBasicInputs();
    setupTheme();
    setupAddButtons();
    setupSkills();
    setupPhoto();
    setupModals();
    setupDownload();
    setupPreviewTabs();
    setupKeyboardShortcuts();

    renderEducationEditor();
    renderExperienceEditor();
    renderProjectsEditor();
    renderCertificationEditor();
    renderAchievementEditor();
    renderLanguageEditor();
    renderSkillsEditor();

    applyTheme();
    updateResumePreview();
    updateSaveStatus("Saved");
});

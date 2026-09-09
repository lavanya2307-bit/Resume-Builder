/* =========================================================
   RESUME BUILDER — PROFESSIONAL UI
   ========================================================= */

:root {
  --bg: #f4f6fb;
  --surface: #ffffff;
  --surface-2: #f8f9fc;
  --border: #e4e7ef;

  --text: #172033;
  --muted: #687386;
  --soft: #929bad;

  --primary: #3157d5;
  --primary-dark: #2444ad;
  --primary-soft: #eef2ff;

  --success: #16845b;
  --danger: #d14343;

  --shadow: 0 16px 45px rgba(23, 32, 51, 0.08);

  --radius: 16px;
  --resume-width: 794px;
  --resume-height: 1123px;

  --font: "Inter", Arial, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font);
  background:
    radial-gradient(circle at 10% 10%, rgba(49, 87, 213, .10), transparent 28%),
    radial-gradient(circle at 90% 20%, rgba(139, 92, 246, .08), transparent 25%),
    var(--bg);
  color: var(--text);
  min-height: 100vh;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.hidden {
  display: none !important;
}


/* =========================================================
   TOPBAR
   ========================================================= */

.topbar {
  height: 76px;
  background: rgba(255, 255, 255, .88);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 28px;

  position: sticky;
  top: 0;
  z-index: 50;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;

  border-radius: 12px;

  display: grid;
  place-items: center;

  color: white;
  font-weight: 800;
  font-size: 19px;

  background:
    linear-gradient(135deg, #3157d5, #7c4dff);

  box-shadow: 0 8px 20px rgba(49, 87, 213, .25);
}

.brand h1 {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -.02em;
}

.brand p {
  margin-top: 2px;
  color: var(--muted);
  font-size: 10px;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.theme-btn,
.clear-btn,
.download-btn {
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  padding: 0 14px;
  font-size: 11px;
  font-weight: 700;
  transition: .2s ease;
}

.theme-btn {
  width: 38px;
  padding: 0;
  font-size: 16px;
}

.theme-btn:hover,
.clear-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.download-btn {
  border: none;
  color: white;
  background: linear-gradient(135deg, var(--primary), #6746df);
  box-shadow: 0 8px 18px rgba(49, 87, 213, .22);
}

.download-btn:hover {
  transform: translateY(-1px);
}


/* =========================================================
   MAIN APP
   ========================================================= */

.app {
  max-width: 1700px;
  margin: auto;

  display: grid;
  grid-template-columns: minmax(500px, 1fr) minmax(650px, 900px);

  min-height: calc(100vh - 76px);
}


/* =========================================================
   EDITOR
   ========================================================= */

.editor {
  padding: 42px 42px 80px;
  overflow-y: auto;

  border-right: 1px solid var(--border);
}

.editor-heading {
  max-width: 720px;
  margin: 0 auto 28px;
}

.eyebrow {
  display: block;

  color: var(--primary);

  font-size: 9px;
  font-weight: 800;

  letter-spacing: .18em;

  margin-bottom: 7px;
}

.editor-heading h2,
.preview-header h2 {
  font-size: 27px;
  letter-spacing: -.04em;
}

.editor-heading p {
  color: var(--muted);
  font-size: 12px;
  margin-top: 6px;
}


/* =========================================================
   CARDS
   ========================================================= */

.card {
  max-width: 720px;
  margin: 0 auto 18px;

  background: rgba(255,255,255,.94);
  border: 1px solid var(--border);

  border-radius: var(--radius);

  padding: 24px;

  box-shadow: 0 8px 28px rgba(23, 32, 51, .035);

  transition: .2s ease;
}

.card:hover {
  border-color: #d5daf0;
  box-shadow: var(--shadow);
}

.card-title {
  display: flex;
  align-items: center;
  gap: 12px;

  margin-bottom: 22px;
}

.number {
  width: 34px;
  height: 34px;

  border-radius: 10px;

  display: grid;
  place-items: center;

  color: var(--primary);
  background: var(--primary-soft);

  font-size: 10px;
  font-weight: 800;
}

.card-title h3 {
  font-size: 14px;
  font-weight: 800;
}

.card-title p {
  margin-top: 3px;
  color: var(--muted);
  font-size: 10px;
}


/* =========================================================
   FORM
   ========================================================= */

.grid {
  display: grid;
  gap: 14px;
}

.grid.two {
  grid-template-columns: 1fr 1fr;
}

.field {
  margin-bottom: 14px;
}

.field:last-child {
  margin-bottom: 0;
}

.field label {
  display: block;

  margin-bottom: 6px;

  font-size: 10px;
  font-weight: 700;

  color: #414b60;
}

.field input,
.field select,
.field textarea,
.skill-input input {
  width: 100%;

  border: 1px solid #dfe3eb;
  border-radius: 10px;

  background: #fbfcfe;
  color: var(--text);

  padding: 11px 12px;

  outline: none;

  font-size: 11px;

  transition: .2s ease;
}

.field input,
.field select {
  height: 40px;
}

.field textarea {
  resize: vertical;
  min-height: 105px;
  line-height: 1.55;
}

.field input:focus,
.field select:focus,
.field textarea:focus,
.skill-input input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(49,87,213,.09);
  background: white;
}

.field input::placeholder,
.field textarea::placeholder {
  color: #a5adbb;
}


/* =========================================================
   PHOTO
   ========================================================= */

.photo-area {
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 14px;

  margin-bottom: 20px;

  border: 1px dashed #d8ddea;
  border-radius: 12px;

  background: #fafbfe;
}

.photo-preview {
  width: 62px;
  height: 62px;

  border-radius: 12px;

  display: grid;
  place-items: center;

  overflow: hidden;

  background: #eef1f7;

  color: var(--primary);

  font-size: 24px;
  font-weight: 300;
}

.photo-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upload-label {
  display: inline-block;

  padding: 8px 11px;

  border-radius: 8px;

  background: var(--primary);
  color: white;

  font-size: 10px;
  font-weight: 700;

  cursor: pointer;
}

.upload-label input {
  display: none;
}

.photo-area small {
  display: block;
  margin-top: 6px;

  color: var(--soft);
  font-size: 9px;
}


/* =========================================================
   ADD BUTTON
   ========================================================= */

.add-btn {
  width: 100%;

  height: 40px;

  border-radius: 10px;

  border: 1px dashed #cbd2e2;

  background: #fafbfe;

  color: var(--primary);

  font-size: 11px;
  font-weight: 800;

  transition: .2s ease;
}

.add-btn:hover {
  border-color: var(--primary);
  background: var(--primary-soft);
}


/* =========================================================
   DYNAMIC ENTRY
   ========================================================= */

.entry {
  position: relative;

  padding: 16px;

  margin-bottom: 12px;

  border: 1px solid #e3e6ee;
  border-radius: 12px;

  background: #fafbfc;
}

.entry-remove {
  position: absolute;

  right: 12px;
  top: 12px;

  border: none;
  background: transparent;

  color: #9aa3b3;

  font-size: 15px;
}

.entry-remove:hover {
  color: var(--danger);
}

.entry .grid {
  padding-right: 24px;
}


/* =========================================================
   SKILLS
   ========================================================= */

.skill-input {
  display: flex;
  gap: 8px;
}

.skill-input input {
  height: 40px;
}

.skill-input button {
  width: 70px;

  border: none;
  border-radius: 10px;

  color: white;
  background: var(--primary);

  font-size: 10px;
  font-weight: 800;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;

  gap: 7px;

  margin-top: 12px;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  gap: 7px;

  padding: 7px 9px;

  border-radius: 7px;

  background: #eef2ff;
  color: #304da9;

  font-size: 10px;
  font-weight: 700;
}

.skill-tag button {
  border: none;
  background: transparent;

  color: inherit;

  font-size: 13px;
  line-height: 1;
}


/* =========================================================
   PREVIEW AREA
   ========================================================= */

.preview-area {
  min-width: 0;

  padding: 30px;

  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,.65),
      rgba(241,244,251,.9)
    );

  overflow: auto;
}

.preview-header {
  max-width: 900px;
  margin: 0 auto 18px;

  display: flex;
  justify-content: space-between;
  align-items: end;
}

.preview-tools {
  display: flex;
  align-items: center;
  gap: 8px;
}

.preview-tools select {
  height: 36px;

  border: 1px solid var(--border);
  border-radius: 9px;

  padding: 0 10px;

  background: white;

  color: var(--text);

  font-size: 10px;
  font-weight: 700;
}

#accentColor {
  width: 36px;
  height: 36px;

  border: 1px solid var(--border);
  border-radius: 9px;

  padding: 3px;

  background: white;

  cursor: pointer;
}


/* =========================================================
   RESUME FRAME
   ========================================================= */

.resume-frame {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 15px;

  overflow: auto;
}

.resume {
  width: var(--resume-width);
  min-width: var(--resume-width);

  height: var(--resume-height);

  background: white;

  color: #20242d;

  box-shadow:
    0 25px 70px rgba(20, 27, 45, .16),
    0 2px 8px rgba(20, 27, 45, .08);

  padding: 55px 60px;

  overflow: hidden;

  position: relative;

  font-family: Arial, Helvetica, sans-serif;
}


/* =========================================================
   RESUME HEADER
   ========================================================= */

.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding-bottom: 22px;

  border-bottom: 2px solid var(--resume-accent, #3157d5);
}

.resume-identity {
  min-width: 0;
}

.resume-identity h1 {
  color: #151922;

  font-family: "Inter", Arial, sans-serif;

  font-size: 31px;
  line-height: 1.05;

  font-weight: 800;

  letter-spacing: -.035em;

  margin-bottom: 7px;
}

.resume-identity h2 {
  color: var(--resume-accent, #3157d5);

  font-size: 14px;
  font-weight: 700;

  margin-bottom: 11px;
}

.contact-line,
.links-line {
  color: #596171;

  font-size: 8.7px;

  line-height: 1.65;
}

.links-line {
  margin-top: 2px;
}

.links-line a {
  color: #596171;
  text-decoration: none;
}

.resume-photo {
  width: 78px;
  height: 78px;

  object-fit: cover;

  border-radius: 8px;

  display: none;
}


/* =========================================================
   RESUME SECTIONS
   ========================================================= */

.resume-section {
  margin-top: 17px;
}

.resume-section h3 {
  color: var(--resume-accent, #3157d5);

  font-size: 9.5px;
  font-weight: 800;

  letter-spacing: .13em;

  margin-bottom: 8px;

  padding-bottom: 4px;

  border-bottom: 1px solid #e1e4e9;
}

.resume-section p {
  color: #3e4551;

  font-size: 8.8px;
  line-height: 1.48;

  font-weight: 400;
}


/* =========================================================
   RESUME ENTRIES
   ========================================================= */

.resume-entry {
  margin-bottom: 10px;
}

.resume-entry:last-child {
  margin-bottom: 0;
}

.resume-entry-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  gap: 15px;
}

.resume-entry-title {
  color: #171b23;

  font-size: 9.6px;
  font-weight: 800;
}

.resume-entry-date {
  flex-shrink: 0;

  color: #697281;

  font-size: 7.8px;
  font-weight: 600;
}

.resume-entry-company {
  margin-top: 2px;

  color: var(--resume-accent, #3157d5);

  font-size: 8.3px;
  font-weight: 700;
}

.resume-entry-description {
  margin-top: 4px;

  color: #464d58;

  font-size: 8.2px;
  line-height: 1.42;
}

.resume-entry-description ul {
  padding-left: 13px;
}

.resume-entry-description li {
  margin-bottom: 2px;
}


/* =========================================================
   SKILLS
   ========================================================= */

.resume-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 5px 12px;
}

.resume-skill {
  color: #343b47;

  font-size: 8.2px;
  font-weight: 600;

  position: relative;

  padding-left: 8px;
}

.resume-skill::before {
  content: "";

  width: 3px;
  height: 3px;

  border-radius: 50%;

  background: var(--resume-accent, #3157d5);

  position: absolute;
  left: 0;
  top: 50%;

  transform: translateY(-50%);
}


/* =========================================================
   LANGUAGES
   ========================================================= */

.resume-languages {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
}

.resume-language {
  color: #3e4551;

  font-size: 8.2px;
}

.resume-language strong {
  color: #20242d;
  font-weight: 700;
}


/* =========================================================
   PDF NOTE
   ========================================================= */

.pdf-note {
  max-width: 900px;

  margin: 10px auto 0;

  display: flex;
  justify-content: center;
  gap: 7px;

  color: var(--muted);

  font-size: 9px;
}

.pdf-note strong {
  color: var(--text);
}


/* =========================================================
   MODERN TEMPLATE
   ========================================================= */

.resume.modern {
  padding-top: 0;
}

.resume.modern .resume-header {
  margin: 0 -60px;
  padding: 55px 60px 22px;

  background:
    linear-gradient(
      135deg,
      rgba(49,87,213,.07),
      rgba(124,77,255,.04)
    );

  border-bottom: 2px solid var(--resume-accent, #3157d5);
}

.resume.modern .resume-section h3 {
  border-bottom: none;
  padding-bottom: 0;
}


/* =========================================================
   MINIMAL TEMPLATE
   ========================================================= */

.resume.minimal {
  padding: 62px 65px;
}

.resume.minimal .resume-header {
  border-bottom: 1px solid #cfd4dc;
}

.resume.minimal .resume-identity h1 {
  font-weight: 600;
}

.resume.minimal .resume-section h3 {
  color: #242a34;
  border-bottom: none;
}


/* =========================================================
   DARK UI
   ========================================================= */

body.dark {
  --bg: #0d1119;
  --surface: #151b26;
  --surface-2: #111722;
  --border: #252d3c;

  --text: #edf1f8;
  --muted: #9aa5b8;
  --soft: #707b8e;

  background:
    radial-gradient(circle at 10% 10%, rgba(49,87,213,.18), transparent 28%),
    radial-gradient(circle at 90% 20%, rgba(124,77,255,.13), transparent 25%),
    var(--bg);
}

body.dark .topbar {
  background: rgba(13,17,25,.88);
}

body.dark .card,
body.dark .field input,
body.dark .field select,
body.dark .field textarea,
body.dark .skill-input input,
body.dark .preview-tools select,
body.dark #accentColor {
  background: var(--surface);
  color: var(--text);
  border-color: var(--border);
}

body.dark .photo-area,
body.dark .entry,
body.dark .add-btn {
  background: var(--surface-2);
  border-color: var(--border);
}

body.dark .field label {
  color: #b9c1cf;
}

body.dark .preview-area {
  background: #10151f;
}


/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 1250px) {

  .app {
    grid-template-columns: 1fr;
  }

  .editor {
    border-right: none;
  }

  .preview-area {
    border-top: 1px solid var(--border);
  }

  .preview-header {
    max-width: 850px;
  }

}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 700px) {

  .topbar {
    height: auto;
    min-height: 68px;

    padding: 10px 14px;

    gap: 10px;
  }

  .brand-mark {
    width: 36px;
    height: 36px;
  }

  .brand h1 {
    font-size: 14px;
  }

  .brand p {
    display: none;
  }

  .top-actions {
    gap: 5px;
  }

  .clear-btn {
    display: none;
  }

  .download-btn {
    padding: 0 10px;
    font-size: 9px;
  }

  .editor {
    padding: 28px 12px 50px;
  }

  .editor-heading {
    padding: 0 5px;
  }

  .editor-heading h2,
  .preview-header h2 {
    font-size: 23px;
  }

  .card {
    padding: 17px;
    border-radius: 13px;
  }

  .grid.two {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .preview-area {
    padding: 20px 8px 40px;
  }

  .preview-header {
    padding: 0 6px;

    align-items: center;
  }

  .preview-tools select {
    max-width: 105px;
  }

  .resume-frame {
    justify-content: flex-start;

    overflow-x: auto;

    padding: 10px;
  }

  .pdf-note {
    flex-direction: column;
    text-align: center;
  }

}


/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media (max-width: 420px) {

  .brand {
    gap: 7px;
  }

  .brand-mark {
    width: 32px;
    height: 32px;

    border-radius: 9px;
  }

  .brand h1 {
    font-size: 12px;
  }

  .theme-btn {
    width: 34px;
    height: 34px;
  }

  .download-btn {
    height: 34px;
  }

  .card-title {
    margin-bottom: 18px;
  }

  .skill-input {
    flex-direction: column;
  }

  .skill-input button {
    width: 100%;
    height: 38px;
  }

}


/* =========================================================
   PRINT / PDF
   ========================================================= */

@page {
  size: A4;
  margin: 0;
}

@media print {

  html,
  body {
    width: 210mm;
    height: 297mm;

    margin: 0 !important;
    padding: 0 !important;

    background: white !important;
  }

  body {
    overflow: visible !important;
  }

  .topbar,
  .editor,
  .preview-header,
  .pdf-note {
    display: none !important;
  }

  .app {
    display: block !important;

    width: 210mm;
    min-height: 297mm;

    margin: 0 !important;
  }

  .preview-area {
    display: block !important;

    width: 210mm;
    height: 297mm;

    padding: 0 !important;
    margin: 0 !important;

    overflow: visible !important;

    background: white !important;
  }

  .resume-frame {
    display: block !important;

    width: 210mm;
    height: 297mm;

    padding: 0 !important;
    margin: 0 !important;

    overflow: visible !important;
  }

  .resume {
    width: 210mm !important;
    height: 297mm !important;

    min-width: 0 !important;

    margin: 0 !important;

    padding: 15mm 16mm !important;

    box-shadow: none !important;

    overflow: hidden !important;
  }

  .resume.modern .resume-header {
    margin-left: -16mm;
    margin-right: -16mm;

    padding-left: 16mm;
    padding-right: 16mm;
  }

  .resume-section {
    break-inside: avoid;
  }

  a {
    color: inherit !important;
    text-decoration: none !important;
  }

}


/* =========================================================
   ACCESSIBILITY
   ========================================================= */

button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid rgba(49,87,213,.22);
  outline-offset: 2px;
}


/* =========================================================
   SCROLLBAR
   ========================================================= */

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #cbd1dc;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: #aeb6c5;
}


/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition: none !important;
    animation: none !important;
  }

}

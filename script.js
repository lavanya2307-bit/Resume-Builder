const STORAGE_KEY = "resumeBuilderData";

const resume = {
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
  skills: [],
  certifications: [],
  languages: [],

  photo: "",

  settings: {
    theme: "light",
    template: "classic",
    accent: "#2563eb"
  }
};


/* ================= INDIA LOCATION DATA ================= */

const indiaStates = {

  "Andhra Pradesh": [
    "Alluri Sitharama Raju",
    "Anakapalli",
    "Ananthapuramu",
    "Annamayya",
    "Bapatla",
    "Chittoor",
    "Dr. B. R. Ambedkar Konaseema",
    "East Godavari",
    "Eluru",
    "Guntur",
    "Kakinada",
    "Krishna",
    "Kurnool",
    "Nandyal",
    "Nellore",
    "Palnadu",
    "Parvathipuram Manyam",
    "Prakasam",
    "Sri Potti Sriramulu Nellore",
    "Sri Sathya Sai",
    "Srikakulam",
    "Tirupati",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari"
  ],

  "Arunachal Pradesh": [
    "Tawang",
    "West Kameng",
    "East Kameng",
    "Papum Pare",
    "Kurung Kumey",
    "Kra Daadi",
    "Lower Subansiri",
    "Upper Subansiri",
    "West Siang",
    "Siang",
    "East Siang",
    "Upper Siang",
    "Lower Siang",
    "Lower Dibang Valley",
    "Dibang Valley",
    "Anjaw",
    "Lohit",
    "Namsai",
    "Changlang",
    "Tirap",
    "Longding"
  ],

  "Assam": [
    "Baksa",
    "Barpeta",
    "Biswanath",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Hojai",
    "Jorhat",
    "Kamrup",
    "Kamrup Metropolitan",
    "Karbi Anglong",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Sivasagar",
    "Sonitpur",
    "South Salmara-Mankachar",
    "Tinsukia",
    "Udalguri",
    "West Karbi Anglong"
  ],

  "Bihar": [
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran"
  ],

  "Chhattisgarh": [
    "Balod",
    "Baloda Bazar",
    "Balrampur",
    "Bastar",
    "Bemetara",
    "Bijapur",
    "Bilaspur",
    "Dantewada",
    "Dhamtari",
    "Durg",
    "Gariaband",
    "Gaurela-Pendra-Marwahi",
    "Janjgir-Champa",
    "Jashpur",
    "Kabirdham",
    "Kanker",
    "Khairagarh-Chhuikhadan-Gandai",
    "Kondagaon",
    "Korba",
    "Koriya",
    "Mahasamund",
    "Manendragarh-Chirmiri-Bharatpur",
    "Mohla-Manpur-Ambagarh Chowki",
    "Mungeli",
    "Narayanpur",
    "Raigarh",
    "Raipur",
    "Rajnandgaon",
    "Sakti",
    "Sarangarh-Bilaigarh",
    "Sukma",
    "Surajpur",
    "Surguja"
  ],

  "Goa": [
    "North Goa",
    "South Goa"
  ],

  "Gujarat": [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Aravalli",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Botad",
    "Chhota Udaipur",
    "Dahod",
    "Dang",
    "Devbhoomi Dwarka",
    "Gandhinagar",
    "Gir Somnath",
    "Jamnagar",
    "Junagadh",
    "Kheda",
    "Kutch",
    "Mahisagar",
    "Mehsana",
    "Morbi",
    "Narmada",
    "Navsari",
    "Panchmahal",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Sabarkantha",
    "Surat",
    "Surendranagar",
    "Tapi",
    "Vadodara",
    "Valsad"
  ],

  "Haryana": [
    "Ambala",
    "Bhiwani",
    "Charkhi Dadri",
    "Faridabad",
    "Fatehabad",
    "Gurugram",
    "Hisar",
    "Jhajjar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Mahendragarh",
    "Nuh",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamunanagar"
  ],

  "Himachal Pradesh": [
    "Bilaspur",
    "Chamba",
    "Hamirpur",
    "Kangra",
    "Kinnaur",
    "Kullu",
    "Lahaul and Spiti",
    "Mandi",
    "Shimla",
    "Sirmaur",
    "Solan",
    "Una"
  ],

  "Jharkhand": [
    "Bokaro",
    "Chatra",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "East Singhbhum",
    "Garhwa",
    "Giridih",
    "Godda",
    "Gumla",
    "Hazaribagh",
    "Jamtara",
    "Khunti",
    "Koderma",
    "Latehar",
    "Lohardaga",
    "Pakur",
    "Palamu",
    "Ramgarh",
    "Ranchi",
    "Sahibganj",
    "Seraikela Kharsawan",
    "Simdega",
    "West Singhbhum"
  ],

  "Karnataka": [
    "Bagalkot",
    "Ballari",
    "Belagavi",
    "Bengaluru Rural",
    "Bengaluru Urban",
    "Bidar",
    "Chamarajanagar",
    "Chikkaballapur",
    "Chikkamagaluru",
    "Chitradurga",
    "Dakshina Kannada",
    "Davanagere",
    "Dharwad",
    "Gadag",
    "Hassan",
    "Haveri",
    "Kalaburagi",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysuru",
    "Raichur",
    "Ramanagara",
    "Shivamogga",
    "Tumakuru",
    "Udupi",
    "Uttara Kannada",
    "Vijayapura",
    "Yadgir"
  ],

  "Kerala": [
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad"
  ],

  "Madhya Pradesh": [
    "Agar Malwa",
    "Alirajpur",
    "Anuppur",
    "Ashoknagar",
    "Balaghat",
    "Barwani",
    "Betul",
    "Bhind",
    "Bhopal",
    "Burhanpur",
    "Chhatarpur",
    "Chhindwara",
    "Damoh",
    "Datia",
    "Dewas",
    "Dhar",
    "Dindori",
    "Guna",
    "Gwalior",
    "Harda",
    "Hoshangabad",
    "Indore",
    "Jabalpur",
    "Jhabua",
    "Katni",
    "Khandwa",
    "Khargone",
    "Mandla",
    "Mandsaur",
    "Morena",
    "Narsinghpur",
    "Neemuch",
    "Panna",
    "Raisen",
    "Rajgarh",
    "Ratlam",
    "Rewa",
    "Sagar",
    "Satna",
    "Sehore",
    "Seoni",
    "Shahdol",
    "Shajapur",
    "Sheopur",
    "Shivpuri",
    "Sidhi",
    "Singrauli",
    "Tikamgarh",
    "Ujjain",
    "Umaria",
    "Vidisha"
  ],

  "Maharashtra": [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal"
  ],

  "Odisha": [
    "Angul",
    "Balangir",
    "Balasore",
    "Bargarh",
    "Bhadrak",
    "Boudh",
    "Cuttack",
    "Deogarh",
    "Dhenkanal",
    "Gajapati",
    "Ganjam",
    "Jagatsinghpur",
    "Jajpur",
    "Jharsuguda",
    "Kalahandi",
    "Kandhamal",
    "Kendrapara",
    "Kendujhar",
    "Khordha",
    "Koraput",
    "Malkangiri",
    "Mayurbhanj",
    "Nabarangpur",
    "Nayagarh",
    "Nuapada",
    "Puri",
    "Rayagada",
    "Sambalpur",
    "Subarnapur",
    "Sundargarh"
  ],

  "Punjab": [
    "Amritsar",
    "Barnala",
    "Bathinda",
    "Faridkot",
    "Fatehgarh Sahib",
    "Fazilka",
    "Ferozepur",
    "Gurdaspur",
    "Hoshiarpur",
    "Jalandhar",
    "Kapurthala",
    "Ludhiana",
    "Malerkotla",
    "Mansa",
    "Moga",
    "Pathankot",
    "Patiala",
    "Rupnagar",
    "Sangrur",
    "SAS Nagar",
    "Shaheed Bhagat Singh Nagar",
    "Sri Muktsar Sahib",
    "Tarn Taran"
  ],

  "Rajasthan": [
    "Ajmer",
    "Alwar",
    "Banswara",
    "Baran",
    "Barmer",
    "Bharatpur",
    "Bhilwara",
    "Bikaner",
    "Bundi",
    "Chittorgarh",
    "Churu",
    "Dausa",
    "Dholpur",
    "Dungarpur",
    "Hanumangarh",
    "Jaipur",
    "Jaisalmer",
    "Jalore",
    "Jhalawar",
    "Jhunjhunu",
    "Jodhpur",
    "Karauli",
    "Kota",
    "Nagaur",
    "Pali",
    "Pratapgarh",
    "Rajsamand",
    "Sawai Madhopur",
    "Sikar",
    "Sirohi",
    "Sri Ganganagar",
    "Tonk",
    "Udaipur"
  ],

  "Tamil Nadu": [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar"
  ],

  "Telangana": [
    "Adilabad",
    "Bhadradri Kothagudem",
    "Hyderabad",
    "Jagtial",
    "Jangaon",
    "Jayashankar Bhupalpally",
    "Jogulamba Gadwal",
    "Kamareddy",
    "Karimnagar",
    "Khammam",
    "Komaram Bheem",
    "Mahabubabad",
    "Mahbubnagar",
    "Mancherial",
    "Medak",
    "Medchal-Malkajgiri",
    "Mulugu",
    "Nagarkurnool",
    "Nalgonda",
    "Narayanpet",
    "Nirmal",
    "Nizamabad",
    "Peddapalli",
    "Rajanna Sircilla",
    "Rangareddy",
    "Sangareddy",
    "Siddipet",
    "Suryapet",
    "Vikarabad",
    "Wanaparthy",
    "Warangal",
    "Yadadri Bhuvanagiri"
  ],

  "Uttar Pradesh": [
    "Agra",
    "Aligarh",
    "Ambedkar Nagar",
    "Amethi",
    "Amroha",
    "Auraiya",
    "Ayodhya",
    "Azamgarh",
    "Baghpat",
    "Bahraich",
    "Ballia",
    "Balrampur",
    "Banda",
    "Barabanki",
    "Bareilly",
    "Basti",
    "Bhadohi",
    "Bijnor",
    "Budaun",
    "Bulandshahr",
    "Chandauli",
    "Chitrakoot",
    "Deoria",
    "Etah",
    "Etawah",
    "Farrukhabad",
    "Fatehpur",
    "Firozabad",
    "Gautam Buddha Nagar",
    "Ghaziabad",
    "Ghazipur",
    "Gonda",
    "Gorakhpur",
    "Hamirpur",
    "Hapur",
    "Hardoi",
    "Hathras",
    "Jalaun",
    "Jaunpur",
    "Jhansi",
    "Kannauj",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Kasganj",
    "Kaushambi",
    "Kushinagar",
    "Lakhimpur Kheri",
    "Lalitpur",
    "Lucknow",
    "Maharajganj",
    "Mahoba",
    "Mainpuri",
    "Mathura",
    "Mau",
    "Meerut",
    "Mirzapur",
    "Moradabad",
    "Muzaffarnagar",
    "Pilibhit",
    "Pratapgarh",
    "Prayagraj",
    "Raebareli",
    "Rampur",
    "Saharanpur",
    "Sambhal",
    "Sant Kabir Nagar",
    "Shahjahanpur",
    "Shamli",
    "Shravasti",
    "Siddharthnagar",
    "Sitapur",
    "Sonbhadra",
    "Sultanpur",
    "Unnao",
    "Varanasi"
  ],

  "Uttarakhand": [
    "Almora",
    "Bageshwar",
    "Chamoli",
    "Champawat",
    "Dehradun",
    "Haridwar",
    "Nainital",
    "Pauri Garhwal",
    "Pithoragarh",
    "Rudraprayag",
    "Tehri Garhwal",
    "Udham Singh Nagar",
    "Uttarkashi"
  ],

  "West Bengal": [
    "Alipurduar",
    "Bankura",
    "Paschim Bardhaman",
    "Purba Bardhaman",
    "Birbhum",
    "Cooch Behar",
    "Dakshin Dinajpur",
    "Darjeeling",
    "Hooghly",
    "Howrah",
    "Jalpaiguri",
    "Jhargram",
    "Kalimpong",
    "Kolkata",
    "Maldah",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "South 24 Parganas",
    "Paschim Medinipur",
    "Purba Medinipur",
    "Uttar Dinajpur"
  ]
};


/* ================= HELPERS ================= */

function $(id) {
  return document.getElementById(id);
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resume));
}

function load() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) return;

  try {
    const data = JSON.parse(saved);

    Object.assign(resume.personal, data.personal || {});

    resume.summary = data.summary || "";

    resume.experience = data.experience || [];
    resume.education = data.education || [];
    resume.projects = data.projects || [];
    resume.skills = data.skills || [];
    resume.certifications = data.certifications || [];
    resume.languages = data.languages || [];

    resume.photo = data.photo || "";

    Object.assign(
      resume.settings,
      data.settings || {}
    );

  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}


/* ================= PERSONAL ================= */

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

  $(id).addEventListener("input", () => {

    resume.personal[id] = $(id).value;

    if (id === "state") {
      updateDistricts();
    }

    save();
    updatePreview();
  });

  $(id).addEventListener("change", () => {

    resume.personal[id] = $(id).value;

    if (id === "state") {
      updateDistricts();
    }

    save();
    updatePreview();
  });
});


$("summary").addEventListener("input", e => {
  resume.summary = e.target.value;
  save();
  updatePreview();
});


/* ================= COUNTRY / STATE / DISTRICT ================= */

$("country").addEventListener("change", () => {

  resume.personal.country = $("country").value;

  if ($("country").value === "India") {
    populateStates();
  } else {
    $("state").innerHTML =
      `<option value="">Select state / province</option>`;

    $("district").innerHTML =
      `<option value="">Select district</option>`;
  }

  resume.personal.state = "";
  resume.personal.district = "";

  save();
  updatePreview();
});


function populateStates() {

  const stateSelect = $("state");

  stateSelect.innerHTML =
    `<option value="">Select state / province</option>`;

  Object.keys(indiaStates)
    .sort()
    .forEach(state => {

      const option = document.createElement("option");

      option.value = state;
      option.textContent = state;

      stateSelect.appendChild(option);
    });

  stateSelect.value = resume.personal.state || "";

  updateDistricts();
}


function updateDistricts() {

  const districtSelect = $("district");

  districtSelect.innerHTML =
    `<option value="">Select district</option>`;

  const state = $("state").value;

  if (!state || !indiaStates[state]) {
    return;
  }

  indiaStates[state]
    .sort()
    .forEach(district => {

      const option = document.createElement("option");

      option.value = district;
      option.textContent = district;

      districtSelect.appendChild(option);
    });

  districtSelect.value =
    resume.personal.district || "";

  resume.personal.state = state;
}


/* ================= DYNAMIC FORM ================= */

function createDynamicItem(type, index, data = {}) {

  const item = document.createElement("div");

  item.className = "dynamic-item";

  if (type === "experience") {

    item.innerHTML = `
      <button type="button" class="remove-btn">
        Remove
      </button>

      <div class="dynamic-item-grid">

        <div class="field">
          <label>Job Title</label>
          <input data-field="jobTitle" value="${escapeHTML(data.jobTitle)}">
        </div>

        <div class="field">
          <label>Company</label>
          <input data-field="company" value="${escapeHTML(data.company)}">
        </div>

        <div class="field">
          <label>Employment Type</label>
          <select data-field="employmentType">
            <option value="">Select employment type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
            <option>Contract</option>
            <option>Freelance</option>
          </select>
        </div>

        <div class="field">
          <label>Location</label>
          <input data-field="location" value="${escapeHTML(data.location)}">
        </div>

        <div class="field">
          <label>Start Date</label>
          <input type="month" data-field="start" value="${escapeHTML(data.start)}">
        </div>

        <div class="field">
          <label>End Date</label>
          <input type="month" data-field="end" value="${escapeHTML(data.end)}">
        </div>

        <div class="field full">
          <label>Description</label>
          <textarea data-field="description">${escapeHTML(data.description)}</textarea>
        </div>

      </div>
    `;
  }


  if (type === "education") {

    item.innerHTML = `
      <button type="button" class="remove-btn">
        Remove
      </button>

      <div class="dynamic-item-grid">

        <div class="field">
          <label>Degree</label>
          <select data-field="degree">
            <option value="">Select degree</option>
            <option>High School</option>
            <option>Diploma</option>
            <option>Associate Degree</option>
            <option>Bachelor's Degree</option>
            <option>Master's Degree</option>
            <option>Doctorate</option>
            <option>Other</option>
          </select>
        </div>

        <div class="field">
          <label>Field of Study</label>
          <input data-field="field" value="${escapeHTML(data.field)}">
        </div>

        <div class="field">
          <label>Institution</label>
          <input data-field="institution" value="${escapeHTML(data.institution)}">
        </div>

        <div class="field">
          <label>Location</label>
          <input data-field="location" value="${escapeHTML(data.location)}">
        </div>

        <div class="field">
          <label>Start Date</label>
          <input type="month" data-field="start" value="${escapeHTML(data.start)}">
        </div>

        <div class="field">
          <label>End Date</label>
          <input type="month" data-field="end" value="${escapeHTML(data.end)}">
        </div>

        <div class="field full">
          <label>Additional Details</label>
          <textarea data-field="description">${escapeHTML(data.description)}</textarea>
        </div>

      </div>
    `;
  }


  if (type === "project") {

    item.innerHTML = `
      <button type="button" class="remove-btn">
        Remove
      </button>

      <div class="dynamic-item-grid">

        <div class="field">
          <label>Project Name</label>
          <input data-field="name" value="${escapeHTML(data.name)}">
        </div>

        <div class="field">
          <label>Project Link</label>
          <input data-field="link" value="${escapeHTML(data.link)}">
        </div>

        <div class="field full">
          <label>Description</label>
          <textarea data-field="description">${escapeHTML(data.description)}</textarea>
        </div>

      </div>
    `;
  }


  if (type === "certification") {

    item.innerHTML = `
      <button type="button" class="remove-btn">
        Remove
      </button>

      <div class="dynamic-item-grid">

        <div class="field">
          <label>Certification Name</label>
          <input data-field="name" value="${escapeHTML(data.name)}">
        </div>

        <div class="field">
          <label>Issuing Organization</label>
          <input data-field="organization" value="${escapeHTML(data.organization)}">
        </div>

        <div class="field">
          <label>Issue Date</label>
          <input type="month" data-field="date" value="${escapeHTML(data.date)}">
        </div>

      </div>
    `;
  }


  if (type === "language") {

    item.innerHTML = `
      <button type="button" class="remove-btn">
        Remove
      </button>

      <div class="dynamic-item-grid">

        <div class="field">
          <label>Language</label>
          <input data-field="language" value="${escapeHTML(data.language)}">
        </div>

        <div class="field">
          <label>Proficiency</label>
          <select data-field="proficiency">
            <option value="">Select proficiency</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Fluent</option>
            <option>Native</option>
          </select>
        </div>

      </div>
    `;
  }


  item.dataset.index = index;

  item.querySelectorAll("[data-field]").forEach(input => {

    const field = input.dataset.field;

    if (
      input.tagName === "SELECT" &&
      data[field]
    ) {
      input.value = data[field];
    }

    input.addEventListener("input", () => {

      updateDynamicData(type, index, field, input.value);

    });

    input.addEventListener("change", () => {

      updateDynamicData(type, index, field, input.value);

    });

  });


  item.querySelector(".remove-btn").addEventListener("click", () => {

    resume[type] = resume[type].filter(
      (_, i) => i !== index
    );

    renderDynamic(type);
    save();
    updatePreview();

  });


  return item;
}


function updateDynamicData(type, index, field, value) {

  if (!resume[type][index]) return;

  resume[type][index][field] = value;

  save();
  updatePreview();
}


function renderDynamic(type) {

  const map = {
    experience: "experienceList",
    education: "educationList",
    project: "projectList",
    certification: "certificationList",
    language: "languageList"
  };

  const container = $(map[type]);

  container.innerHTML = "";

  if (!resume[type].length) {

    container.innerHTML =
      `<div class="empty-message">No entries added.</div>`;

    return;
  }

  resume[type].forEach((item, index) => {

    container.appendChild(
      createDynamicItem(type, index, item)
    );

  });
}


/* ================= ADD BUTTONS ================= */

$("addExperience").addEventListener("click", () => {

  resume.experience.push({
    jobTitle: "",
    company: "",
    employmentType: "",
    location: "",
    start: "",
    end: "",
    description: ""
  });

  renderDynamic("experience");
  save();
});


$("addEducation").addEventListener("click", () => {

  resume.education.push({
    degree: "",
    field: "",
    institution: "",
    location: "",
    start: "",
    end: "",
    description: ""
  });

  renderDynamic("education");
  save();
});


$("addProject").addEventListener("click", () => {

  resume.projects.push({
    name: "",
    link: "",
    description: ""
  });

  renderDynamic("project");
  save();
});


$("addCertification").addEventListener("click", () => {

  resume.certifications.push({
    name: "",
    organization: "",
    date: ""
  });

  renderDynamic("certification");
  save();
});


$("addLanguage").addEventListener("click", () => {

  resume.languages.push({
    language: "",
    proficiency: ""
  });

  renderDynamic("language");
  save();
});


/* ================= SKILLS ================= */

$("addSkill").addEventListener("click", addSkill);

$("skillInput").addEventListener("keydown", e => {

  if (e.key === "Enter") {
    e.preventDefault();
    addSkill();
  }

});


function addSkill() {

  const value = $("skillInput").value.trim();

  if (!value) return;

  resume.skills.push(value);

  $("skillInput").value = "";

  renderSkills();
  save();
  updatePreview();
}


function renderSkills() {

  const container = $("skillList");

  container.innerHTML = "";

  resume.skills.forEach((skill, index) => {

    const tag = document.createElement("div");

    tag.className = "skill-tag";

    tag.innerHTML = `
      <span>${escapeHTML(skill)}</span>
      <button type="button">×</button>
    `;

    tag.querySelector("button").addEventListener("click", () => {

      resume.skills.splice(index, 1);

      renderSkills();
      save();
      updatePreview();

    });

    container.appendChild(tag);
  });
}


/* ================= PHOTO ================= */

$("photo").addEventListener("change", e => {

  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {

    resume.photo = reader.result;

    save();
    updatePreview();

  };

  reader.readAsDataURL(file);
});


/* ================= PREVIEW ================= */

function updatePreview() {

  const p = resume.personal;

  $("previewName").textContent = p.name;
  $("previewTitle").textContent = p.title;

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
  if (p.linkedin) contact.push(p.linkedin);
  if (p.github) contact.push(p.github);

  $("previewContact").innerHTML =
    contact
      .map(value => `<span>${escapeHTML(value)}</span>`)
      .join("");


  $("previewSummary").textContent =
    resume.summary;

  toggleSection(
    "previewSummarySection",
    !!resume.summary.trim()
  );


  renderExperiencePreview();
  renderEducationPreview();
  renderProjectPreview();
  renderCertificationPreview();
  renderLanguagePreview();


  $("previewSkills").innerHTML =
    resume.skills
      .map(skill =>
        `<span class="resume-skill">${escapeHTML(skill)}</span>`
      )
      .join("");

  toggleSection(
    "previewSkillsSection",
    resume.skills.length > 0
  );


  const photo = $("previewPhoto");

  if (resume.photo) {

    photo.src = resume.photo;
    photo.classList.add("has-photo");

  } else {

    photo.removeAttribute("src");
    photo.classList.remove("has-photo");

  }


  $("resumePreview").className =
    `resume-page ${resume.settings.template}`;

  $("resumePreview").style
    .setProperty(
      "--resume-accent",
      resume.settings.accent
    );
}


function toggleSection(id, show) {

  $(id).style.display =
    show ? "block" : "none";
}


/* ================= PREVIEW ENTRIES ================= */

function renderExperiencePreview() {

  const container = $("previewExperience");

  container.innerHTML = "";

  resume.experience.forEach(item => {

    if (
      !item.jobTitle &&
      !item.company &&
      !item.description
    ) return;

    container.innerHTML += `
      <div class="resume-entry">

        <div class="entry-top">

          <div>
            <div class="entry-title">
              ${escapeHTML(item.jobTitle)}
            </div>

            <div class="entry-subtitle">
              ${escapeHTML(item.company)}
              ${item.location ? " · " + escapeHTML(item.location) : ""}
            </div>
          </div>

          <div class="entry-date">
            ${formatDateRange(item.start, item.end)}
          </div>

        </div>

        <div class="entry-description">
          ${formatText(item.description)}
        </div>

      </div>
    `;
  });

  toggleSection(
    "previewExperienceSection",
    container.innerHTML.trim() !== ""
  );
}


function renderEducationPreview() {

  const container = $("previewEducation");

  container.innerHTML = "";

  resume.education.forEach(item => {

    if (
      !item.degree &&
      !item.field &&
      !item.institution
    ) return;

    container.innerHTML += `
      <div class="resume-entry">

        <div class="entry-top">

          <div>

            <div class="entry-title">
              ${escapeHTML(
                [item.degree, item.field]
                  .filter(Boolean)
                  .join(" — ")
              )}
            </div>

            <div class="entry-subtitle">
              ${escapeHTML(item.institution)}
              ${item.location ? " · " + escapeHTML(item.location) : ""}
            </div>

          </div>

          <div class="entry-date">
            ${formatDateRange(item.start, item.end)}
          </div>

        </div>

        <div class="entry-description">
          ${formatText(item.description)}
        </div>

      </div>
    `;
  });

  toggleSection(
    "previewEducationSection",
    container.innerHTML.trim() !== ""
  );
}


function renderProjectPreview() {

  const container = $("previewProjects");

  container.innerHTML = "";

  resume.projects.forEach(item => {

    if (!item.name && !item.description) return;

    container.innerHTML += `
      <div class="resume-entry">

        <div class="entry-title">
          ${escapeHTML(item.name)}
        </div>

        <div class="entry-description">
          ${formatText(item.description)}
        </div>

      </div>
    `;
  });

  toggleSection(
    "previewProjectsSection",
    container.innerHTML.trim() !== ""
  );
}


function renderCertificationPreview() {

  const container = $("previewCertifications");

  container.innerHTML = "";

  resume.certifications.forEach(item => {

    if (!item.name && !item.organization) return;

    container.innerHTML += `
      <div class="resume-entry">

        <div class="entry-top">

          <div>

            <div class="entry-title">
              ${escapeHTML(item.name)}
            </div>

            <div class="entry-subtitle">
              ${escapeHTML(item.organization)}
            </div>

          </div>

          <div class="entry-date">
            ${formatMonth(item.date)}
          </div>

        </div>

      </div>
    `;
  });

  toggleSection(
    "previewCertificationSection",
    container.innerHTML.trim() !== ""
  );
}


function renderLanguagePreview() {

  const container = $("previewLanguages");

  container.innerHTML = "";

  resume.languages.forEach(item => {

    if (!item.language) return;

    container.innerHTML += `
      <div class="resume-entry">

        <div class="entry-top">

          <div class="entry-title">
            ${escapeHTML(item.language)}
          </div>

          <div class="entry-date">
            ${escapeHTML(item.proficiency)}
          </div>

        </div>

      </div>
    `;
  });

  toggleSection(
    "previewLanguageSection",
    container.innerHTML.trim() !== ""
  );
}


/* ================= DATE ================= */

function formatMonth(value) {

  if (!value) return "";

  const [year, month] = value.split("-");

  const date = new Date(
    Number(year),
    Number(month) - 1
  );

  return date.toLocaleDateString(
    "en-US",
    {
      month: "short",
      year: "numeric"
    }
  );
}


function formatDateRange(start, end) {

  if (!start && !end) return "";

  const startText = formatMonth(start);
  const endText = end
    ? formatMonth(end)
    : "Present";

  if (!startText) return endText;

  return `${startText} – ${endText}`;
}


function formatText(text) {

  if (!text) return "";

  return escapeHTML(text)
    .split("\n")
    .filter(line => line.trim())
    .map(line => `<p>${line}</p>`)
    .join("");
}


/* ================= SETTINGS ================= */

$("templateSelect").addEventListener("change", e => {

  resume.settings.template =
    e.target.value;

  save();
  updatePreview();
});


$("accentColor").addEventListener("input", e => {

  resume.settings.accent =
    e.target.value;

  save();
  updatePreview();
});


$("themeBtn").addEventListener("click", () => {

  resume.settings.theme =
    resume.settings.theme === "dark"
      ? "light"
      : "dark";

  applyTheme();

  save();
});


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


/* ================= CLEAR ================= */

$("clearBtn").addEventListener("click", () => {

  const confirmed =
    confirm("Clear all resume information?");

  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);

  location.reload();
});


/* ================= PDF ================= */

$("downloadBtn").addEventListener("click", () => {

  window.print();

});


/* ================= INITIALIZE ================= */

load();

personalFields.forEach(id => {

  $(id).value =
    resume.personal[id] || "";

});

$("summary").value =
  resume.summary || "";

$("accentColor").value =
  resume.settings.accent;

$("templateSelect").value =
  resume.settings.template;

if (resume.personal.country === "India") {
  populateStates();
}

renderDynamic("experience");
renderDynamic("education");
renderDynamic("project");
renderDynamic("certification");
renderDynamic("language");

renderSkills();

applyTheme();

updatePreview();

/**
 * General site configuration & editable parameters.
 * Placeholders are marked with TODO comments for honesty and transparency.
 */
export const siteConfig = {
  clubName: "Eco Club",
  collegeName: "ABES Engineering College",
  locationShort: "Ghaziabad, Uttar Pradesh",
  tagline: "THINK · ACT · CODE · WORK GREENER",
  mottoKeywords: ["Think", "Act", "Code", "Work Greener"],
  rotatingTypewriter: [
    "Save. Protect. Solve.",
    "Think · Act · Code · Work Greener.",
    "Bridging Nature with Technology.",
    "Engineered for a Greener Tomorrow."
  ],
  
  // Registration and Forms Backend
  // TODO: Replace with real Google Form URL or API webhook when deployed
  googleFormJoinUrl: "https://forms.google.com/sample-abes-ecoclub-join",
  googleFormEventUrl: "https://forms.google.com/sample-abes-ecoclub-event",
  isDemoMode: true, // Prompts user that form submissions are in demo mode

  // Contact Info
  contact: {
    email: "ecoclub@abes.ac.in", // TODO: confirm official club email with Tech Head
    phone: "+91 120 713 5112", // TODO: confirm dedicated desk/helpline phone number
    address: "ABES Engineering College, 19th KM Stone, NH-24, Ghaziabad, Uttar Pradesh 201009",
    campusLocation: "Tech & Innovation Block / Student Activity Center", // TODO: confirm exact room/cabin
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.996537722748!2d77.44498337550073!3d28.63048997566497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee22c60837b7%3A0x7c35343ecd5d82b!2sABES%20Engineering%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapDirectLink: "https://maps.app.goo.gl/9R68k1QvWvBfLz5M8"
  },

  // Footer & Credits
  // TODO: confirm exact footer wording with the Tech Head
  footerCredits: "Made with 💚 by the Eco Club Tech & Project Division",
  copyrightYear: 2026
};

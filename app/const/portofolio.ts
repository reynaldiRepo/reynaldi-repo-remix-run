export interface PortofolioItem {
  title: string;
  platform: string[];
  imageThumb: string;
  description: string;
  url: string;
  images: string[];
  isConfidential: boolean;
}

export const PortofolioList: PortofolioItem[] = [
  {
    title: "Xavier Marks Realty",
    description:
      "Real Estate Agency Website serves as a platform for agents to showcase the properties they market. Agents can also view transaction reports, the total value of commissions they receive, plan open houses, and create purchase agreements. Agents can also undergo training on this website, and it is also used by agency owners to screen potential agents. For buyers, they can search for properties that match their criteria, type, and real-time location, as well as communicate with the agents.",
    platform: ["Website"],
    imageThumb:
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/XMARKS/xmarks-1.png",
    images: [
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/XMARKS/xmarks-1.png",
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/XMARKS/xmarks-2.png",
    ],
    isConfidential: false,
    url: "https://xaviermarks.com/",
  },
  {
    title: "XMART - XMarks Real Estate Tec",
    description:
      "Xaviermarks Real Estate Agency mobile application serves as a platform for agents to showcase the properties they market. Agents can also view transaction reports, the total value of commissions they receive, plan open houses, and create purchase agreements. Agents can also undergo training on this mobile application, and it is also used by agency owners to screen potential agents. For buyers, they can search for properties that match their criteria, type, and real-time location, as well as communicate with the agents.",
    platform: ["Mobile Apps"],
    imageThumb:
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/XMART/xmart.png",
    images: [
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/XMART/xmart.png",
    ],
    isConfidential: false,
    url: "https://play.google.com/store/apps/details?id=com.xaviermarks&hl=en_US",
  },
  {
    title: "CT Logsheet",
    description:
      "CT Logsheet is an application for recording various operational activities, such as recording electricity meters, voltage, engine heat, water meters, and many other things.",
    platform: ["Mobile Apps"],
    imageThumb:
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/LOGSHEET/logsheet.png",
    images: [
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/LOGSHEET/logsheet.png",
    ],
    isConfidential: false,
    url: "https://play.google.com/store/apps/details?id=com.ct.logsheet",
  },
  {
    title: "TAC - Tap & Connect",
    description:
      "TAC is an application for a landing page that references social media and links through Smart Badge, Link & QR code. TAC creates a new experience in exchanging contacts, social media, links, and more. Just one 'tap' with Smart Badge is all it takes.",
    platform: ["Mobile Apps"],
    imageThumb:
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/TAC/tac.png",
    images: [
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/TAC/tac.png",
    ],
    isConfidential: false,
    url: "https://play.google.com/store/apps/details?id=sk.tac.indonesia&hl=id&gl=US",
  },
  {
    title: "MCRCNN Face Mask Detection",
    description:
      "[AI] Computer Vision Model for Mask Detection. This model is built using the Multi-Context Regional Convolutional Neural Network method. The model can accurately detect three scenarios: wearing a mask correctly, wearing a mask incorrectly, and not wearing a mask at all. The model achieves an accuracy score of 88%.",
    platform: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
    ],
    imageThumb:
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/MCRCNN/MCRCNN-1.png",
    images: [
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/MCRCNN/MCRCNN-1.png",
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/MCRCNN/MCRCNN-2.png",
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/MCRCNN/MCRCNN-3.png",
    ],
    isConfidential: false,
    url: "https://github.com/reynaldiRepo/MCRCNN_FaceMaskDetection",
  },
  {
    title: "Teachable Machine",
    description:
      "Like what is done by Google's Teachable Machine, this application can do the same thing. Users can input training data instantly through the website interface. The training image data will be sent via a WebSocket connection to the server, which will then train those images using the CNN method. After the server completes the training, users can perform testing by sending testing files or in real-time using video captured through a webcam.",
    platform: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
    ],
    imageThumb:
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/TEACHABLE-MACHINE/TEACHABLE-MACHINE-1.png",
    images: [
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/TEACHABLE-MACHINE/TEACHABLE-MACHINE-1.png",
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/TEACHABLE-MACHINE/TEACHABLE-MACHINE-2.png",
    ],
    isConfidential: false,
    url: "https://github.com/reynaldiRepo/Teachable-machine/tree/master/teachable",
  },
  {
    title: "Digital Orthodontic College",
    description:
      "An online course website for dentists, this website has the uniqueness of numerous integrations such as Salesforce, Mailchimp, Talent LMS, Payway Payment, Slack, and Zoom, which support the learning activities of dentists.",
    platform: ["Website"],
    imageThumb:
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/DIGITALORTHO/BOSS-1.png",
    images: [
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/DIGITALORTHO/BOSS-1.png",
    ],
    isConfidential: false,
    url: "https://digitalorthodonticcollege.com/",
  },
  {
    title: "Energeticlighting",
    description:
      "A marketing website for an electronic goods sales company, where this website has a Loyalty Reward Program feature for members and resellers.",
    platform: ["Website"],
    imageThumb:
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/ENERGETIC/ENERGETIC.png",
    images: [
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/ENERGETIC/ENERGETIC.png",
    ],
    isConfidential: false,
    url: "https://energeticlighting.com.au/",
  },
  {
    title: "Workflomanager",
    description:
      "A Project Management application, which is not limited to project management but also includes time tracking, CRM, quoting, and invoicing. This application is also integrated with external Accounting applications such as QuickBooks.",
    platform: ["Website"],
    imageThumb:
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/WF/WF-1.png",
    images: [
      "https://storage.googleapis.com/private-reynaldi.appspot.com/REYNALDI-PORTO/WF/WF-1.png",
    ],
    isConfidential: true,
    url: "",
  },
];

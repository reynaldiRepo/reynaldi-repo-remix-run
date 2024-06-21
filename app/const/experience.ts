import picturaIcon from "~/assets/work/pic.svg";
import ctIcon from "~/assets/work/ct.png";
import utmIcon from "~/assets/work/utm.png";
import gameloftIcon from "~/assets/work/gameloft.png";
import cofounderieIcon from "~/assets/work/cofounderie.svg";

import phpIcon from "~/assets/skill/4.php.png";
import jsIcon from "~/assets/skill/1.js.png";
import tsIcon from "~/assets/skill/2.typescript.png";
import nodeJsIcon from "~/assets/skill/3.node-js.png";
import mysqlIcon from "~/assets/skill/8.mysql.png";
import reactIcon from "~/assets/skill/react.webp";
import flutterIcon from "~/assets/skill/7.flutter.png";
import pythonIcon from "~/assets/skill/5.python.png";
import cPlusPlusIcon from "~/assets/skill/13.c++.png";
import silverstripeIcon from "~/assets/skill/silverstripe.png";
import wordpressIcon from "~/assets/skill/wp.png";
import laravelIcon from "~/assets/skill/laravel.png";
import symphonyIcon from "~/assets/skill/symfony.png";
import tensorIcon from "~/assets/skill/tensorflow.png";
import kerasIcon from "~/assets/skill/keras.png";
import dockerIcon from "~/assets/skill/docker.png";
import nestJsIcon from "~/assets/skill/nest-js.png";
import nextKsIcon from "~/assets/skill/next-js.png";
import postgresIcon from "~/assets/skill/postgres.png";
import mongoIcon from "~/assets/skill/mongo.svg";
import firebaseIcon from "~/assets/skill/firebase.png";

export interface ExperienceData {
  title: string;
  icon: string;
  location: string;
  company: string;
  companyURL: string;
  fromTo: string;
  jobDesc: string[];
  stack: string[];
}

export const ExperiencesList: ExperienceData[] = [
  {
    title: "Sr. Full Stack Developer",
    company: "Cofounderie",
    companyURL: "https://www.cofounderie.com/",
    icon: cofounderieIcon,
    location: "London, England, United Kingdom · Remote ",
    fromTo: "Aug 2023 to Present",
    stack: [
      jsIcon,
      tsIcon,
      reactIcon,
      nodeJsIcon,
      flutterIcon,
      nestJsIcon,
      nextKsIcon,
      postgresIcon,
      mongoIcon,
      dockerIcon,
      firebaseIcon,
    ],
    jobDesc: [
      "Develop custom web applications using React within the Next.js or Remix framework.",
      "Create microservices to meet client requirements for scalable systems.",
      "Configure infrastructure according to client needs.",
      "Coordinate the team for sprint planning and address any technical requirements.",
      "Act as a liaison between the technical team and stakeholders.",
      "Integrate with Large Language Models (LLMs) for client application needs.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Pictura Creative",
    companyURL: "https://picturacreative.com.au/",
    icon: picturaIcon,
    location: "NSW, Australia · Remote ",
    fromTo: "November 2021 to Aug 2023",
    stack: [
      jsIcon,
      tsIcon,
      reactIcon,
      phpIcon,
      nodeJsIcon,
      mysqlIcon,
      symphonyIcon,
      laravelIcon,
      wordpressIcon,
    ],
    jobDesc: [
      "Building custom web applications according to client needs.",
      "Estimating the project's work time.",
      "Writing project documentation for team and client requirements.",
      "Performing internal application development and maintenance.",
      "Assisting the WordPress Development Division with custom code or custom plugin requirements.",
      "Configuring server infrastructure based on client needs.",
      "Handling application deployment.",
    ],
  },
  {
    title: "Full Stack Developer",
    location: "Surabaya, Indonesia",
    company: "Crosstechno",
    companyURL: "https://crosstechno.com/",
    fromTo: "May 2020 to November 2021",
    icon: ctIcon,
    jobDesc: [
      "Building custom web applications and mobile apps according to client needs.",
      "Writing project documentation for team and client requirements.",
      "Performing internal application development and maintenance.",
      "Configuring server infrastructure based on client needs.",
      "Handling application deployment.",
    ],
    stack: [
      phpIcon,
      jsIcon,
      reactIcon,
      flutterIcon,
      nodeJsIcon,
      mysqlIcon,
      silverstripeIcon,
      laravelIcon,
    ],
  },
  {
    title: "Machine Learning Researcher",
    location: "Bangkalan, Indonesia",
    company: "University of Trunojoyo Madura",
    companyURL: "https://www.trunojoyo.ac.id/",
    fromTo: "May 2021 to November 2021",
    icon: utmIcon,
    jobDesc: [
      "Conducting research on deep learning algorithms in the field of computer vision.",
      "Creating applications that incorporate deep learning algorithms.",
    ],
    stack: [pythonIcon, tensorIcon, kerasIcon],
  },
  {
    title: "C++ Programmer Internship",
    location: "Yogyakarta, Indonesia",
    company: "Gameloft Indonesia",
    companyURL: "https://www.gameloft.com/gameloft-studios/yogyakarta",
    fromTo: "January 2020 to April 2020",
    icon: gameloftIcon,
    jobDesc: [
      "Participating in an internship program for a C++ programmer position at Gameloft Indonesia.",
      "Performing C++ programming for game application development needs, primarily focusing on the conversion process of 3D design results into game engines.",
      "Developing a web application for HR analytical tools.",
    ],
    stack: [cPlusPlusIcon],
  },
];

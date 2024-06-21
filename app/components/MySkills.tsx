import { Box, Center, Container, Heading, Text } from "@chakra-ui/layout";
import problemSolvingIcon from "~/assets/idea.png";
import cleanCodeIcon from "~/assets/coding.png";
import creativeIcon from "~/assets/creativity.png";
import { Image } from "@chakra-ui/image";
import { Fragment } from "react";
import jsICON from "~/assets/skill/1.js.png";
import tsICON from "~/assets/skill/2.typescript.png";
import nodeICON from "~/assets/skill/3.node-js.png";
import phpICON from "~/assets/skill/4.php.png";
import pythonICON from "~/assets/skill/5.python.png";
import javaICON from "~/assets/skill/6.java.png";
import flutterICON from "~/assets/skill/7.flutter.png";
import mysqlICON from "~/assets/skill/8.mysql.png";
import postgresICON from "~/assets/skill/9.postgresql.png";
import mongoICON from "~/assets/skill/10.mongo.png";
import firebaseICON from "~/assets/skill/11.firebase.png";
import gcpICON from "~/assets/skill/12.gcp.png";
import Slider from "react-slick";
import dockerIcon from "~/assets/skill/docker.png";
import nestJsIcon from "~/assets/skill/nest-js.png";
import nextKsIcon from "~/assets/skill/next-js.png";
import { Tooltip, useMediaQuery } from "@chakra-ui/react";
import { useHydrated } from "remix-utils";

interface MainSkillItem {
  icon: string;
  title: string;
  description: string;
}

interface TechSkill {
  icon: string;
  text: string;
}

const techSkills: TechSkill[] = [
  {
    icon: jsICON,
    text: "Javascript",
  },
  {
    icon: tsICON,
    text: "Typescript",
  },
  {
    icon: nodeICON,
    text: "Node JS",
  },
  {
    icon: phpICON,
    text: "PHP",
  },
  {
    icon: nestJsIcon,
    text: "Nest JS",
  },
  {
    icon: nextKsIcon,
    text: "Next JS",
  },
  {
    icon: mongoICON,
    text: "Mongo DB",
  },
  {
    icon: dockerIcon,
    text: "Docker",
  },
  {
    icon: pythonICON,
    text: "Python",
  },
  {
    icon: javaICON,
    text: "Java",
  },
  {
    icon: flutterICON,
    text: "Flutter",
  },
  {
    icon: mysqlICON,
    text: "MySQL",
  },
  {
    icon: postgresICON,
    text: "PostgreSQL",
  },
  {
    icon: firebaseICON,
    text: "Firebase",
  },
  {
    icon: gcpICON,
    text: "Google Cloud Platform",
  },
];

function MainSkillCard(props: { MainSkill: MainSkillItem }) {
  return (
    <Box
      w={"300px"}
      maxW={"full"}
      minH={"276px"}
      bg={"yellow.400"}
      shadow={"base"}
      py={"30px"}
      px={"20px"}
      borderRadius={"base"}
    >
      <Center mb={"6"}>
        <Image src={props.MainSkill.icon} w={"60px"} />
      </Center>
      <Text
        textAlign={"center"}
        fontSize={"xl"}
        fontWeight={"semibold"}
        textTransform={"uppercase"}
        mb={"4"}
      >
        {props.MainSkill.title}
      </Text>
      <Text textAlign={"center"} fontSize={"sm"}>
        {props.MainSkill.description}
      </Text>
    </Box>
  );
}

export default function MySkills() {
  const [isSmallerThan1020] = useMediaQuery("(max-width: 1020px)");
  const [isSmallerThan975] = useMediaQuery("(max-width: 975px)");
  const hydrated = useHydrated();
  const mainSkillItems: MainSkillItem[] = [
    {
      icon: problemSolvingIcon,
      title: "Problem Solving",
      description:
        "Analytical thinker, adept at breaking down complex problems for effective solutions.",
    },
    {
      icon: creativeIcon,
      title: "Creative Approach",
      description:
        "Fresh perspective, user-centric mindset for innovative solutions that captivate and deliver exceptional experiences.",
    },
    {
      icon: cleanCodeIcon,
      title: "Clean Code",
      description:
        "Prioritize maintainable, scalable code that is readable and efficient.",
    },
  ];

  return (
    <Fragment>
      <Box w={"full"} bg={"#F5F5F5"}>
        <Container maxW={"5xl"} py={isSmallerThan1020 ? "16" : "20"}>
          <Box mb={"8"} display={"flex"} justifyContent={"center"}>
            <Heading textTransform={"uppercase"} color={"yellow.400"}>
              Skills and Abilities
            </Heading>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={5}
          >
            {mainSkillItems.map((skill, idx) => {
              return <MainSkillCard MainSkill={skill} key={idx} />;
            })}
          </Box>
          <Box mt={10} mx={"auto"} maxW={isSmallerThan975 ? "700px" : "900px"}>
            {hydrated ? (
              <Slider
                dots={false}
                infinite
                speed={800}
                slidesToShow={9}
                slidesToScroll={1}
                centerMode={true}
                focusOnSelect={false}
                autoplay
                autoplaySpeed={1500}
                arrows={false}
                accessibility={false}
                responsive={[
                  {
                    breakpoint: 1020,
                    settings: {
                      slidesToShow: 7,
                      slidesToScroll: 1,
                    },
                  },
                  {
                    breakpoint: 756,
                    settings: {
                      slidesToShow: 6,
                      slidesToScroll: 1,
                    },
                  },
                  {
                    breakpoint: 575,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1,
                    },
                  },
                  {
                    breakpoint: 425,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                    },
                  },
                ]}
              >
                {techSkills.map((t, idx) => {
                  return (
                    <Tooltip label={t.text} fontSize="xs" key={idx}>
                      <Box
                        key={idx}
                        display={"flex"}
                        alignItems={"center"}
                        h={"60px"}
                        title={t.text}
                        cursor={"grab"}
                      >
                        <Box
                          h={"full"}
                          w={"full"}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <Image src={t.icon} w={"60px"} h={"auto"} />
                        </Box>
                      </Box>
                    </Tooltip>
                  );
                })}
              </Slider>
            ) : null}
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
}

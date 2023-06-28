import { Fragment, RefObject, useRef } from "react";
import Header, { MenuItem } from "~/components/Header";
import Hero from "~/components/Hero";
import AboutMe from "~/components/AboutMe";
import { Box } from "@chakra-ui/layout";
import MySkills from "~/components/MySkills";
import MyExperience from "~/components/MyExperience";
import Portofolio from "~/components/Portofolio";
import Footer from "~/components/Footer";
import Contact from "~/components/Contact";
import { useHydrated } from "remix-utils";

export default function Home(){
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const mySkillRef = useRef<HTMLDivElement>(null);
    const expRef = useRef<HTMLDivElement>(null);
    const portoRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const hydrated = useHydrated();

    const scrollToFunc = (ref: RefObject<HTMLDivElement>) => {
        let topOffset = 0;
        if (ref.current){
            topOffset = ref.current.offsetTop - 20;
        }
        if (hydrated){
            window.scrollTo({
                left:0,
                top: topOffset,
                behavior:"smooth"
            })
        }
    }

    const menuItems: MenuItem[] = [
        {
            text: "About Me",
            action:() => scrollToFunc(aboutMeRef)
        },
        {
            text: "Skills",
            action:() => scrollToFunc(mySkillRef)
        },
        {
            text: "Experiences",
            action: () => scrollToFunc(expRef)
        },
        {
            text: "Portofolio",
            action: () => scrollToFunc(portoRef)
        },
        {
            text: "Contact",
            action: () => scrollToFunc(contactRef)
        },
    ];

    return (
        <Fragment>
            <Header MenuItems={menuItems} />
            <Hero />
            <Box ref={aboutMeRef}>
                <AboutMe />
            </Box>
            <Box ref={mySkillRef}>
                <MySkills />
            </Box>
            <Box ref={expRef}>
                <MyExperience />
            </Box>
            <Box ref={portoRef}>
                <Portofolio />
            </Box>
            <Box ref={contactRef}>
                <Contact />
            </Box>
            <Footer/>
        </Fragment>
    )
}
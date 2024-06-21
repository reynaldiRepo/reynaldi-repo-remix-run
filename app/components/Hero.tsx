import { AbsoluteCenter, Box, Text, useMediaQuery } from "@chakra-ui/react";
import heroImage from "~/assets/hero.jpg";
import { useEffect, useState } from "react";

const textList: string[] = ["REYNALDI", "SOFTWARE ENGINEER", "PROBLEM SOLVER"];

export default function Hero() {
  const [textIdx, setTextIdx] = useState<number>(0);
  const [subStrIdx, setSubStrIdx] = useState<number>(1);
  const [textDisplay, setTextDisplay] = useState<string>(" ");

  const [maxWidth576] = useMediaQuery("(max-width: 576px)", {
    ssr: false,
    fallback: false,
  });

  useEffect(() => {
    let textAll = textList[textIdx];
    let _subStrIdx = subStrIdx + 1;
    let timeOut1: string | number | NodeJS.Timeout | undefined;
    let timeOut2: string | number | NodeJS.Timeout | undefined;
    if (_subStrIdx > textAll.length + 1) {
      timeOut2 = setTimeout(() => {
        setTextIdx(textIdx === textList.length - 1 ? 0 : textIdx + 1);
        setSubStrIdx(1);
      }, 2000);
    } else {
      timeOut1 = setTimeout(() => {
        setTextDisplay(textAll.substring(0, subStrIdx));
        setSubStrIdx(_subStrIdx);
      }, 100);
    }

    return () => {
      clearTimeout(timeOut1);
      clearTimeout(timeOut2);
    };
  }, [subStrIdx, textIdx]);

  return (
    <Box
      position={"relative"}
      w={"full"}
      h={"calc(100vh - 75px)"}
      minH={"400px"}
      backgroundImage={heroImage}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
    >
      <Box position={"absolute"} w={"full"} h={"full"} bg={"rgba(0,0,0,0.8)"} />
      <AbsoluteCenter maxW={"full"} w={"756px"} p={"20px"}>
        <Box textAlign={"center"} color={"white"}>
          <Text
            fontSize={"2xl"}
            display={"block"}
            lineHeight={"none"}
            fontWeight={"hairline"}
          >
            HELLO I'M
          </Text>
          <Box
            color={"yellow.400"}
            fontWeight={"bold"}
            fontSize={maxWidth576 ? "3xl" : "5xl"}
            lineHeight={"1.2"}
            mb={maxWidth576 ? "4" : "5"}
            mt={maxWidth576 ? "4" : "5"}
            display={"flex"}
            justifyContent={"center"}
          >
            {textDisplay}
            <Text className="typingLookLike" fontWeight={"hairline"}>
              |
            </Text>
          </Box>
          <Text
            fontSize={maxWidth576 ? "sm" : "md"}
            fontWeight={"light"}
            display={"block"}
            lineHeight={"base"}
          >
            Passionate software engineer fueling innovation through code.
            Embracing programming, technology, and problem-solving to create a
            brighter future.
          </Text>
        </Box>
      </AbsoluteCenter>
    </Box>
  );
}

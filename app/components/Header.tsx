import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Icon, Image, List, ListItem, Text, useMediaQuery } from "@chakra-ui/react";
import icon from "~/assets/icon.png"
import { MdMenu } from "react-icons/md"
import { useDisclosure } from "@chakra-ui/react-use-disclosure";
import { Fragment, RefObject, useRef } from "react";
import { FocusableElement } from "@chakra-ui/utils";

export interface MenuItem {
    text: string,
    action?: () => void
}

function MenuNavLink(props: { item: MenuItem }) {
    return (
        <Text color={"white"} px={"5"} textTransform={"uppercase"} fontSize={"sm"} fontWeight={"light"} _hover={{ color: "yellow.400" }} cursor={"pointer"} onClick={props.item.action}>
            {props.item.text}
        </Text>
    )
}

function MenuDrawer(props: { btnRef: RefObject<FocusableElement>, isOpen: boolean, onClose: () => void, MenuItems: MenuItem[] }) {
    return (
        <Drawer
            isOpen={props.isOpen}
            placement='right'
            onClose={props.onClose}
            finalFocusRef={props.btnRef}
        >
            <DrawerOverlay />
            <DrawerContent bg={"black"} maxW={"400px"}>
                <DrawerCloseButton
                    color={"white"}
                    top={"20px"}
                />
                <DrawerBody>
                    <Box w={"full"} mt={"60px"}>
                        <List>
                            {props.MenuItems.map((mi, idx) => {
                                return (
                                    <ListItem key={idx}
                                        pb={"20px"}
                                        color={"white"}
                                        fontWeight={"light"}
                                        cursor={"pointer"}
                                        _hover={{ color: "yellow.400" }}
                                        onClick={()=>{
                                            if (mi.action){
                                                mi.action();
                                            }
                                            props.onClose();
                                        }}
                                    >
                                        {mi.text}
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default function Header(props: { MenuItems: MenuItem[] }) {
    const [isSmallerThan756] = useMediaQuery("(max-width: 756px)")
    const btnDrawerRef = useRef<HTMLButtonElement>(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Fragment>
            <Box
                backgroundColor={"black"}
                w={"full"}
                h={"75px"}
            />
            <Box position={"fixed"} top={"0"} left={"0"} w={"full"} bg={"black"} zIndex={"overlay"} px={"20px"} py={"15px"} dropShadow={"lg"}>
                <Flex align={"center"} justify={"space-between"}>
                    <Image src={icon} w={"30px"} />
                    {isSmallerThan756 ?
                        <Button p={0} bg={"transparent"} ref={btnDrawerRef} onClick={onOpen}>
                            <Icon as={MdMenu} fontSize={"32px"} color={"yellow.400"} />
                        </Button>
                        : <Flex align={"center"}>
                            {props.MenuItems.map((item, idx) => {
                                return (
                                    <MenuNavLink item={item} key={idx} />
                                )
                            })}
                        </Flex>}
                </Flex>
            </Box>
            <MenuDrawer MenuItems={props.MenuItems} btnRef={btnDrawerRef} isOpen={isOpen} onClose={onClose} />
        </Fragment>
    )
}
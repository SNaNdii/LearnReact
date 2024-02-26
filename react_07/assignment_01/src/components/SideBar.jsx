// import { useState, useEffect, useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {React} from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";


function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = useRef();

  return (
    <>
      <Button 
    //   ref={btnRef}
        colorScheme="teal" onClick={onOpen}>
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#bae8e8">
          <DrawerCloseButton />
          <DrawerHeader>Courses</DrawerHeader>
          <DrawerBody bgColor="teal" color="white">
            <p>Front-End Development Course</p>
            <p>Back-End Development Course</p>
            <p>Data Analyst</p>
          </DrawerBody>

          <DrawerHeader>Learning Material</DrawerHeader>
          <DrawerBody bgColor="teal" color="white">
            <p>Live Classes</p>
            <p>Reading Material</p>
            <p>Recorded Classes</p>
          </DrawerBody>

          <DrawerHeader>Live Projects</DrawerHeader>
          <DrawerBody bgColor="teal" color="white">
            <p>6+ Live projects</p>
            <p>Portfolio</p>
            <p>2+ Full stack projects</p>
          </DrawerBody>

          <DrawerHeader>Technologies</DrawerHeader>
          <DrawerBody bgColor="teal" color="white">
            <p>Java</p>
            <p>HTML, CSS, JavaScript</p>
            <p>React, Angular</p>
            <p>SpringBoot, Node.Js</p>
            <p>MySQL, MOngoDB</p>
            <p>AWS</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default SideBar;

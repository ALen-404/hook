import React, { useEffect, useState } from "react";
import {
    Menu,
    MenuButton,
    Flex,
    Box,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    Grid
  } from "@chakra-ui/react"
  import DateUploaded from '../components/MainMenu'
 import gameThree from "../../../../../../assets/img/logo/gameThree.png";
export default function GameCard() {
  const [GameCardData, setGameCardData] = useState([
    {
     
      gameName: "Call of Duty",
    //   img: gameThree,
    img: gameThree,
      introduce:'The massive free-to-playexperience from the world of Modern Warfare.'
    },
   
  ]);
  return (
    <Box>
      <Box
        style={{
          color: " rgba(255,255,255,1)",
          fontSize: "24px",
          fontWeight: " 500",
          textAlign: "left",
          lineHeight: "32px",
          marginBottom:'32px'
        }}
      >
        Trending games
      </Box>
      <Box style={{
           textAlign: 'right',
      }}>
 <DateUploaded></DateUploaded>
      </Box>
      <Box>
      <Grid
            templateColumns={{
              base: '1fr',
              lg: '1fr 1fr 1fr',
            }}
            templateRows={{
              base: 'repeat(3, 1fr)',
              lg: '1fr',
            }}
            gap={{ base: '20px', xl: '20px' }}
          > 
        {GameCardData.map((item, index) => {
          return (
            <Box style={{
                width: '306.25px',
                borderRadius: '24px',
      marginBottom:'39px',
      background: 'rgba(17,28,68,1)'
            }}>
             <Box  >
                <img style={{
                    width: '306.25px',
                    height: '170px',
                    borderRadius: '24px 24px 0 0',
                }}  src={item.img} alt="" />
              </Box>
             <Box style={{
                 padding:'24px',
                 boxSizing:' border-box',
             }}>

             </Box>
            </Box>
          )
        })}
         </Grid>
      </Box>
     
    </Box>
  );
}

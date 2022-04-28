import React from "react";

// Chakra imports
 
  import { Box, Icon, Text, useColorModeValue ,Image } from "@chakra-ui/react";
import avatar1 from "assets/img/logo/Header.png";
// Custom components
import Card from "components/card/Card.js";
import Transaction from "components/dataDisplay/Transaction";
// import { HSeparator } from "components/Separator/Separator";
// Assets
import {
  MdOutlineShoppingBasket,
  MdOutlineDirectionsBus,
  MdOutlineSubscriptions,
  MdLocalBar,
  MdOutlineWeekend,
} from "react-icons/md";
import { RiNetflixFill } from "react-icons/ri";

export default function YourTransactions(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const iconColor = useColorModeValue("brand.500", "white");
  const greenIcon = useColorModeValue("green.500", "white");
  const redIcon = useColorModeValue("red.500", "white");
  const blueIcon = useColorModeValue("blue.500", "white");
  const yellowIcon = useColorModeValue("yellow.500", "white");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Box 
    
    background="var(--chakra-colors-navy-800)"
    marginBottom="20px"
    borderRadius="30px"
    {...rest} p='34px'>

     <Text fontSize='xl' color={textColor} fontWeight='700' mb='34px'>
      Defi token
      </Text>
      {/* <HSeparator></HSeparator> */}
      <Transaction
        mb='26px'
        name='Public Transport'
        date='22 September 2022'
        sum='$1,204.50'
        // icon={
        //   <Icon
        //     as={MdOutlineDirectionsBus}
        //     color={iconColor}
        //     w='20px'
        //     h='18px'
        //   />
        // }
        avatar={avatar1}
        nameNum="@18.56"
      />
    
    </Box>
     
   
  );
}

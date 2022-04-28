import React from "react";

// Chakra imports
import { Flex, useColorModeValue, Image} from "@chakra-ui/react";
import Logo from "../../../assets/img/logo/Frame.png";
// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <Image
          src={Logo}
          alt="Horizon UI"
          width="153px"
          height="42px"
          margin="auto"
          margin-bottom="39px"
          margin-top= "48px"
        />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;

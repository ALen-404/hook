import React, { useEffect, useState } from "react"
import {
    Flex,
    Box,
    Image,
    Icon,
    Text,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
  } from '@chakra-ui/react'
  import gameThree from "../../../../../../assets/img/logo/gameThree.png";
  export default function TrendingGames() {
    const [TrendingData, setTrendingData] = useState([
        {
          Shooter: "Shooter",
          gameName: "Axie Infinity",
          img:gameThree,
          Viewers:'4.9k',
        },
        {
          Shooter: "Shooter",
          gameName: "Axie Infinity",
          img:gameThree,
          Viewers:'4.9k',
        },
        {
          Shooter: "Shooter",
          gameName: "Axie Infinity",
          img:gameThree,
          Viewers:'4.9k',
        },
        {
          Shooter: "Shooter",
          gameName: "Axie Infinity",
          img:gameThree,
          Viewers:'4.9k',
        },
        {
          Shooter: "Shooter",
          gameName: "Axie Infinity",
          img:gameThree,
          Viewers:'4.9k',
        },
      ]);
      return(
           <Box>
<div style={{
     color:' rgba(255,255,255,1)',
     fontSize: '24px',
     fontWeight:' 500',
     textAlign: 'left',
     lineHeight: '32px',
}} >
Trending Games
</div>
<div>
    {TrendingData.map((item,index)=>{
        return(
            <div>
             <img
                        width="345px"
                        height="330px"
                        src={item.img}
                        alt=""

                      />
                      <div>
                          
                      </div>
            </div>
        )
    })}
</div>
           </Box>
      )
  }
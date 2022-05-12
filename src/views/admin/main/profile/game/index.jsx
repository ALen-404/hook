import './index.css'
import { Box, Grid } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import backLogo from 'assets/svg/BgImage.svg'
import React, { useState } from 'react'
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useHistory } from 'react-router-dom'
import { getSearchDatas, setSearchHeats } from '../../../../../hook/hook'
export default function Track(props) {
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props
  // Chakra Color Mode
  const searchIconColor = useColorModeValue('gray.700', 'white')
  const inputBg = useColorModeValue('secondaryGray.300', 'navy.900')
  const inputText = useColorModeValue('gray.700', 'gray.100')
  const [inputValue, setInputValue] = useState('')
  const history = useHistory()
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
     
      <div className="Gaming">NFT Gaming for all</div>
      <div className=" challenge">
      challenge your gaming skills through a fun
and rewarding experience
      </div>
     <div>
         
     </div>
    </Box>
  )
}     

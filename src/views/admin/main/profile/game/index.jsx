import './index.css'
import { Box, Flex, Grid } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import backLogo from 'assets/svg/BgImage.svg'
import React, { useEffect, useState } from 'react'
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
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default function Track(props) {
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props
  // Chakra Color Mode
  const searchIconColor = useColorModeValue('gray.700', 'white')
  const inputBg = useColorModeValue('secondaryGray.300', 'navy.900')
  const inputText = useColorModeValue('gray.700', 'gray.100')
  const [inputValue, setInputValue] = useState('')
  const history = useHistory()

  const swiper = () => {
    new Swiper('.swiper-container1', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      spaceBetween: -100,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    })
  }

  useEffect(() => {
    swiper()
  }, [])
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <div className="Gaming">NFT Gaming for all</div>
      <div className=" challenge">
        challenge your gaming skills through a fun and rewarding experience
      </div>
      <Flex justifyContent="center">
        <div
          className="swiper-container1"
          style={{
            width: '500px',
            height: '400px',
            padding: '0px 24px',
            display: 'flex',
          }}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                style={{
                  height: '100px',
                  borderRadius: '15px',
                  backgroundColor: 'yellow',
                }}
              ></div>
            </div>
            <div className="swiper-slide">
              <div
                style={{
                  height: '100px',
                  borderRadius: '15px',
                  backgroundColor: 'red',
                }}
              ></div>
            </div>
            <div className="swiper-slide">
              <div
                style={{
                  height: '100px',
                  borderRadius: '15px',
                  backgroundColor: 'green',
                }}
              ></div>
            </div>
            <div className="swiper-slide">
              <div
                style={{
                  height: '100px',
                  borderRadius: '15px',
                  backgroundColor: 'blue',
                }}
              ></div>
            </div>
            <div className="swiper-slide">
              <div
                style={{
                  height: '100px',
                  borderRadius: '15px',
                  backgroundColor: 'white',
                }}
              ></div>
            </div>
          </div>
        </div>
      </Flex>
    </Box>
  )
}

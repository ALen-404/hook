import React from 'react'
// Chakra imports
import { Box, Flex, Text, Badge, LightMode, Image } from '@chakra-ui/react'
import LineChart from 'components/charts/LineChart'
import Vector from '../../../assets/img/logo/Vector.png'
// Custom components
import { lineChartDataSidebar, lineChartOptionsSidebar } from 'variables/charts'
export default function SidebarDocs() {
  const bgColor = 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'

  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      // bg={bgColor}

      background="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
      borderRadius="24px"
      me="20px"
      position="relative"
      width="228px"
      height="190px"
    >
      <Flex
        width="94px"
        height="94px"
        background="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
        position="absolute"
        border="5px solid #111C44"
        borderRadius="50%"
        top="-50px"
      >
        <Image
          src={Vector}
          alt="Horizon UI"
          width="41px"
          height="41px"
          margin="auto"
        />
      </Flex>
      <Flex marginTop="26px" marginBottom="10px" textAlign="center">
        <Text fontSize="16px" color="#FFFFFF">
          Upgrade to PRO
        </Text>
      </Flex>
      <Flex textAlign="center" width="229px">
        <Text fontSize="14px" color="#FFFFFF">
          to get access to all features! Connect with Venus World!{' '}
        </Text>
      </Flex>
    </Flex>
  )
}

// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Card from 'components/card/Card.js'
import React from 'react'
import Balance from './Balance'

export default function Banner(props) {
  const { banner, avatar, name, job, posts, followers, following } = props

  const cyberAddress = 'https://www.cyber.xyz/@'

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = 'gray.400'
  const iconMap = ['user', 'aaaa', 'aaaa', 'bbbb']
  const borderColor = useColorModeValue(
    'white !important',
    '#111C44 !important'
  )
  return (
    <Card mb={{ base: '0px', lg: '20px' }} align="center">
      <Box
        bg={`url(${banner})`}
        bgSize="cover"
        borderRadius="16px"
        h="131px"
        w="100%"
      />
      <Avatar
        mx="auto"
        src={avatar}
        h="87px"
        w="87px"
        mt="-43px"
        border="4px solid"
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {job}
      </Text>
      <Flex w="max-content" mx="auto" mt="10px" marginBottom="20px">
        {iconMap.map((res, index) => {
          return (
            <Box
              marginRight="7px"
              fontSize="11.2px"
              backgroundColor="#1B254B"
              padding="7px 18px"
              borderRadius="11px"
              userSelect="none"
              key={index + 1}
            >
              #{res}
            </Box>
          )
        })}
      </Flex>
      <Flex w="max-content" mx="auto" mt="10px" marginBottom="20px">
        {iconMap.map((res, index) => {
          return (
            <Box
              marginRight="7px"
              fontSize="11.2px"
              backgroundColor="#1B254B"
              padding="7px 18px"
              borderRadius="11px"
              userSelect="none"
              key={index + 1}
            >
              #{res}
            </Box>
          )
        })}
      </Flex>
      <Balance></Balance>
      <Flex w="max-content" mx="auto" mt="26px">
        <Flex mx="auto" me="60px" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {posts}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Posts
          </Text>
        </Flex>
        <Flex mx="auto" me="60px" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {followers}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Followers
          </Text>
        </Flex>

        <Flex mx="auto" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {following}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Following
          </Text>
        </Flex>
      </Flex>
    </Card>
  )
}

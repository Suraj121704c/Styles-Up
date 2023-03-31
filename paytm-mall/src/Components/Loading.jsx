import { Box, Image } from '@chakra-ui/react'
import React from 'react'

export const Loading  = () => {
  return (
      <Box display={"flex"} justifyContent="center" alignItems={"center"} p={"10%"} maxW="3xl" m={"auto"}>
          <Image src='https://i.gifer.com/YVPG.gif' w="full" />
    </Box>
  )
}


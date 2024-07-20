'use client'
//rfce
import{ Flex, Button, Center } from '@chakra-ui/react'
import Image from 'next/image'
import styles from './Navbar.module.css'



const Navbar = () => {
  return (
    <Flex
        justifyContent='space-between'
        alignItems='Center'
        px="2rem"
        py="1rem"
        className='styles.Navbar'

    >
      <Image 
            src='/logo.png'
            alt='logo'
            width={60}
            height={46}
            className='object-contain'
            
      />
      <Button colorScheme='messenger'>Connexion</Button>

    </Flex>
  )
}

export default Navbar
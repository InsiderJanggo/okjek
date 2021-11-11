import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

const Links = [
    { label: 'Twitter', href: 'https://twitter.com/wisly_ong_', icon: <FaTwitter /> },
    { label: 'Youtube', href: 'https://www.youtube.com/channel/UCZ7FMniORXNvj24RKshixkw', icon: <FaYoutube /> }
]

/**
 * @param {Object} param
 * @param {ReactNode} param.children
 * @param {String} param.label
 * @param {String} param.href
 * @returns
 */
export function SocialButton({ children, label, href }) {
    return(
        <chakra.button bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function Footer() {
    return(
        <Box  bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
                 <Text>© 2021 RealPenguin(Wisly Ong). All rights reserved</Text>
                 <Stack direction={'row'} spacing={6}>
                    {Links.map((link) => (
                        <SocialButton href={link.href} key={link.label}>
                            {link.icon}
                        </SocialButton>
                    ))}
                 </Stack>
            </Container>
        </Box>
    )
}
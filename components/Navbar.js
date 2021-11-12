import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { signIn, signOut } from 'next-auth/client';

const Links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: 'about' }
]

/**
 * @param {Object} param
 * @param {ReactNode} param.children
 * @param {String} param.href
 * @returns
 */
export function Navlink({ children, href }) {
    return(
        <Link  
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={href}
        >
            {children}
        </Link>
    )
}

export default function Navbar({ session }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter()

    return(
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box cursor="pointer" onClick={() => router.push('/')}>
                        Okjek
                    </Box>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <Navlink key={link.name} href={link.href}>{link.name}</Navlink>
                        ))}
                    </HStack>
                </HStack>
                {session ? (
                     <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={session.user.image}
                                    alt={`Avatar ${session.user.name}`}
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => router.push('/me')}>Profil Saya</MenuItem>
                                <MenuItem onClick={() => router.push('/setting')}>Setting</MenuItem>
                                <MenuDivider />
                                <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                 </Flex>
                ): (
                    <Button
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'pink.400'}
                    onClick={() => signIn()}
                    _hover={{
                      bg: 'pink.300',
                    }}>
                    Sign In
                    </Button>
                )}
            </Flex>

            {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <Navlink key={link.name} href={link.href}>{link.name}</Navlink>
                            ))}
                            {!session && (
                                <Button
                                    display={{ base: 'none', md: 'inline-flex' }}
                                    fontSize={'sm'}
                                    fontWeight={600}
                                    color={'white'}
                                    bg={'pink.400'}
                                    onClick={() => signIn()}
                                    _hover={{
                                    bg: 'pink.300',
                                    }}>
                                    Sign In
                                </Button>
                            )}
                        </Stack>
                    </Box>
            ) : null}
        </Box>
    )
}
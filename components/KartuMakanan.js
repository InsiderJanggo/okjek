import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';

export default function KartuMakanan({ makanan }) {
    return(
        <Center py={12}>
            <Box role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                 <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'230px'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${makanan.image})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                }}
                _groupHover={{
                    _after: {
                    filter: 'blur(20px)',
                    },
                    }}>
            <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={makanan.image}
                alt={makanan.name}
            />
            </Box>

            <Stack pt={10} align={'center'}>
                {makanan.popular ? (
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                     Popular Item
                    </Text>
                ): (
                    ""
                )}
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    {makanan.name}
                </Heading>
                <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                        Rp {makanan.price}
                    </Text>
                </Stack>
            </Stack>

            </Box>
        </Center>
    )
}
import Layout from '@/components/Layout'
import Head from 'next/head'
import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
    Heading,
    Icon,
    Box,
    SimpleGrid,
    chakra
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Feature from '@/components/Feature';
import StatsCard from '@/components/StatsCard';

const FeatureStuff = [
    { 
        id: 0,
        title: 'Lifetime Support', 
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...', 
        icon:  FcAssistant
    },
    {
        id: 1,
        title: 'Unlimited Donations',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...',
        icon: FcDonate
    },
    {
        id: 2,
        title: 'Instant Delivery',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...',
        icon: FcInTransit
    }
]

export default function AboutPage() {
    return (
        <div>
            <Head>
                <title>Tentang - Okjek</title>
            </Head>
            <Layout>
                <Flex  w={'full'}
                    h={'100vh'}
                    backgroundImage={
                        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
                    }
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}>
                    <VStack w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                            <Heading>
                                <Text>
                                    Sebuah perjalanan
                                </Text>
                            </Heading>
                        <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                           Kenalan lebih dekat sama sejarah Gojek dan orang-orang dibaliknya
                        </Text>
                          {/**
                           *   <Stack direction={'row'}>
                                <Button
                                bg={'blue.400'}
                                rounded={'full'}
                                color={'white'}
                                _hover={{ bg: 'blue.500' }}>
                                Kontak Kami
                                </Button>
                                <Button
                                bg={'whiteAlpha.300'}
                                rounded={'full'}
                                color={'white'}
                                _hover={{ bg: 'whiteAlpha.500' }}>
                                </Button>
                            </Stack>
                           */}
                        </Stack>
                    </VStack>
                </Flex>

                {/** Feature Section */}
                <Box p={4}>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                        {FeatureStuff.map((data) => (
                            <Feature 
                                title={data.title} 
                                text={data.text} 
                                icon={<Icon  as={data.icon} alt={data.title} />} 
                                key={data.id} 
                            />
                        ))}
                    </SimpleGrid>
                </Box>

                {/** Stats Section */}
                <Box p={4} maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                        <chakra.h1   textAlign={'center'}
                        fontSize={'4xl'}
                        py={10}
                        fontWeight={'bold'}>
                            Apa yang dilakukan perusahaan kami?
                        </chakra.h1>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                            <StatsCard title={'Kami melayani'} stat={'50.000 orang'} />
                            <StatsCard title={'Tersedia'} stat={'30 negara yang berbeda'} />
                            <StatsCard title={'Kami yang berbicara'} stat={'100 bahasa yang berbeda'} />
                        </SimpleGrid>
                </Box>  
            </Layout>
        </div>
    )
}

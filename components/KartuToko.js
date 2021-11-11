import {
    Flex,
    Box,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link'


export default function KartuToko({ toko }) {
    return(
       <Link href="/toko/[id]" as={`/toko/${toko.id}`} passHref>
             <Flex p={50} w="full" alignItems="center" justifyContent="center">
                <Box
                    cursor="pointer"
                    bg={useColorModeValue('white', 'gray.800')}
                    maxW="sm"
                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                    position="relative">

                    <Image 
                        src={toko.image}
                        alt={`Picture of ${toko.id}-${toko.title}`}
                        roundedTop="lg"
                    />

                    <Box p="6">
                        <Flex mt="1" justifyContent="space-between" alignContent="center">
                            <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                                {toko.name}
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
       </Link>
    )
}
import {
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';

/**
 * Stats Card
 * @param {Object} params
 * @param {String} params.title
 * @param {String} params.stat
 * @returns
 */
export default function StatsCard({ title, stat }) {
    return(
        <Stat  px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
            <StatLabel fontWeight={'medium'} isTruncated>
                    {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                    {stat}
            </StatNumber>
        </Stat>
    )
}
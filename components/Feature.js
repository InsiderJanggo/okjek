import { ReactElement } from 'react';
import {
    Stack,
    Text,
    Flex
} from '@chakra-ui/react'

/**
 * Feature Card
 * @param {Object} param
 * @param {String} param.title
 * @param {String} param.text
 * @param {ReactElement} param.icon
 * @returns
 */
export default function Feature({ title, text, icon }) {
    return(
        <Stack>
            <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={'gray.100'}
            mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'white.300'}>{text}</Text>
        </Stack>
    )
}
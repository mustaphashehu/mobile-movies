import { View, Text } from 'react-native'
import React from 'react'
import { Link, Href } from 'expo-router'

interface LinkButtonProps {
    href: Href;
    buttonText?: string;
}
const LinkButton = ({href, buttonText}: LinkButtonProps) => {
    return (
        <Link href={href} className='bg-carecolor py-[16px] px-[8px] rounded-[16px] w-[300px] h-[48px] text-center'>
            <Text className='text-white'>{buttonText}</Text>
        </Link>
    )
}

export default LinkButton
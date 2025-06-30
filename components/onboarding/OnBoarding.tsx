import ProgressBar from './ProgressBar'
import { images } from '@/constants/images'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { Link, Href } from 'expo-router'
import LinkButton from './LinkButton'

interface OnBoardingProps {
    image: any;
    title: string;
    description: string;
    pageNumber: number,
    href: Href;
    skipText?: boolean
    buttonText?: string;
}

const OnBoarding: React.FC<OnBoardingProps> = ({
    image,
    title,
    description,
    pageNumber,
    href,
    skipText = true,
    buttonText = "Next"
}) => {
    return (
        // onbarding
        <View className='bg-[#FFFFFF] flex-1 pt-[40px] px-[24px] pb-[24px]'>
            {/* content */}
            <View className='flex-1 flex gap-[64px] items-center'>
                {/* content+skip */}
                <View className='flex flex-col items-center justify-center gap-[64px] my-8'>
                    <View className='flex-row w-full items-end justify-end h-[24px]'><Text className='font-semibold'>{skipText ? "Skip" : ""}</Text></View>
                    {/* image header */}
                    <View className='flex gap-4 justify-center items-center'>
                        <Image source={image} />
                        {/* header */}
                        <View className='flex gap-[8px]'>
                            <Text className='font-semibold text-[35px] text-[#101010] text-center'>{title}</Text>
                            <Text className='text-center font-normal text-[#585858] text-[16px]'>{description}</Text>
                        </View>
                    </View>
                    {/* progress bar */}
                    <ProgressBar currentPage={pageNumber} />
                </View>

                {/* input2 */}
                <LinkButton href={href} buttonText={buttonText} />
            </View>
        </View>
    )
}

export default OnBoarding
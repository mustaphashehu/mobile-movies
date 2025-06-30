import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

// interface TabIconProps {
//     focused: boolean;
//     source: any;
//     title: string;
// }
const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {
        return (
            <>
                <ImageBackground source={images.highlight} className='
                    flex flex-row 
                    w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'>
                    <Image source={icon} tintColor="#151312" className="size-5" />
                    <Text className='
                        text-secondary
                        text-base
                        font-semibold
                        ml-2'>{title}</Text>
                </ImageBackground>
            </>
        )
    }

    return (
        <View className='size-full justify-center items-center mt-4 rounded-full'>
            <Image source={icon} tintColor="#A8B5DB" className="size-5" />
        </View>
    )

}

const _layout = () => {
    return (
        <Tabs
      >
            <Tabs.Screen
                name="movie1"
                options={{
                    title: 'onboarding',
                    tabBarStyle: { display: 'none' },
                    headerShown: false,
                }}
            />
        </Tabs>
    )
}

export default _layout




// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzQ2NzU0ZGE3MDBjNjA5NzQ3Y2QyZjA3YjY3NDBlMCIsIm5iZiI6MTc1MDc5OTgwMS41NzcsInN1YiI6IjY4NWIxNWI5N2IwNGVhOWUzMTA0MzI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zM5KCKfVVs1BBk7FywZGRAmxvJDXoV1tkHot4qqCFOU
// fc46754da700c609747cd2f07b6740e0
import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="signup"
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
import ProgressBar from '@/components/onboarding/ProgressBar'
import { images } from '@/constants/images'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'

const profile = () => {
  return (
    <View className='bg-slate-[#FFFFFF] flex-1 pt-[40px] px-[24px] pb-[24px]'>
      <View className='flex-1 flex gap-8'>
        <View className='flex flex-col items-center justify-center gap-[64px] my-8'>
          <View className='flex-row w-full items-end justify-end h-[24px]'><Text className='font-semibold'>Skip</Text></View>
          {/* image header */}
          <View className='flex gap-4 justify-center items-center'>
            <Image source={images.onboarding1} />
            {/* header */}
            <View className='flex gap-[8px]'>
              <Text className='font-semibold text-[35px] text-[#101010] text-center'>Healthcare that comes to you</Text>
              <Text className='text-center font-normal text-[#585858] text-[16px]'>Book doctors, access health records, and get care anytime, anywhere.p</Text>
            </View>
          </View>
          {/* progress bar */}
          <ProgressBar currentPage={1} />
          <Link href="/onboarding/onboarding1"><Text className='text-black' >go to main</Text></Link>
        </View>
      </View>
    </View>
  )
}

export default profile
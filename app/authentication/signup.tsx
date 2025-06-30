import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Input from '@/components/authentication/Input'

const signup = () => {
  return (
    <View className='bg-[#FFFFFF] flex-1 pt-[40px] px-[24px] pb-[24px]'>
            {/* content */}
            <View className='flex-1 flex gap-[64px] items-center'>
                {/* content+skip */}
                <View className='flex flex-col items-center justify-center gap-[64px] my-8'>
                    <View className='flex-row w-full items-end justify-end h-[24px]'><Text className='font-semibold'>o</Text></View>
                    {/* image header */}
                    <View className='flex gap-4 justify-center items-center'>
                        
                        {/* header */}
                        <View className='flex gap-[8px]'>
                            <Input label='password' placeholder='Enter your password' secureTextEntry={true} />
                            <Text className='font-semibold text-[35px] text-[#101010] text-center'>kk</Text>
                            <Text className='text-center font-normal text-[#585858] text-[16px]'>k</Text>
                        </View>
                    </View>
                    {/* progress bar */}
                    
                </View>

                {/* input2 */}
                
            </View>
        </View>
  )
}

export default signup
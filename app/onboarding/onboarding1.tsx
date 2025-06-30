import OnBoarding from '@/components/onboarding/OnBoarding'
import { images } from '@/constants/images'
import React from 'react'

const onboarding1 = () => {
  return (
    // onbarding
    <OnBoarding image={images.onboarding1} 
    title='Healthcare that comes to you'
    description='Book doctors, access health records, and get care anytime, anywhere.'
    pageNumber={1}
    href={"/onboarding/onboarding2"}
    />
  )
}

export default onboarding1
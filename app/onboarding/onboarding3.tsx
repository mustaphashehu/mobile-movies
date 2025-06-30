import OnBoarding from '@/components/onboarding/OnBoarding'
import { images } from '@/constants/images'
import React from 'react'

const onboarding3 = () => {
  return (
    <OnBoarding image={images.onboarding3} 
    title='Stay in control of your health'
    description='Track your health history, vitals, and medications securely on your phone.'
    pageNumber={3}
    href={"/authentication/signup"}
    skipText={false}
    buttonText='Get Started'
    />
  )
}

export default onboarding3
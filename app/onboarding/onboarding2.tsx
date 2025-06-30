import OnBoarding from '@/components/onboarding/OnBoarding'
import { images } from '@/constants/images'
import React from 'react'

const onboarding2 = () => {
  return (
    <OnBoarding image={images.onboarding2} 
    title='Need a doctor? It takes just 3 taps'
    description='Find trusted doctors near you and book visits or chats in minutes.'
    pageNumber={2}
    href={"/onboarding/onboarding3"}
    />
  )
}

export default onboarding2
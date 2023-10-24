/* eslint-disable react/no-unescaped-entities */
import SubscriptionButton from '@/components/SubscriptionButton';
import { checkSubscription } from '@/lib/subscription'
import React from 'react'

type Props = {}

const SettingsPage = async (props: Props) => {
    const isPro=await checkSubscription();
  return (
    <div className='mx-auto max-w-7xl p-8 mb-60'>
        <h1 className='mt-5 text-3xl font-bold'>Settings</h1>
        {isPro ? (
            <p className='mt-5 text-xl text-secondary-foreground/60'>
                You're a PRO User.
            </p>
        ) : (
            <p className='mt-5 text-xl text-secondary-foreground/60'>
                You're a FREE User.
            </p>
        )}
        <SubscriptionButton isPro={isPro}/>
    </div>
  )
}

export default SettingsPage
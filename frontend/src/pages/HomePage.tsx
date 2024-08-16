import colors from '@/styles/theme'
import React from 'react'
import landingPage from '@/assets/landing.png'
import appDownloadImage from '@/assets/appDownload.png'
const HomePage = () => {
    return (
        <div className='flex flex-col gap12'>
            <div className='bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 -mt-16 text-center '>
                <h1 className={`text-5xl font-bold tracking-tight ${colors.mainTextColor}`}>
                    Have your takeaway right now
                </h1>
                <span className='text-xl'> Your fav food is just a click away</span>
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
                <img src={landingPage} alt=".." />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                        Order takeaway even faster!
                    </span>
                    <span>
                        Download the QuickBites App for faster ordering and personalised
                        recommendations
                    </span>
                    <img src={appDownloadImage} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
// import React from 'react'
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import colors from '@/styles/theme';
import MainNav from './MainNav';

function Header() {
    return (
        <>
            <div className={`border-b-2 border-b-${colors.mainColor}-600 py-6`}>
                <div className='container mx-auto flex justify-between items-center'>
                    <Link
                        className={`text-3xl font-bold tracking-tight ${colors.mainTextColor}`}
                        to='/'
                    >
                        QuickBites.com
                    </Link>
                    <div className='md:hidden'>
                        <MobileNav/>
                    </div>
                    <div className='hidden md:block'>
                        <MainNav/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
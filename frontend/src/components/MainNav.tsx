import React from 'react'
import { Button } from './ui/button'
import colors from '@/styles/theme'
import { useAuth0 } from '@auth0/auth0-react';
import UsernameMenu from './UsernameMenu';
// import { Link } from 'react-router-dom';

const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? (
                <>
                    {/* <Link to="/order-status" className={`font-bold ${colors.hoverTextColor}`}>
                        Order Status
                    </Link> */}
                    <UsernameMenu/>
                </>
            ) : (
                <Button variant={'ghost'}
                    className={`font-bold text-xl ${colors.hoverTextColor} hover:bg-white`}
                    onClick={async () => loginWithRedirect()}
                > Log In
                </Button>
            )}
        </span>
    )
}

export default MainNav
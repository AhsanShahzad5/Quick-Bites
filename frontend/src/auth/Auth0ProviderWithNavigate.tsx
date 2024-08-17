//import { useCreateMyUser } from '@/api/MyUserApi';
import { Auth0Provider , User } from '@auth0/auth0-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
}

const Auth0ProviderWithNavigate = ({ children }: Props) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENTID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

    const navigate = useNavigate();

    if (!domain || !clientId || !redirectUri || !audience) {
        throw new Error("Unable to initialize auth");
    }

    //runs when user signs in
    const onRedirectCallback = (user?:User)=>{
        console.log("user loged in " , user);
        navigate("/auth-callback")
    }
    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={
                { redirect_uri: redirectUri,
                    audience, 
                }
            }
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWithNavigate;
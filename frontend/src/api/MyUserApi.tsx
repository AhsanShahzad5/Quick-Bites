import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

//this syntax is used in vite when we r importing smthing from .env file
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
    auth0Id: string;
    email: string;
}
//basically this is a custom hook
export const useCreateMyUser = () => {
    const {getAccessTokenSilently} = useAuth0();
    
    const createMyUserRequest = async (user: CreateUserRequest) => {
        const accessToken = await getAccessTokenSilently()
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "POST",
            headers: {
                Authorization : `Bearer ${accessToken}` ,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error("Failed to create user")
        }
    }
    //we renamed mutateAsync function from react-query to create user
    const { mutateAsync: createUser
        , isLoading, isError, isSuccess } = useMutation(createMyUserRequest);

        return {
            createUser , isLoading , isError , isSuccess
        };
}

// export {useCreateMyUser}
import { defineStore } from "pinia";

export const useAuthenticationStore = defineStore(
    "AuthenticationStore",
    {
        state: () => (
            {
                isLoggedIn:true
            }),
        actions: {
            setIsLoggedIn: (boolean) => {
                state.isLoggedIn = boolean;
            }
        }
    }
    );

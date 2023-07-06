import { defineStore } from "pinia";
const useLoading = defineStore(
    "Loading",
    {
        state: () => ({
            isLoading: false
        }),
        actions: {
            setIsLoading (boolean) {
                this.isLoading = boolean;
            }
        }
    }
);
const useAPI = defineStore(
    "API",
    {
        state: () => ({
            API: "https://localhost:5454/api/"
        })
    }
);
const useAuthenticationStore = defineStore(
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

export { useLoading, useAPI, useAuthenticationStore };

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
            API: "http://localhost:5454/api/"
        })
    }
);
const useAuthenticationStore = defineStore(
    "AuthenticationStore",
    {
        state: () => (
            {
                isLoggedIn:false
            }),
        actions: {
            setIsLoggedIn (boolean) {
                this.isLoggedIn = boolean;
            }
        }
    }
);

export { useLoading, useAPI, useAuthenticationStore };

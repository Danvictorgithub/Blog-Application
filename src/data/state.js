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
            API: "https://leemans-tech-blog-api.onrender.com/api/"
        })
    }
);
const useAuthenticationStore = defineStore(
    "AuthenticationStore",
    {
        state: () => (
            {
                isLoggedIn:false,
                username:""
            }),
        actions: {
            setIsLoggedIn (boolean) {
                this.isLoggedIn = boolean;
            },
            setUsername (username) {
                this.username = username;
            }
        }
    }
);

export { useLoading, useAPI, useAuthenticationStore };

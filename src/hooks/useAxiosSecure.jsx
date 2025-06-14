import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { getAuth } from "firebase/auth";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    withCredentials: true,
})

const useAxiosSecure =() => {

    const {logOut} = useContext(AuthContext);

    axiosInstance.interceptors.request.use(async(config)=>{
        const currentUser = getAuth().currentUser;
        if(currentUser){
            const token = await currentUser.getIdToken()
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    })

    axiosInstance.interceptors.response.use(
        res => res,
        err=>{
            if(err.status === 401 || err.status === 403){
                logOut().then(()=>{
                    console.error(`User logged out because of error with ${err.status} code`)
                }).catch((err)=>{
                    console.error(err)
                })
            }
            return Promise.reject(err)
        }
    )

    return axiosInstance
};

export default useAxiosSecure;
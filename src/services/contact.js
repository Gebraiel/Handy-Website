import { api } from "../config/axios";

export async function sendEmail(body){
    try{
        const res = await api.post("contact-us",body);
        if(res.data.code === 200)
            return {message:res.data.message,error:false}
        else
            return {message:res.data.message,error:true};
    }catch(e){
        return {message:e.message,error:true};
    }
}
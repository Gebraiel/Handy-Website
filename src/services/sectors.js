import { api } from "../config/axios";
export async function getSectors(lang){
  try{
    const {data} = await api.get("sectors",{headers:{lang}});
    if(data.status && data.code === 200){
        const {data:{data:sectors}} = data
        return {sectors,error:null}
    }else{
      return {sectors:null,error:{code:data.code,message:"There is something wrong please try again later"}}
    }
  }catch(e){
    return {sectors:null,error:{code:e.code,message:e.meessage}}
  }
}
export async function getSector(lang,id){
  try{
    const {data} = await api.get(`sectors/${id}`,{headers:{lang}});
    if(data.status && data.code === 200){
        const {data:sector} = data
        return {sector,error:null}
    }else{
      return {sector:null,error:{code:data.code,message:"There is something wrong please try again later"}}
    }
  }catch(e){
    return {sector:null,error:{code:e.code,message:e.meessage}}
  }
}
export async function getSectorImages(sectorName,lang) {
      const {data} = await api.get(`sectors/${sectorName}`);
      const {data:{gallery}} = data
      const images = gallery?.map((img) => img.image);
      return images
}

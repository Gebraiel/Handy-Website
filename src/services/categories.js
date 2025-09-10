import { api } from "../config/axios";

export async function getCategories(lang){
    try{
        const data = await api.get('categories',{headers:{lang}});
        if(data.status && data.data.code === 200){
                const {data:{data:{data:{categories}}}} = data
                const customOrder = ['jumbo rolls', 'facial tissues','toilet tissues', 'home care','wet wipes']
                const sortedData = categories.sort((a, b) => {
                    return customOrder.indexOf(a.title.toLowerCase()) - customOrder.indexOf(b.title.toLowerCase())
                })

                return {categories:sortedData,error:null};
            }else{
                return {categories:null,error:{code:data.code,message:"There is something wrong please try again later"}}
            }
        }catch(e){
            return {categories:null,error:{code:e.code,message:e.message}};
        }
}

export async function getCategory(lang,id){
    try{
        const data = await api.get(`category/${id}`,{headers:{lang}});
       if(data.status && data.data.code === 200){
            const {data:{data:{data:{category}}}} = data;
            return {category:category,error:null};
        }else{
            return {category:null,error:{code:data.code,message:"There is something wrong please try again later"}}
        }
    }catch(e){
        return {category:null,error:{code:e.code,message:e.message}};
    }
}
export async function getSubcategories(lang,categoryId){
    const data = await api.get(`category/${categoryId}`,{headers:{lang}});
    const {data:{data:{data:{category:{subcategories}}}}} = data;
    return subcategories;

}
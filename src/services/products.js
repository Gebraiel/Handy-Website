import { api } from "../config/axios";

// export async function getProducts(){
//     let { data: products, error } = await supabase
//     .from('products')
//     .select('*');
//     if(error){
//         console.error(error);
//         throw new Error("Error whilte getting products");
//     }

//     return products;
// }
export async function getCategoryProducts(lang,categoryId){
    try{
        const data = await api.get(`category/${categoryId}`,{headers:{lang}});
        if(data.status && data.data.code === 200){
            const {data:{data:{data:{category:{products}}}}} = data
            return {products,error:null};
        }else{
            return {products:null,error:{code:data.code,message:"There is something wrong please try again later"}}
        }
    }catch(e){
        return {products:null,error:{code:e.code,message:e.message}};
    }

}
export async function getProduct(lang,productId){
    try{
        const data = await api.get(`product/${productId}`,{headers:{lang}});
        if(data.status && data.data.code === 200){
            const {data:{data:{data:{product,next_id,prev_id}}}} = data
            const productExpanded= {...product,next_id,prev_id};
            return {product:productExpanded,error:null};
        }else{
            return {product:null,error:{code:data.code,message:"There is something wrong please try again later"}}
        }
    }catch(e){
        return {product:null,error:{code:e.code,message:e.message}};
    }
    // let { data: products, error } = await supabase
    // .from('products',)
    // .select('*,category(*)',).eq('id',productId);
    // if(error){
    //     console.error(error);
    //     throw new Error("Error whilte getting products");
    // }

    // return products;
}


// export async function getCatalog() {
//   const { data,error } = supabase
//   .storage
//   .from('files')
//   .getPublicUrl('Product Catalog.pdf');


//   if (error) {
//     console.error("Error listing files:", error.message);
//     return null;
//   }

//   return data.publicUrl;
// }

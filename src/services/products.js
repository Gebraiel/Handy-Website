import supabase from "./supabase";

export async function getProducts(){
    let { data: products, error } = await supabase
    .from('products')
    .select('*');
    if(error){
        console.error(error);
        throw new Error("Error whilte getting products");
    }

    return products;
}
export async function getCategoryProducts(categoryId,subcategory){
    let products;
    if(!subcategory)
    {
        let { data, error } = await supabase
        .from('products',)
        .select('*,category(*)',).eq('category',categoryId).order('id', { ascending: true });
        products = data;
        if(error){
            console.error(error);
            throw new Error("Error whilte getting products");
        }
    }else{
        console.log(subcategory)
        let { data, error } = await supabase
        .from('products',)
        .select('*,category(*)',).eq('category',categoryId).eq('subcategory',subcategory).order('id', { ascending: true });
        console.log(data);
        products = data;
        if(error){
            console.error(error);
            throw new Error("Error whilte getting products");
        }
    }
    return products;
}
export async function getProduct(productId){
    let { data: products, error } = await supabase
    .from('products',)
    .select('*,category(*)',).eq('id',productId);
    if(error){
        console.error(error);
        throw new Error("Error whilte getting products");
    }

    return products;
}


export async function getCatalog() {
  const { data,error } = supabase
  .storage
  .from('files')
  .getPublicUrl('Product Catalog.pdf');

  
  if (error) {
    console.error("Error listing files:", error.message);
    return null;
  }
  
  return data.publicUrl;
}

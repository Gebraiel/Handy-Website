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
export async function getCategoryProducts(categoryId){
   
    let { data: products, error } = await supabase
    .from('products',)
    .select('*,category(*)',).eq('category',categoryId).order('id', { ascending: true });;
    if(error){
        console.error(error);
        throw new Error("Error whilte getting products");
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

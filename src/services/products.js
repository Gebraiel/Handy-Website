import supabase from "./supabase";

async function getProducts(){
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
    console.log(categoryId);
    console.log(typeof categoryId)
    let { data: products, error } = await supabase
    .from('products',)
    .select('*,category(*)',).eq('category',categoryId);
    console.log(products);
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
    console.log(products);
    if(error){
        console.error(error);
        throw new Error("Error whilte getting products");
    }

    return products;
}


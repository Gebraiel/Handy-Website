import supabase from "./supabase";

async function getSubCategories(subCategoryId){
    let { data: subcategory, error } = await supabase
        .from('subcategories')
        .select("*")
        .eq('id',subCategoryId);
    if(error)
        console.error(error);
    return subcategory;
}
export async function getCategories(){
    let { data: categories, error } = await supabase
    .from('categories')
    .select('*');
    if(error){
        console.error(error);
        throw new Error('Error While getting categories');
    }
    return categories;
}
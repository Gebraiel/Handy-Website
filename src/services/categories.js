import axios from "../../node_modules/axios/index";
import supabase from "./supabase";

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
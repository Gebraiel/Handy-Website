import supabase from "./supabase";

export async function getCategories(){
    let { data: categories, error } = await supabase
    .from('categories')
    .select('*');
    if(error){
        console.error(error);
        throw new Error('Error While getting categories');
    }
    const customOrder = ['jumbo rolls', 'facial tissues','toilet tissues', 'home care','wet wipes']

    const sortedData = categories.sort((a, b) => {
        return customOrder.indexOf(a.name) - customOrder.indexOf(b.name)
      })


    return sortedData;
}
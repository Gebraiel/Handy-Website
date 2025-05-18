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
  const { data: files, error } = await supabase
    .storage
    .from('files')
    .list('', { limit: 100, sortBy: { column: 'name', order: 'asc' } });

  if (error) {
    console.error("Error listing files:", error.message);
    return [];
  }

  if (!files || files.length === 0) {
    console.warn("No files found in bucket.");
    return [];
  }

  return files
    .map(file => {
      const filePath = `${folderpath}/${file.name}`;
      const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
      return data?.publicUrl;
    })
    .filter(url => url !== undefined); // إزالة أي URL فارغ
}

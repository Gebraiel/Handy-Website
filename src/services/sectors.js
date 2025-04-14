import supabase from "./supabase";
const supabaseUrl = 'https://jdhdpfkykyftmrcqzxcz.supabase.co'

export async function getImagesFromBucket(bucketName, folderPath) {
    const { data, error } = await supabase
    .storage
    .from(bucketName)
    .list('', {
      limit: 100, // عدّل حسب الحاجة
      offset: 0,
      sortBy: { column: 'name', order: 'asc' }
    })
  
    if (error) {
      console.log(`${supabaseUrl}/storage/v1/object/public/${bucketName}/`);
      console.error('خطأ أثناء جلب الصور من الفولدر:', error)
      return []
    }
  
    const imagesArray = data.map(file => ({
      name: file.name,
      url: `${supabaseUrl}/storage/v1/object/public/${bucketName}/${file.name}`
    }))
  
    return imagesArray
  }

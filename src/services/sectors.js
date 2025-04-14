import supabase from "./supabase";
const supabaseUrl = 'https://jdhdpfkykyftmrcqzxcz.supabase.co'

export async function getImagesFromFolder(bucketName, folderPath) {
    const { data, error } = await supabase
      .storage
      .from(bucketName)
      .list(folderPath, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' }
      })
  
    if (error) {
      console.error('خطأ أثناء جلب الصور من الفولدر:', error)
      return []
    }
  
    const imagesArray = data.map(file => ({
      name: file.name,
      url: `${supabaseUrl}/storage/v1/object/public/${bucketName}/${folderPath}/${file.name}`
    }))
  
    return imagesArray
  }

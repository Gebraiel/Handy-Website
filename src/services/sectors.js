import supabase from "./supabase";
const supabaseUrl = 'https://jdhdpfkykyftmrcqzxcz.supabase.co'

export async function getImagesFromBucket(bucketName) {
    const { data, error } = await supabase
    .storage
    .from(bucketName)
    .list('', {
      limit: 100, // عدّل حسب الحاجة
      offset: 0,
      sortBy: { column: 'name', order: 'asc' }
    })

  if (error) {
    console.error('خطأ أثناء جلب الصور:', error)
    return []
  }

  // لو الباكت public – يبقى نقدر نكوّن الرابط المباشر
  const imagesArray = data.map(file => ({
    name: file.name,
    url: `${supabaseUrl}/storage/v1/object/public/${bucketName}/${file.name}`
  }))

  return imagesArray
}



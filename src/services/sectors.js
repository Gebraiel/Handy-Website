import supabase from "./supabase";

export async function getImagesFromBucket(bucketName, folderpath) {
  const { data: files, error } = await supabase
    .storage
    .from(bucketName)
    .list(`${folderpath}/`, { limit: 100, sortBy: { column: 'name', order: 'asc' } });

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

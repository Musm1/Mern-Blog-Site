import supabase from '../supabaseClient';

const uploadImageAndGetUrl = async (file, bucketName) => {
  try {
    const filePath = `${Date.now()}_${file.name}`; // Unique filename
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('Upload error:', error.message);
      throw new Error('Failed to upload image');
    }

    // Get the public URL of the uploaded image
    const { data: publicUrlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath);

    if (!publicUrlData || !publicUrlData.publicUrl) {
      throw new Error('Failed to get public URL');
    }

    return publicUrlData.publicUrl; // Return the URL for MongoDB storage
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export default uploadImageAndGetUrl;

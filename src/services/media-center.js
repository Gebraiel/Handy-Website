import { api } from "../config/axios";

export async function getBlogs(lang){
    try{
        const data = await api.get("media-center/blogs",{headers:{lang}});
        if(data.status && data.data.code === 200){
            const {data:{data:{data:blogs}}} = data
            return {blogs:blogs,error:null};
        }else{
            return {blogs:null,error:{code:data.code,message:"There is something wrong please try again later"}}
        }
    }catch(e){
        return {blogs:null,error:{code:e.code,message:e.message}}
    }
}

export async function getGallery(lang){
    try{
        const data = await api.get("media-center/gallery",{headers:{lang}});
        if(data.status && data.data.code === 200){
            const {data:{data:{data:gallery,media_center_cover}}} = data
            return {gallery:gallery,media_center_cover,error:null};
        }else{
            return {gallery:null,media_center_cover:null,error:{code:data.code,message:"There is something wrong please try again later"}}
        }
    }catch(e){
        return {gallery:null,media_center_cover:null,error:{code:e.code,message:e.message}}
    }
}

export async function getSingleBlog(lang,id){
    try{
        const data = await api.get(`media-center/blogs/${id}`,{headers:{lang}});
        if(data.data.status && data.data.code === 200){
            const {data:{data:{blog,media_center_cover,recommended}}} = data
            const combinedBlog = {...blog,recommended}
            return {blog:combinedBlog,media_center_cover,error:null};
        }else{
            return {blog:null,media_center_cover:null,error:{code:data.code,message:"There is something wrong please try again later"}}
        }
    }catch(e){
        return {blog:null,media_center_cover:null,error:{code:e.code,message:e.message}}
    }
}
export async function getSingleGallery(lang,id){
    try{
        const data = await api.get(`media-center/gallery/${id}`,{headers:{lang}});
        if(data.data.status && data.data.code === 200){
            const {data:{data:{data:gallery,media_center_cover}}} = data
            console.log(media_center_cover);
            return {gallery,media_center_cover,error:null};
        }else{
            return {gallery:null,media_center_cover:null,error:{code:data.code,message:"There is something wrong please try again later"}}
        }
    }catch(e){
        return {gallery:null,media_center_cover:null,error:{code:e.code,message:e.message}}
    }
}
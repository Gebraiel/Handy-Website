function Gallery({ handleClick,images}) {
  console.log(images);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">    
          {
            images.map((img,index)=> 
              <button onClick={()=>handleClick(img)} key={index}>
                <img className="rounded-md" src={img} alt="Gallery Item" />
              </button>
            )
          }
      </div>
  );
}

export default Gallery;
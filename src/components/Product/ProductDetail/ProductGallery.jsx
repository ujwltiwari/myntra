import React from 'react';

const ProductGallery = ({ images, test }) => {
  console.log('images', images);
  // const imageArrSize = images.length / 3;
  return (
    <div className='w-[60%] flex flex-wrap gap-[12px] max-h-[1200px]'>
      {images?.map((image, idx) => {
        return (
          <img src={image} alt='' className='w-[48%] max-h-[600px]' key={idx} />
        );
      })}
    </div>
  );
};

export default ProductGallery;

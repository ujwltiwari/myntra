import React from 'react';

const Selected = () => {
  return (
    <div className='bulkActionStrip-selectionIcon w-[16px] fill-myntraPink absolute cursor-pointer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        className='itemComponents-base-activeProduct '
      >
        <path
          fillRule='evenodd'
          d='M11.83 6.11l-4.751 4.583a.604.604 0 0 1-.425.164h-.003a.608.608 0 0 1-.424-.16L4.176 8.74a.55.55 0 0 1 0-.805.62.62 0 0 1 .846 0l1.57 1.506c.03.028.078.027.107-.001l4.274-4.124a.62.62 0 0 1 .847-.01c.236.22.24.58.01.805M14.285 0H1.714C.77 0 0 .77 0 1.714v12.572C0 15.23.77 16 1.714 16h12.572C15.23 16 16 15.23 16 14.286V1.714C16 .77 15.23 0 14.286 0'
        ></path>
      </svg>
    </div>
  );
};

export default Selected;

import React from 'react';
import { createPortal } from 'react-dom';

const Model = ({isOpen, setIsOpen, header, footer, children}) => {
  return createPortal(
    <div onClick={() => setIsOpen(false)} className={`flex items-center py-4 justify-center inset-0 bg-black/40 fixed ${isOpen ? '' : 'hidden'}`}>
      <div onClick={(e)=> e.stopPropagation()} className='rounded-lg grow max-w-2xl bg-white p-4 shadow-lg'>
        {header}
        <div className='mx-4 my-3 px-4 py-4 border-y flex flex-wrap gap-4'>
         {children}
        </div>
        {footer}
      </div>
    </div>,
     document.getElementById('portal')
  );
};

export default Model;

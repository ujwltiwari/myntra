import { Spinner } from 'flowbite-react';

export default function Loader({ size }) {
  return (
    <div className='text-center'>
      <Spinner
        aria-label='Failure spinner example'
        color='failure'
        size={size || 'lg'}
      />
    </div>
  );
}

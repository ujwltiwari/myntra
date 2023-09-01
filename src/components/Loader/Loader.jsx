import { Spinner } from 'flowbite-react';

export default function Loader() {
  return (
    <div className='text-center'>
      <Spinner aria-label='Failure spinner example' color='failure' size='lg' />
    </div>
  );
}

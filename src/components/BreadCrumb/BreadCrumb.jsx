import Link from 'next/link';

export default function Breadcrumb({ category, name, url }) {
  return (
    <ul className='flex gap-1 text-[13px]'>
      <Link href={'#'}>
        <li className='hover:underline'>Home / </li>
      </Link>
      <Link href={'category'}>
        <li className='hover:underline'>Clothing / </li>
      </Link>
      <Link href={'category'}>
        <li className='hover:underline'>{category} / </li>
      </Link>
      <Link href={'url'}>
        <li className='font-bold'>{name}</li>
      </Link>
    </ul>
  );
}

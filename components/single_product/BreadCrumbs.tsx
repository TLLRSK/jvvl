import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';

function BreadCrumbs({ name }: { name: string }) {
  return (
    <Breadcrumb className='px-3 py-6 border-b-[1px] border-muted'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href='/' className='capitalize text-lg'>
            home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link href='/products' className='capitalize text-lg'>
            products
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className='capitalize text-lg'>{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
export default BreadCrumbs;

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';

function BreadCrumbs() {
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
      </BreadcrumbList>
    </Breadcrumb>
  );
}
export default BreadCrumbs;

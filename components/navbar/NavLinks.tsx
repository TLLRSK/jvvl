import DropdownIcon from '../icons/DropdownIcon';
import ButtonDropdown from './LinksDropdown';
import { Link } from '@/utils/types';
import LinksDropdown from './LinksDropdown';

const links: Link[] = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/products', label: 'products' },
];

function NavLinks() {
  return (
    <LinksDropdown icon={<DropdownIcon className='text-foreground' />} links={links}/>
  );
}

export default NavLinks;
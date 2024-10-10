import DropdownIcon from '../icons/DropdownIcon';
import LinksDropdown from './LinksDropdown';
import { links } from '@/utils/links';

function NavLinks() {
  return (
    <LinksDropdown icon={<DropdownIcon className='text-foreground' />} links={links}/>
  );
}

export default NavLinks;
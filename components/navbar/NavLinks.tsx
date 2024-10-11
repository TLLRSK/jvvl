import DropdownIcon from '../icons/DropdownIcon';

import LinksDropdown from './LinksDropdown';
import { links } from '@/utils/links';

function NavLinks() {
  return (
    <LinksDropdown icon={<DropdownIcon/>} links={links}/>
  );
}

export default NavLinks;
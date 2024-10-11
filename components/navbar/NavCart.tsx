import CartIcon from '../icons/CartIcon'
import { Button } from '../ui/button'

function NavCart() {
  return (
    <Button variant='ghost' size='icon'>
        <CartIcon/>
    </Button>
  )
}

export default NavCart
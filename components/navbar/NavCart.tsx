import Cart from "../cart/Cart";
import CartIcon from "../icons/CartIcon";
import { fetchCartItems } from "@/utils/actions";

async function NavCart() {
  const numItemsInCart = await fetchCartItems();
  return (
    <div className="group">
      <label
        htmlFor="cartToggler"
        className="relative items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 flex gap-4 max-w-[100px] cursor-pointer z-10"
      >
        <CartIcon />
        <div className="w-5 h-5 absolute flex bg-foreground rounded-full content-center -top-2 -right-2">
          <span className="text-secondary font-semibold leading-auto mx-auto">
            {numItemsInCart || 0}
          </span>
        </div>
      </label>

      <input
        type="checkbox"
        name="cartToggler"
        id="cartToggler"
        className="absolute hidden peer/cart"
      />


      <div className="absolute w-full md:w-2/4 lg:w-1/3 2xl:w-1/4 flex top-[61px] right-0 transition-transform z-10 translate-x-full
        group-has-[#cartToggler:not(:checked)]:group-has-[#overlay:checked]:translate-x-0
        group-has-[#cartToggler:checked]:group-has-[#overlay:not(:checked)]:translate-x-0
        ">
        <Cart/>
      </div>

      <label
        htmlFor="overlay"
        className="peer/overlay w-full inset-0 fixed hidden
          group-has-[#cartToggler:not(:checked)]:group-has-[#overlay:checked]:flex
          group-has-[#cartToggler:checked]:group-has-[#overlay:not(:checked)]:flex
          group-has-[#cartToggler:checked]:group-has-[#overlay:checked]:hidden
        "
      >
        <input type="checkbox" name="overlay" id="overlay" className="hidden absolute"/>
      </label>

      
    </div>
  );
}

export default NavCart;

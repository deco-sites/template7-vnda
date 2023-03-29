import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Searchbar from "$store/components/search/Searchbar.tsx";


function Navbar({ items, searchbarProps, scrollPosition }: {
  items: INavItem[];
  searchbarProps: SearchbarProps;
  scrollPosition: number;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] w-full px-2 gap-2`}
      >
        <HeaderButton variant="menu" />

        <a
          href="/"
          class={`flex-grow inline-flex items-center min-h-[${navbarHeight}]`}
          aria-label="Store logo"
        >
          <Icon id="logoVnda" width={124} height={32} stroke-width="1" />
        </a>

        <div class="flex gap-1">
          {/* <HeaderButton variant="search" /> */}
          <HeaderButton variant="cart" />
        </div>
      </div>
      <Searchbar scrollPosition={scrollPosition} {...searchbarProps} />

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center w-full pl-2 pr-3 h-[75px] max-w-[1296px] mx-auto">
        <div class={`flex-none w-44 relative ${scrollPosition == 0 ? 'top-[-75px]' : null}`}>
          <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
            <Icon id="logoVnda" width={124} height={32} />
          </a>
        </div>
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem scrollPosition={scrollPosition} item={item} />)}
        </div>
        <div class={`flex-none w-44 flex items-center justify-end gap-2 relative ${scrollPosition == 0 ? 'top-[-75px]' : null}`}>
          <Button
            as="a"
            variant="icon"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" width={20} height={20} strokeWidth={0.4} />
          </Button>
          <HeaderButton variant="cart" />
        </div>
      </div>
    </>
  );
}

export default Navbar;

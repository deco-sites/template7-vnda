import Container from "$store/components/ui/Container.tsx";
import { useState } from "preact/hooks";
 import ProductShelf from "$store/components/product/ProductShelf.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  titleTab1: string;
  productsTab1: LoaderReturnType<Product[] | null>;
  titleTab2: string;
  productsTab2: LoaderReturnType<Product[] | null>;
}

function TabLayout({
  titleTab1,
  productsTab1,
  titleTab2,
  productsTab2
}: Props) {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index:number) => {
    setToggleState(index);
  };

  return (
    <Container
      class="flex flex-col relative px-[16px] md:px-[32px] max-w-[1296px] gap-[20px] grid grid-cols-[48px_1fr_48px] grid-rows-[48px_1fr_48px] py-10"
    >
      <div className="flex border-b-2 border-[#9499b3]">
        <button
          className={`${toggleState === 1 ? "font-bold border-b-2 border-[#312f4f]" : 'font-light'} relative top-[2px] text-[#312f4f] text-[1.3rem] px-[16px] py-[8px] focus:outline-none`}
          onClick={() => toggleTab(1)}
        >
          {titleTab1}
        </button>
        <button
          className={`${toggleState === 2 ? "font-bold border-b-2 border-[#312f4f]" : 'font-light'} relative top-[2px] text-[#312f4f] text-[1.3rem] px-[16px] py-[8px] focus:outline-none`}
          onClick={() => toggleTab(2)}
        >
          {titleTab2}
        </button>
      </div>

      <div>
        <div
          className={`${toggleState === 1 ? "block" : "hidden"}`}
        >
          <ProductShelf title="" products={productsTab1} hrefSeeMore="" />
        </div>
        <div
          className={`${toggleState === 2 ? "block" : "hidden"}`}
        >
          <ProductShelf title="" products={productsTab2} hrefSeeMore="" />
        </div>
      </div>
    </Container>
  );
}

export default TabLayout;

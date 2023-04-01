import Container from "$store/components/ui/Container.tsx";
import { useState } from "preact/hooks";
 import {
  Props as ProductShelfProps,
} from "$store/components/product/ProductShelf.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
export interface Tab {
  products: LoaderReturnType<Product[] | null>;
  title: string;
}

export interface Props {
  Tabs: Tab[];
}

function TabLayout({
  Tabs
}: Props) {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index:number) => {
    setToggleState(index);
  };

  return (
    <Container
      class="flex flex-col relative px-[16px] md:px-[32px] max-w-[1296px] gap-[20px] grid grid-cols-[48px_1fr_48px] grid-rows-[48px_1fr_48px] py-10"
    >
      <div className="bloc-tabs flex border-b-2 border-[#9499b3]">
        <button
          className={`${toggleState === 1 ? "active-tabs font-bold border-b-2 border-[#312f4f]" : 'font-light'} tabs relative top-[2px] text-[#312f4f] text-[1.3rem] px-[16px] py-[8px] focus:outline-none`}
          onClick={() => toggleTab(1)}
        >
          Ofertas
        </button>
        <button
          className={`${toggleState === 2 ? "active-tabs font-bold border-b-2 border-[#312f4f]" : 'font-light'} tabs relative top-[2px] text-[#312f4f] text-[1.3rem] px-[16px] py-[8px] focus:outline-none`}
          onClick={() => toggleTab(2)}
        >
          Mais vendidos
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={`content ${toggleState === 1 ? "active-content block" : "hidden"}`}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>
        <div
          className={`content ${toggleState === 2 ? "active-content block" : "hidden"}`}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>
      </div>
    </Container>
  );
}

export default TabLayout;

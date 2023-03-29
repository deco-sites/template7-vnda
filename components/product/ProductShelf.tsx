import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useId } from "preact/hooks";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import { animation, keyframes, tw } from "twind/css";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[] | null>;
  itemsPerPage?: number;
}

function Dots({ products, interval = 0 }: {
  products?: LoaderReturnType<Product[] | null>;
  interval?: number;}
  ) {
  return (
    <>
      <ol class="flex items-center justify-center mt-[2.5rem]">
        {products?.map((_, index) => (
          <li class="h-full">
            <button
              data-dot={index}
              aria-label={`go to slider item ${index}`}
              class="h-full rounded focus:outline-none group"
            >
              <svg width={20} height={20}>
                <circle cx="7" cy="7" r="5" stroke="black" fill="transparent" stroke-width="1" />
              </svg>
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

function ProductShelf({
  title,
  products,
}: Props) {
  const id = useId();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <Container
      id={id}
      class="relative px-[16px] md:px-[32px] max-w-[1296px] grid grid-cols-[48px_1fr_48px] grid-rows-[48px_1fr_48px] py-10"
    >
      
      <h2 class="text-[1.4rem] text-[#312f4f] tracking-[.08em] uppercase text-center md:(text-left text-[32px]) row-start-1 col-span-full">
        {title}
      </h2>

      <a class="hidden md:flex absolute right-[32px] top-[46px] w-[110px] h-[35px] border border-[#312f4f] transition-all font-medium rounded justify-center items-center text-[#312f4f] text-[14px] tracking-[.08em] hover:(bg-[#312f4f] text-[#fff])" href={'home-produtos'}>Veja mais</a>
    
      <Slider
        class="gap-[16px] col-span-full mt-[30px] md:mt-[40px]"
        snap="block snap-start"
      >
        {products?.map((product) => (
          <div class="min-w-[44vw] max-w-[44vw] sm:min-w-[46vw] sm:max-w-[46vw] md:(min-w-[29vw] max-w-[29vw]) lg:(min-w-[22vw] max-w-[22vw]) xl:(min-w-[230px] max-w-[230px])">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>

      <>
        <div class="left-[16px] md:left-[32px] max-w-[1296px] relative mt-[2rem] sm:block z-10 col-start-1 row-start-3">
          <div class="absolute right-1/2 bg-interactive-inverse rounded-full border-default border-2 border-[#312f4f]">
            <Button variant="icon" data-slide="prev" aria-label="Previous item">
              <Icon size={20} id="ChevronLeft" strokeWidth={3} />
            </Button>
          </div>
        </div>
        <div class="right-[16px] md:right-[32px] max-w-[1296px] relative mt-[2rem] sm:block z-10 col-start-3 row-start-3">
          <div class="absolute left-1/2 bg-interactive-inverse rounded-full border-default border-2 border-[#312f4f]">
            <Button variant="icon" data-slide="next" aria-label="Next item">
              <Icon size={20} id="ChevronRight" strokeWidth={3} />
            </Button>
          </div>
        </div>
      </>

      <Dots products={products} />

      <SliderControllerJS rootId={id} />
    </Container>
  );
}

export default ProductShelf;

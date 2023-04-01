import Container from "$store/components/ui/Container.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface CategoryProps {
  Image: LiveImage;
  label: string;
  href: string;
}

export interface Props {
  Categories: CategoryProps[];
}

function Categories({Categories}:Props) {
  return (
    <Container class="max-w-[1296px] mx-auto px-[16px] md:px-[32px] my-[2rem]">
      <h2 class="text-[1.4rem] md:text-[32px] mb-[30px] tracking-[.08em] text-center md:text-left text-[#312f4f] font-normal">CATEGORIAS</h2>
      <div class="flex flex-wrap gap-[.8rem] md:gap-[1.5rem]">
        <div class="w-full md:w-[31%] rounded border border-[#c0bfd6] p-[1rem]">
          <a class="flex justify-center items-center" href={Categories[0].href}>
            <img class="w-[40%]" src={Categories[0].Image} alt={Categories[0].label} />
            <h3 class="w-[60%] p-[1rem] pr-0 text-center text-[16px] font-bold">{Categories[0].label}</h3>
          </a>
        </div>
        <div class="w-[48%] md:w-[31%] rounded border border-[#c0bfd6] p-[1rem]">
          <a class="flex justify-center items-center" href={Categories[1].href}>
            <img class="w-[40%]" src={Categories[1].Image} alt={Categories[1].label} />
            <h3 class="w-[60%] p-[1rem] pr-0 text-center text-[16px] font-bold">{Categories[1].label}</h3>
          </a>
        </div>
        <div class="w-[48%] md:w-[31%] rounded border border-[#c0bfd6] p-[1rem]">
          <a class="flex justify-center items-center" href={Categories[2].href}>
            <img class="w-[40%]" src={Categories[2].Image} alt={Categories[2].label} />
            <h3 class="w-[60%] p-[1rem] pr-0 text-center text-[16px] font-bold">{Categories[2].label}</h3>
          </a>
        </div>
        <div class="w-full md:w-[22%] lg:w-[23%] rounded border border-[#c0bfd6] p-[1rem]">
          <a class="flex justify-center items-center" href={Categories[3].href}>
            <img class="w-[40%]" src={Categories[3].Image} alt={Categories[3].label} />
            <h3 class="w-[60%] p-[1rem] pr-0 text-center text-[16px] font-bold">{Categories[3].label}</h3>
          </a>
        </div>
        <div class="w-[48%] md:w-[22%] lg:w-[23%] rounded border border-[#c0bfd6] p-[1rem]">
          <a class="flex justify-center items-center" href={Categories[4].href}>
            <img class="w-[40%]" src={Categories[4].Image} alt={Categories[4].label} />
            <h3 class="w-[60%] p-[1rem] pr-0 text-center text-[16px] font-bold">{Categories[4].label}</h3>
          </a>
        </div>
        <div class="w-[48%] md:w-[22%] lg:w-[23%] rounded border border-[#c0bfd6] p-[1rem]">
          <a class="flex justify-center items-center" href={Categories[5].href}>
            <img class="w-[40%]" src={Categories[5].Image} alt={Categories[5].label} />
            <h3 class="w-[60%] p-[1rem] pr-0 text-center text-[16px] font-bold">{Categories[5].label}</h3>
          </a>
        </div>
        <div class="w-full md:w-[22%] lg:w-[23%] rounded border border-[#c0bfd6] p-[1rem]">
          <a class="flex justify-center items-center" href={Categories[6].href}>
            <img class="w-[40%]" src={Categories[6].Image} alt={Categories[6].label} />
            <h3 class="w-[60%] p-[1rem] pr-0 text-center text-[16px] font-bold">{Categories[6].label}</h3>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Categories;

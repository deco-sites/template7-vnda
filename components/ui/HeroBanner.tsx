import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  Banner: LiveImage;
  title: string;
  description: string;
}

function DoubleBanner(props: Props) {
  return (
    <div class="flex gap-[28px] flex-col md:flex-row mx-auto my-[5rem]">
      <div class="relative">
        <Image
          src={props.Banner}
          alt={props.title}
          width={1920}
          height={328}
          class="w-full"
        />
        <div class="md:(absolute top-[20%] left-[50%] translate-x-[-50%] items-start) max-w-[1296px] h-full w-full flex flex-col justify-center items-center gap-[5px] px-[32px] text-center">
          <h3 class="text-[1.1rem] text-[#312f4f] uppercase mt-[10px]">{props.title}</h3>
          <h1 class="text-[2rem] text-[#312f4f] font-bold leading-10">{props.description}</h1>
        </div>
      </div>
    </div>
  );
}

export default DoubleBanner;

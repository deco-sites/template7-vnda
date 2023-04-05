import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  Banner: LiveImage;
  title: string;
  subTitle: string;
  description?: string;
  overlayBanner: true | false;
}

function DoubleBanner(props: Props) {
  return (
    <div class="flex gap-[28px] flex-col md:flex-row mx-auto mt-[5rem]">
      <div class="relative">
        <Image
          src={props.Banner}
          alt={props.title}
          width={1920}
          height={328}
          loading={'eager'}
          class={`relative z-[-2] w-full ${props.overlayBanner ? 'opacity-60' : ''}`}
        />
        <div class="z-[-1] md:(absolute top-[10%] left-[50%] translate-x-[-50%] items-start) max-w-[1296px] h-full w-full flex flex-col justify-center items-center px-[32px] text-center">
          <h3 class={`${props.description ? 'text-[.8rem]' : 'text-[1rem]'} text-[#312f4f] uppercase mt-[10px]`}>{props.title}</h3>
          <h1 class={`${props.description ? 'text-[1.5rem]' : 'text-[2rem]'} text-[#312f4f] font-bold leading-10`}>{props.subTitle}</h1>
          <p class="text-[.857rem] text-[#312f4f] text-left max-w-[500px]">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default DoubleBanner;

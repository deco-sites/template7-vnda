import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  firstBanner: LiveImage;
  titleFirstBanner: string;
  descriptionFirstBanner: string;
  textFirstCTA: string;
  hrefFirstCTA: string;
  secondBanner: LiveImage;
  titleSecondBanner: string;
  descriptionSecondBanner: string;
  textSecondCTA: string;
  hrefSecondCTA: string;
}

function DoubleBanner(props: Props) {
  return (
    <div class="flex gap-[28px] flex-col md:flex-row max-w-[1296px] mx-auto px-[16px] md:px-[32px] my-[2rem]">
      <div class="relative">
        <Image
          src={props.firstBanner}
          alt={props.titleFirstBanner}
          width={380}
          height={308}
          class="object-cover object-center w-full"
        />
        <div class="absolute bg-[#acacac80] top-0 h-full w-full flex flex-col justify-center items-center gap-[15px] px-[10%] lg:px-[25%] text-center">
          <h3 class="text-[1.6rem] uppercase">{props.titleFirstBanner}</h3>
          <p class="text-[1rem]">{props.descriptionFirstBanner}</p>
          <a class="transition-all rounded text-[#fff] text-[18px] bg-[#312f4f] hover:bg-[#696d8c] w-full uppercase py-[7px]" href={props.hrefFirstCTA}>{props.textFirstCTA}</a>
        </div>
      </div>
      <div class="relative">
        <Image
          src={props.secondBanner}
          alt={props.titleSecondBanner}
          width={380}
          height={308}
          class="object-cover object-center w-full"
        />
        <div class="absolute bg-[#acacac80] top-0 h-full w-full flex flex-col justify-center items-center gap-[15px] px-[10%] lg:px-[25%] text-center">
          <h3 class="text-[1.6rem] uppercase">{props.titleSecondBanner}</h3>
          <p class="text-[1rem]">{props.descriptionSecondBanner}</p>
          <a class="transition-all rounded text-[#fff] text-[18px] bg-[#312f4f] hover:bg-[#696d8c] w-full uppercase py-[7px]" href={props.hrefSecondCTA}>{props.textSecondCTA}</a>
        </div>
      </div>
    </div>
  );
}

export default DoubleBanner;

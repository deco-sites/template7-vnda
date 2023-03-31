import Text from "$store/components/ui/Text.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  newsletterImage: LiveImage;
  newsletterAltImage: string;
  newsletterHrefImage: string;
}

function Newsletter({newsletterImage,newsletterAltImage,newsletterHrefImage}:Props) {
  return (
    <div class="flex flex-col md:(flex-row gap-8)">
      <div class="relative top-[-3rem] md:w-[25%]">
        <a href={newsletterHrefImage}>
          <Image  
            class="w-full"
            src={newsletterImage}
            alt={newsletterAltImage}
            width={370}
            height={300}
            loading="eager"
          />
        </a>
      </div>
      <div class="flex flex-col md:(w-[75%] mt-[1rem]) md:flex-row gap-6 md:gap-20 ">
        <div class="flex md:w-[40%] flex-col gap-2 max-w-[400px] mb-[1rem]">
          <Text class="uppercase text-[#fff] text-[1.17em]">
          Newsletter
          </Text>
          <Text class="text-[#fff] text-[1rem]">
            Descrição da newsletter aqui

          </Text>
        </div>
        <form class="flex md:w-[60%] flex-col md:(flex-row items-baseline) items-center font-body text-body w-full">
          <input
            class="w-full mb-[1rem] md:(w-[90%] mb-0 mr-[.5rem]) text-[12px] py-2 px-3 flex-grow bg-[transparent] rounded text-default-inverse border-1 border-default"
            placeholder="Digite seu e-mail..."
          />
          <button
            class="transition-all hover:(bg-[#fff] text-[#312f4f]) w-full md:(w-[45%]) text-[12px] p-[7px] bg-[transparent] rounded border-1 border-default text-[#fff]"
            type="bgutton" // prevent form's default behavior
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;

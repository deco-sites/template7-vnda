import Container from "$store/components/ui/Container.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";


export interface Props {
  title: string;
  address: string;
  email: string;
  phone: string;
  image: LiveImage;
}

function TreatmentContent({
  title,
  address,
  email,
  phone,
  image,
}: Props) {

  return (
    <Container
      class="px-[16px] md:px-[32px] max-w-[1296px] flex"
    >
      <div class="my-[5rem] flex flex-col gap-[2rem] relative md:(flex-row flex-wrap my-[8rem])">
        <div class="flex flex-col gap-[1rem] md:(order-3 w-[45%] absolute top-[65%]) lg:top-[80%]">
          <h1 class="text-[1.5rem] font-bold text-[#312f4f]">{title}</h1>
          <p class="text-[14px] text-[#312f4f]">{address}</p>
          <p class="text-[14px] text-[#312f4f] font-bold">{email}</p>
          <p class="text-[14px] text-[#312f4f]">{phone}</p>
          <div class="flex flex-row gap-[.5rem] md:pt-0">
            <a class="bg-[#312f4f] rounded-full" href="/">
              <Icon
                id={"Facebook"}
                width={25}
                height={25}
                strokeWidth={1}
                class="text-[#fff]"
              />
            </a>
            <a class="bg-[#312f4f] rounded-full" href="/">
              <Icon
                id={"Instagram"}
                width={25}
                height={25}
                strokeWidth={1}
                class="text-[#fff]"
              />
            </a>
            <a class="bg-[#312f4f] rounded-full" href="/">
              <Icon
                id={"Facebook"}
                width={25}
                height={25}
                strokeWidth={1}
                class="text-[#fff]"
              />
            </a>
            <a class="bg-[#312f4f] rounded-full" href="/">
              <Icon
                id={"Instagram"}
                width={25}
                height={25}
                strokeWidth={1}
                class="text-[#fff]"
              />
            </a>
          </div>
        </div>
        <div class="md:(order-2 w-[45%])">
          <form class="flex flex-col gap-[1rem]">
            <h2 class="uppercase text-[1.5em] text-[#312f4f] font-normal">fale com a gente</h2>
            <label class="flex flex-col gap-[.5rem] text-[#312f4f] font-bold" for="name">
              <span>nome *</span>
              <input class="border-1 border-[#312f4f] focus:outline-none rounded px-[7px] py-[5px]" type="text" name="name" id="name" placeholder="  Seu nome completo..." required />
            </label>
        
            <label class="flex flex-col gap-[.5rem] text-[#312f4f] font-bold" for="email">
              <span>e-mail *</span>
              <input class="border-1 border-[#312f4f] focus:outline-none rounded px-[7px] py-[5px]" type="email" name="email" id="email" placeholder="  Seu email..." required />
            </label>

            <label class="flex flex-col gap-[.5rem] text-[#312f4f] font-bold" for="phone">
              <span>telefone</span>
              <input class="border-1 border-[#312f4f] focus:outline-none rounded px-[7px] py-[5px]" type="tel" name="phone" id="phone" placeholder="  Seu telefone..." required />
            </label>

            <label class="flex flex-col gap-[.5rem] text-[#312f4f] font-bold" for="subject">
              <span>assunto *</span>
              <input class="border-1 border-[#312f4f] focus:outline-none rounded px-[7px] py-[5px]" type="tel" name="subject" id="subject" placeholder="  O assunto..." required />
            </label>
        
            <label class="flex flex-col gap-[.5rem] text-[#312f4f] font-bold" for="message">
              <span>mensagem *</span>
              <textarea class="border-1 border-[#312f4f] focus:outline-none rounded h-[7rem] px-[7px] py-[5px]" name="message" id="message" placeholder="  A sua mensagem..." required></textarea>
            </label>

            <button class="transition hover:(bg-[#312f4f] text-[#fff]) border-1 rounded border-[#312f4f] px-[7px] py-[5px] text-[14px]" type="submit">
              ENVIAR MENSAGEM 
            </button>
          </form>
        </div>
        <div class="md:(order-1 w-[45%])">
          <Image
            src={image}
            class="w-full"
            width={382}
            height={315}
            loading={'eager'}
          />
        </div>
      </div>
    </Container>
  );
}

export default TreatmentContent;

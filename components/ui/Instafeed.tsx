import Container from "$store/components/ui/Container.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Post {
  Image: LiveImage;
  label: string;
  href: string;
}

export interface Props {
  title?: string;
  posts: Post[];
  instaHref?: string;
  instaAt?: string;
}

function Dots({ posts, interval = 0 }: {
  posts?: Post[];
  interval?: number;}
  ) {
  return (
    <>
      <ol class="flex items-center justify-center mt-[2.5rem]">
        {posts?.map((_, index) => (
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

function Instafeed({
  title = 'Instagram',
  posts,
  instaHref = '/',
  instaAt = '@seuinstagram'
}: Props) {
  const id = '1231';

  return (
    <Container
      id={id}
      class="relative px-[16px] md:px-[32px] max-w-[1296px] gap-[20px] grid grid-cols-[48px_1fr_48px] grid-rows-[48px_1fr_48px] py-10"
    >
      
      <h2 class="text-[1.4rem] mb-[20px] text-center text-[#312f4f] tracking-[.08em] uppercase text-center md:(text-[32px]) row-start-1 col-span-full">
        {title}
      </h2>

      <a class="flex absolute top-[100px] w-full mx-auto text-center font-medium justify-center items-center text-[#312f4f] text-[.857rem] tracking-[.08em]" href={instaHref}>{instaAt}</a>
    
      <Slider
        class="gap-[16px] xl:gap-[36px] col-span-full mt-[30px] md:mt-[40px]"
        snap="block snap-start"
      >
        {posts?.map((post) => (
          <div class="min-w-[28vw] md:min-w-[29vw] lg:min-w-[22vw] xl:min-w-[212px] rounded border border-[#c0bfd6]">
            <Image loading="lazy" class="min-w-[28vw] md:min-w-[29vw] lg:min-w-[22vw] xl:min-w-[212px] rounded" width={115} height={115} src={post.Image} />
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

      <Dots posts={posts} />

      <SliderControllerJS rootId={id} />
    </Container>
  );
}

export default Instafeed;

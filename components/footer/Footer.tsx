import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="caption" tone="default-inverse">
      {isIcon(item)
        ? (
          <div class="border-default border-1 py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href} class="font-bold transition-all hover:text-[#9499b3]">
            {item.label}
          </a>
        )}
    </Text>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-[5%] ${_class}`}>{children}</div>;
}

export interface Props {
  sections?: Section[];
  shortDescription: string;
  address: string;
  email: string;
  newsletterImage: LiveImage;
  newsletterAltImage: string;
  newsletterHrefImage: string;
}

function Footer({ sections = [], email, address, shortDescription, newsletterImage, newsletterAltImage, newsletterHrefImage }: Props) {
  return (
    <footer class="w-full bg-[#312f4f] flex flex-col mt-[30px]">
      <div>
        <Container class="max-w-none w-full flex flex-col">
          <FooterContainer class="md:pb-0">
            <Newsletter newsletterHrefImage={newsletterHrefImage} newsletterAltImage={newsletterAltImage} newsletterImage={newsletterImage} />
          </FooterContainer>

          <FooterContainer class="flex flex-row gap-[15px] md:pt-0">
            <a class="bg-[#fff] rounded-full" href="/">
              <Icon
                id={"Facebook"}
                width={25}
                height={25}
                strokeWidth={1}
              />
            </a>
            <a class="bg-[#fff] rounded-full" href="/">
              <Icon
                id={"Instagram"}
                width={25}
                height={25}
                strokeWidth={1}
              />
            </a>
            <a class="bg-[#fff] rounded-full" href="/">
              <Icon
                id={"Facebook"}
                width={25}
                height={25}
                strokeWidth={1}
              />
            </a>
            <a class="bg-[#fff] rounded-full" href="/">
              <Icon
                id={"Instagram"}
                width={25}
                height={25}
                strokeWidth={1}
              />
            </a>
          </FooterContainer>

          <div class="flex flex-col md:(flex-row px-[5%])">
            <FooterContainer class="md:(w-[25%] px-0 pr-[2%] border-r-2 border-default) flex flex-col gap-[1rem] text-[.75rem] text-[#fff]">
              <p>{shortDescription}</p>
              <p>{address}</p>
              <p class="border-b-1 border-default pb-[1rem] md:border-0">{email}</p>
            </FooterContainer>

            <FooterContainer class="md:(w-[75%] px-0 pl-[2%])">
              {/* Desktop view */}
              <ul class="hidden sm:flex flex-row gap-[10%] ">
                {sections.map((section) => (
                  <li>
                    <div>
                      <Text class="text-[1.17em] font-medium text-[#fff] block mb-[2rem]">
                        {section.label}
                      </Text>

                      <ul
                        class={`flex ${
                          isIcon(section.children[0]) ? "flex-row" : "flex-col"
                        } gap-2 pt-2`}
                      >
                        {section.children.map((item) => (
                          <li class="text-[.84rem] mb-[.5rem]">
                            <SectionItem item={item} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Mobile view */}
              <ul class="flex flex-col sm:hidden sm:flex-row gap-4">
                {sections.map((section) => (
                  <li class="mb-[1rem]">
                    <Text variant="body" tone="default-inverse">
                      <details>
                        <summary>
                          {section.label}
                        </summary>

                        <ul
                          class={`flex ${
                            isIcon(section.children[0]) ? "flex-row" : "flex-col"
                          } gap-2 px-2 pt-2`}
                        >
                          {section.children.map((item) => (
                            <li class="mb-[.5rem]">
                              <SectionItem item={item} />
                            </li>
                          ))}
                        </ul>
                      </details>
                    </Text>
                  </li>
                ))}
              </ul>
            </FooterContainer>
          </div>

        </Container>
      </div>

      <div>
        <Container class="max-w-none w-full border-t-1 border-default md:border-0">
          <FooterContainer class="flex justify-between w-full">
            <Text
              class="flex items-center gap-1"
              variant="body"
              tone="default-inverse"
            >
              Powered by{" "}
              <a
                href="https://www.deco.cx"
                aria-label="powered by https://www.deco.cx"
              >
                <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
              </a>
            </Text>

            <ul class="flex items-center justify-center gap-2">
              <li>
                <a
                  href="https://www.instagram.com/deco.cx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram logo"
                >
                  <Icon
                    class="text-default-inverse"
                    width={30}
                    height={30}
                    id="Visa"
                    strokeWidth={1}
                  />
                </a>
              </li>
              <li>
                <a
                  href="http://www.deco.cx/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord logo"
                >
                  <Icon
                    class="text-default-inverse"
                    width={26}
                    height={20}
                    id="Mastercard"
                    strokeWidth={5}
                  />
                </a>
              </li>
            </ul>
          </FooterContainer>
          <FooterContainer class="flex flex-col md:flex-row justify-between w-full">
            <p class="text-center text-[.857rem] text-[#fff] mb-[1rem]">2022 | Nome da Loja Ltda. - CNPJ 00.000.000/0000-00</p>
            <p class="text-center text-[.857rem] text-[#9499b3]">Vnda - Tecnologia em E-commerce</p>
          </FooterContainer>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;

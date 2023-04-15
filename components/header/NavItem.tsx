import Text from "$store/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image?: { src?: string; alt?: string };
  bold?: true | false;
  red?: true | false;
  SeeMore?: true | false;
}

function NavItem({ item, scrollPosition }: { item: INavItem, scrollPosition:number }) {
  const { href, label, children, image, bold, red } = item;

  return (
    <li class="group flex items-center">
      <a href={href} class="px-4 py-3">
        <p
          class={`group-hover:opacity-50 text-[.9rem] text-[#312f4f] flex gap-[5px] ${bold ? 'font-bold' : null} ${red ? 'text-[red]' : null}`}
        >
          {label}
          {children && children.length > 0 && (
            <Icon
              id="ChevronDown"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
          )}
        </p>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class={`fixed invisible hover:visible group-hover:visible bg-default z-50 flex items-start justify-center gap-6 border-t-1 border-b-2 border-default w-screen ${scrollPosition > 0 ? 'mt-[74px]' : 'mt-[170px]' }`}
            style={{ top: "0px", left: "0px" }}
          >
            <ul class="flex items-start justify-center gap-6 relative">
              {children.map((node) => (
                <li class="p-12">
                  <a class="font-bold text-[#312f4f] hover:opacity-50" href={node.href}>
                    <p>{node.label}</p>
                  </a>

                  <ul class="flex flex-col gap-1 mt-4">
                    {node.children?.map((leaf) => {
                      if (leaf.label == "VEJA MAIS") {
                        return (
                          <a class="hover:opacity-50" href={leaf.href}>
                            <Text class="flex gap-[5px]" variant="caption">{leaf.label}
                              <Icon
                                id="ChevronRight"
                                height={15}
                                width={15}
                                strokeWidth={1.5}
                              />  
                            </Text>
                          </a>
                        )
                      } else {
                        return (
                          <li class="mb-[1rem]">
                            <a class="hover:opacity-50" href={leaf.href}>
                              <Text variant="caption">{leaf.label}</Text>
                            </a>
                          </li>
                        )
                      }
                    })}
                  </ul>
                </li>
              ))}
              <li class="px-12 py-0 absolute left-0 bottom-[-20px]">
                <a class="hover:opacity-50" href="#">
                  <Text variant="caption" class="flex gap-[5px]">TODOS OS PRODUTOS
                    <Icon
                      id="ChevronRight"
                      height={15}
                      width={15}
                      strokeWidth={1.5}
                    />  
                  </Text>
                </a>
              </li>
            </ul>
            {image?.src && (
              <div class="flex flex-col gap-[5px]">
                <Image
                  class="p-6"
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={332}
                  loading="lazy"
                />
                <a class=" mb-6 ml-6 hover:opacity-50" href="/">
                  <Text class="flex gap-[5px]" variant="caption">VEJA MAIS
                    <Icon
                      id="ChevronRight"
                      height={15}
                      width={15}
                      strokeWidth={1.5}
                    />  
                  </Text>
                </a>
              </div>
            )}
          </div>
        )}
    </li>
  );
}

export default NavItem;

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
}

function NavItem({ item, scrollPosition }: { item: INavItem, scrollPosition:number }) {
  const { href, label, children, image, bold, red } = item;

  return (
    <li class="group flex items-center">
      <a href={href} class="px-4 py-3">
        <param
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
        </param>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class={`fixed invisible hover:visible group-hover:visible bg-default z-50 flex items-start justify-center gap-6 border-t-1 border-b-2 border-default w-screen ${scrollPosition > 0 ? 'mt-[74px]' : 'mt-[170px]' }`}
            style={{ top: "0px", left: "0px" }}
          >
            <ul class="flex items-start justify-center gap-6">
              {children.map((node) => (
                <li class="p-12">
                  <a class="font-bold text-[#312f4f] hover:opacity-50" href={node.href}>
                    <p>{node.label}</p>
                  </a>

                  <ul class="flex flex-col gap-1 mt-4">
                    {node.children?.map((leaf) => (
                      <li>
                        <a class="hover:underline" href={leaf.href}>
                          <Text variant="caption">{leaf.label}</Text>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            {image?.src && (
              <Image
                class="p-6"
                src={image.src}
                alt={image.alt}
                width={300}
                height={332}
                loading="lazy"
              />
            )}
          </div>
        )}
    </li>
  );
}

export default NavItem;

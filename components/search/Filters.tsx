import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import type {
  Filter,
  FilterToggle,
  ProductListingPage,
} from "deco-sites/std/commerce/types.ts";
import { useState } from "preact/hooks";
import Icon from "$store/components/ui/Icon.tsx";

interface MoreFilter extends FilterToggle {
  visibility: boolean
}

interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function FilterValues({ key, values, visibility }: MoreFilter) {
  const flexDirection = key === "tamanho" || key === "cor"
    ? "flex-row"
    : "flex-col";

  return (
    <ul class={`flex flex-wrap gap-2 ${flexDirection} ${visibility ? 'hidden' : ''}`}>
      {values.map(({ label, value, url, selected, quantity }) => {
        if (key === "cor") {
          return (
            <a href={url}>
              <Avatar
                // deno-lint-ignore no-explicit-any
                content={value as any}
                disabled={selected}
                variant="color"
              />
            </a>
          );
        }

        if (key === "tamanho") {
          return (
            <a href={url}>
              <Avatar
                content={label}
                disabled={selected}
                variant="abbreviation"
              />
            </a>
          );
        }

        return (
          <a href={url} class="flex items-center gap-2">
            <div class="border w-[15px] h-[15px] border rounded-full"></div>
            <input type="checkbox" checked={selected} class="hidden" />
            <Text variant="caption">{label}</Text>
          </a>
        );
      })}
    </ul>
  );
}

export default function Filters({ filters }: Props) {
  return (
    <ul class="flex flex-col gap-6 p-4">
      {filters
        .filter(isToggle)
        .map((filter) => {

          const [visibility, setVisibility] = useState(false);

          const handleToggle = () => {
            if(visibility) {
              setVisibility(false)
            } else {
              setVisibility(true)
            }
          }


          return (
          <li class="flex flex-col gap-4">
            <p class="font-bold text-[#312f4f] flex justify-between items-center cursor-pointer" onClick={handleToggle}>
              {filter.label} 
              <Icon
                id="ChevronDown"
                height={20}
                width={20}
                strokeWidth={2}
              />
            </p>
            <FilterValues {...filter} visibility={visibility} />
          </li>
          )
        })}
    </ul>
  );
}

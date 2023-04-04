import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Sort from "$store/components/search/Sort.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/types.ts";
import { useMemo } from "preact/hooks"

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
}

function NotFound() {
  return <div />;
}

function Controls({ page }: { page: ProductListingPage }) {
  const open = useSignal(false);
  const filters = page?.filters;
  const breadcrumb = page?.breadcrumb;

  const headingText = useMemo(() => {
    const url = window.location
    const urlSearchParams = new URLSearchParams(window.location?.search);

    let headingText
    if(window.location?.pathname === "/s"){
        headingText = urlSearchParams.get("q") ?? ""
    } else{
        headingText = ''
    }
    
    return headingText;
  },[])

  return (
    <Container class="relative flex flex-col justify-between mb-4 md:mb-0 p-4 md:p-0 sm:gap-4 sm:flex-row sm:h-[53px] mt-[3rem] md:mt-[8rem]">
      {
        headingText && 
        <div class="md:(w-full absolute top-[-20px] z-[-1])">
          <h1 class="font-normal w-full py-[30px] tracking-[.08em] uppercase text-[1.4rem] md:(text-[32px]) text-[#312f4f] flex justify-center items-center uppercase">{`BUSCA POR: "${headingText}"`} </h1>
        </div>
      }
      <div class="flex flex-row items-center sm:p-0 mb-2">
        <Breadcrumb itemListElement={breadcrumb?.itemListElement} />
      </div>
      <div class="flex flex-row sm:gap-4 items-center justify-between">
        <button
          onClick={() => {
            open.value = true;
          }}
          class="md:hidden w-full h-[2rem] border-2 border-[#312f4f] rounded"
        >
          FILTRAR
        </button>
        <Sort />
      </div>

      <Modal
        title=""
        mode="sidebar-left"
        open={open.value}
        onClose={() => {
          open.value = false;
        }}
      >
        <Filters filters={filters} />
      </Modal>
    </Container>
  );
}

function SearchControls({ page }: Props) {
  if (!page || !page.filters || page.filters.length === 0) {
    return <NotFound />;
  }

  return <Controls page={page} />;
}

export default SearchControls;

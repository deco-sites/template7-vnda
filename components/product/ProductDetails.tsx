import Image from "deco-sites/std/components/Image.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";

import ProductSelector from "./ProductVariantSelector.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function Details({ page }: { page: ProductDetailsPage }) {
  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    image: images,
    name,
    gtin,
  } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);
  const [front, back] = images ?? [];
  console.log(product)
  return (
    <Container class="mt-[4rem] md:mt-[6rem]">
      <div class="flex flex-col gap-4 sm:flex-row sm:gap-10">
        <div class="flex-auto px-4 md:hidden">
          <div class="mt-4 mb-[30px] sm:mt-8">
            <div>
              <Text class="text-[14px] text-[#696d8c]" tone="subdued" variant="caption">
                {gtin}
              </Text>
            </div>
            <h1>
              <p class="text-[#312f4f] text-[32px] font-bold leading-[38px]">{name}</p>
            </h1>
          </div>
          {/* Prices */}
          <div class="mt-4">
            <div class="flex flex-col gap-2">
              <p
                class="line-through text-[red] text-[.857rem] font-bold"
              >
                {formatPrice(listPrice, offers!.priceCurrency!)}
              </p>
              <p class="text-[30px] font-bold text-[#312f4f]">
                {formatPrice(price, offers!.priceCurrency!)}
              </p>
            </div>
              <p class="text-[.857rem] text-[#312f4f] opacity-70">
              {installments}
            </p>
          </div>
        </div>
        {/* Image Gallery */}
        <div class="flex md:w-[60%] flex-row overflow-auto snap-x snap-mandatory scroll-smooth sm:gap-2">
          {[front, back ?? front].map((img, index) => (
            <Image
              style={{ aspectRatio: "414 / 414" }}
              class="snap-cente w-full"
              src={img.url!}
              alt={img.alternateName}
              width={414}
              height={414}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        {/* Product Info */}
        <div class="flex-auto md:w-[40%] px-4 sm:px-0">
          {/* Code and name */}
          <div class="hidden md:block mt-4 sm:mt-8">
            <div>
              <Text class="text-[14px] text-[#696d8c]" tone="subdued" variant="caption">
                {gtin}
              </Text>
            </div>
            <h1>
              <p class="text-[#312f4f] text-[32px] font-bold leading-[38px]">{name}</p>
            </h1>
          </div>
          {/* Prices */}
          <div class="hidden md:block mt-4">
            <div class="flex flex-col">
              <p
                class="line-through text-[red] text-[.857rem] font-bold"
              >
                {formatPrice(listPrice, offers!.priceCurrency!)}
              </p>
              <p class="text-[30px] font-bold text-[#312f4f]">
                {formatPrice(price, offers!.priceCurrency!)}
              </p>
            </div>
            <p class="text-[.857rem] text-[#312f4f] opacity-70">
              {installments}
            </p>
          </div>
          {/* Description card */}
          <div class="mt-4 sm:mt-6">
            <Text variant="caption">
              {description && (
                <div class="ml-2 mt-2 text-[14px] text-[#312f4f]">{description}</div>
              )}
            </Text>
          </div>
          {/* Sku Selector */}
          <div class="mt-4 sm:mt-6">
            <ProductSelector product={product} />
          </div>
          {/* Add to Cart and Favorites button */}
          <div class="mt-4 sm:mt-10 flex flex-col gap-2">
            {seller && (
              <AddToCartButton
                skuId={productID}
                sellerId={seller}
              />
            )}
          </div>
          <div class="h-[1px] w-full my-[40px] bg-[#312f4f]"></div>
          <div>
            <form>
              <p class="mb-[10px] text-[#312f4f] text-[16px] font-bold">calcular frete e prazo</p>
              <div class="flex gap-[8px]">
                <input class="w-[50%] font-medium text-[14px] p-[10px] border-1 border-[#312f4f] rounded" name="cep" maxLength={9} placeholder="CEP" type="text" required />
                <button class="w-[50%] text-[#312f4f] font-bold text-[14px] p-[10px] border-2 border-[#b0aecf] rounded" type="submit" text-original="calcular" text-progress="calculando">CALCULAR</button>
              </div>
            </form>
          </div>
          <div class="h-[1px] w-full my-[40px] bg-[#312f4f]"></div>
          <div>
            <p class="font-bold text-[16px] mb-[.8rem] text-[#312f4f]">compartilhar</p>
            <div class="flex flex-row gap-[.5rem]">
              <a href="/">
                <Icon
                  id={"Facebook"}
                  width={25}
                  height={25}
                  strokeWidth={1}
                />
              </a>
              <a  href="/">
                <Icon
                  id={"Instagram"}
                  width={25}
                  height={25}
                  strokeWidth={1}
                />
              </a>
              <a href="/">
                <Icon
                  id={"Facebook"}
                  width={25}
                  height={25}
                  strokeWidth={1}
                />
              </a>
              <a href="/">
                <Icon
                  id={"Instagram"}
                  width={25}
                  height={25}
                  strokeWidth={1}
                />
              </a>
            </div>
          </div>
          <div class="h-[1px] w-full my-[40px] bg-[#312f4f]"></div>
        </div>
      </div>
    </Container>
  );
}

function ProductDetails({ page }: Props) {
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;

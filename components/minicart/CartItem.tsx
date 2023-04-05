import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import QuantitySelector from "$store/components/ui/QuantitySelector.tsx";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";

interface Props {
  index: number;
}

function CartItem({ index }: Props) {
  const { loading, cart, updateItems } = useCart();
  const item = cart.value!.items[index];
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;
  const {
    imageUrl,
    skuName,
    sellingPrice,
    listPrice,
    name,
    quantity,
  } = item;
  console.log(item)
  const isGift = sellingPrice < 0.01;

  return (
    <div class="flex flex-row justify-between items-end gap-4 bg-[#fff]">
      <Image
        src={imageUrl}
        alt={skuName}
        width={82}
        height={82}
        class="object-cover object-center"
      />
      <div class="flex-grow">
        <p class="text-[.875rem] text-[#9499b3] font-medium">
          {name}
        </p>
        <p class="text-[.7rem] text-[#9499b3]">
          {skuName}
        </p>
        <div class="flex items-center gap-2 justify-end relative right-[-45px]">
          <p class="text-[.875rem] text-[#000] font-medium" >
            {isGift
              ? "Grátis"
              : formatPrice(sellingPrice / 100, currencyCode!, locale)}
          </p>
        </div>
        <div class="mt-2">
          <QuantitySelector
            disabled={loading.value || isGift}
            quantity={quantity}
            onChange={(quantity) =>
              updateItems({ orderItems: [{ index, quantity }] })}
          />
        </div>
      </div>
      <Button
        onClick={() => updateItems({ orderItems: [{ index, quantity: 0 }] })}
        disabled={loading.value || isGift}
        loading={loading.value}
        variant="icon"
      >
        <Icon id="Trash" width={20} height={20} />
      </Button>
    </div>
  );
}

export default CartItem;

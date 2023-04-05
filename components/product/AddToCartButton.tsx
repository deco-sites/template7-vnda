import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";

interface Props {
  skuId: string;
  sellerId: string;
}

function AddToCartButton({ skuId, sellerId }: Props) {
  const props = useAddToCart({
    skuId,
    sellerId,
  });

  return (
    <button data-deco="add-to-cart" {...props} class="w-full text-[18px] bg-[#312f4f] p-[2px] rounded tracking-[.08em] text-[#fff]">
      ADICIONAR AO CARRINHO
    </button>
  );
}

export default AddToCartButton;

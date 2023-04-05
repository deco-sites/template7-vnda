import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";

interface Props {
  skuId: string;
  sellerId: string;
  quantity?: number;
}

function AddToCartButton({ skuId, sellerId, quantity = 1 }: Props) {
  const props = useAddToCart({
    skuId,
    sellerId,
    quantity
  });

  return (
    <button data-deco="add-to-cart" {...props} class="w-full text-[18px] bg-[#312f4f] p-[2px] rounded tracking-[.08em] text-[#fff]">
      ADICIONAR AO CARRINHO
    </button>
  );
}

export default AddToCartButton;

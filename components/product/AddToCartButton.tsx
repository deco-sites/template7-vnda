import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";
import { useState } from "preact/hooks";

interface Props {
  skuId: string;
  sellerId: string;
  quantity?: number;
}

function AddToCartButton({ skuId, sellerId}: Props) {
  const props = useAddToCart({
    skuId,
    sellerId
  });

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (op:string) => {
    if(op == '-' && quantity > 1) {
      setQuantity(quantity - 1)
    } else if (op == '+') {
      setQuantity(quantity + 1)
    }
  }

  return (
    <>
      <div>
        <div>
          <div class="md:min-w-[164px] border-1 border-[#312f4f] h-[38px] rounded flex justify-between">
            <button onClick={() => handleQuantity('-')} type="button" class="focus:outline-none ml-[16px] text-[32px] flex items-center">
              −
            </button>
            <input type="text" id="quantity" name="quantity" class="focus:outline-none max-w-[70px] font-bold text-[14px] text-center" readonly value={quantity} />
            <button onClick={() => handleQuantity('+')} type="button" class="focus:outline-none mr-[16px] text-[32px] flex items-center">
              +
            </button>
          </div>
        </div>
      </div>
      <button data-deco="add-to-cart" {...props} class="w-full text-[18px] lg:text-[14px] bg-[#312f4f] p-[2px] rounded tracking-[.08em] text-[#fff]">
        ADICIONAR AO CARRINHO
      </button>
    </>
  );
}

export default AddToCartButton;

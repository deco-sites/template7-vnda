import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";

import { useUI } from "../../sdk/useUI.ts";
import CartItem from "./CartItem.tsx";
import Coupon from "./Coupon.tsx";

const CHECKOUT_URL =
  "https://bravtexfashionstore.vtexcommercestable.com.br/checkout";

function Cart() {
  const { displayCart } = useUI();
  const { cart, loading } = useCart();
  const isCartEmpty = cart.value?.items.length === 0;
  const total = cart.value?.totalizers.find((item) => item.id === "Items");
  const discounts = cart.value?.totalizers.find((item) =>
    item.id === "Discounts"
  );
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;

  if (cart.value === null) {
    return null;
  }

  // Empty State
  if (isCartEmpty) {
    return (
      <div class="flex flex-col justify-center items-center h-full gap-6">
        <Text variant="heading-2">Sua sacola está vazia</Text>
        <Button
          variant="secondary"
          onClick={() => {
            displayCart.value = false;
          }}
        >
          Escolher produtos
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Cart Items */}
      <ul
        role="list"
        class="mt-6 p-6 flex-grow-1 overflow-y-auto flex flex-col gap-6 bg-[#F9FAFB]"
      >
        {cart.value.items.map((_, index) => (
          <li>
            <CartItem index={index} key={index} />
          </li>
        ))}
      </ul>

      {/* Cart Footer */}
      <footer>
        {/* Subtotal */}
        <div class="py-4 flex flex-col gap-4">
          {discounts?.value && (
            <div class="flex justify-between items-center px-4">
              <Text variant="caption">Descontos</Text>
              <Text variant="caption">
                {formatPrice(discounts.value / 100, currencyCode!, locale)}
              </Text>
            </div>
          )}
          <Coupon />
        </div>
        {/* Total */}
        {total?.value && (
          <div class="pt-4 flex flex-col justify-end items-end gap-2 mx-4">
            <div class="flex justify-between items-center w-full">
              <p class="text-[.875rem] text-[#000] font-bold">Subtotal</p>
              <p>
                {formatPrice(total.value / 100, currencyCode!, locale)}
              </p>
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-[.8rem] text-[#000] font-bold">Frete</p>
              <p class="text-[.7rem] text-[#000]">Calculado na próxima etapa</p>
            </div>
          </div>
        )}
        <div class="p-4">
          <a
            class="inline-block w-full"
            target="_blank"
            href={`${CHECKOUT_URL}?orderFormId=${cart.value!.orderFormId}`}
          >
            <button
              data-deco="buy-button"
              class="w-full bg-[#312f4f] text-[#fff] p-[1rem] hover:bg-[#9499b3] transition"
              disabled={loading.value || cart.value.items.length === 0}
            >
              <div class="flex justify-between text-[12px]">
                <p>Finalizar pedido</p>
                {total?.value && (
                  <p>{formatPrice(total.value / 100, currencyCode!, locale)}</p>
                )}
              </div>
              
            </button>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Cart;

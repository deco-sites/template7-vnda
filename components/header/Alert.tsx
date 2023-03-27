import Text from "$store/components/ui/Text.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { useId, useState  } from "preact/hooks";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Alerts {
  alert: string;
  icon: AvailableIcons;
}

export interface Props {
  alerts: Alerts[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
  scrollPosition: number;
}

function Alert({ alerts = [], interval = 5, scrollPosition }: Props) {
  const id = useId();

  const [show, setShow] = useState(false);

  return (
    <div id={id} class={`relative ${show ? 'hidden' : ''} ${scrollPosition > 0 ? 'hidden' : ''}`}>
      <Slider class="bg-badge gap-6 scrollbar-none">
        {alerts.map((alert) => (
          <Text
            class="flex justify-center items-center w-screen py-[.357rem] px-[5%] text-[.857rem] tracking-[1px] leading-[1.286rem]"
            variant="caption"
            tone="default-inverse"
          >
            {alert}
          </Text>
        ))}
      </Slider>
      <Icon onClick={() => setShow(true)} class="text-white absolute top-[9px] right-[10px]" id="XMark" width={15} height={15} strokeWidth={2} />
      <SliderControllerJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default Alert;

import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

export interface Feature {
  /**
   * @description Image src
   */
  icon: AvailableIcons;
  /**
   * @description Title
   */
  title: string;
}

export interface Props {
  features: Feature[];
}

function FeatureHighlights(
  { features }: Props,
) {
  return (
    <Container class="min-h-[280px] p-6 px-[16px] md:px-[32px] md:py-10">
      <div class="">
        <div class="flex flex-col justify-evenly md:(flex-row gap-4)">
          {features.map(({ icon: id = "Truck", title }) => (
            <div class="flex flex-row gap-4 py-6">
              <Icon
                id={id}
                width={40}
                height={40}
                strokeWidth={2}
              />
              <div class="flex justify-center items-center">
                <Text class="font-normal text-[16px] text-[#312f4f]">{title}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default FeatureHighlights;

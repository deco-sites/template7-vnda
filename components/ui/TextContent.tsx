export interface Props {
  title: string;
  description: string;
}

function TextContent(props: Props) {
  return (
    <div class="flex gap-[28px] flex-col justify-center md:flex-row mx-auto mb-[2rem]">
      <div class="md:max-w-[1000px] h-full w-full flex flex-col gap-[5px] px-[16px] md:px-[32px]">
        <h2 class="leading-8 text-[1.3rem] xl:text-[1.5rem] text-[#312f4f] uppercase mb-[10px]">{props.title}</h2>
        <p class="text-[14px] md:text-[1rem] xl:text-[1.3rem] text-[#9499b3]">{props.description}</p>
      </div>
    </div>
  );
}

export default TextContent;

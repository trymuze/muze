import type { NextPage } from "next";

export type Depth5FrameType = {
  depth7Frame0?: string;
  janeSmith?: string;
  founderCEO?: string;
};

const Depth5Frame: NextPage<Depth5FrameType> = ({
  depth7Frame0,
  janeSmith,
  founderCEO,
}) => {
  return (
    <div className="flex-1 rounded-lg bg-whitesmoke box-border flex flex-col items-start justify-start py-4 pr-[18px] pl-4 gap-[12px_0px] min-w-[205px] max-w-[223px] text-left text-base text-gray font-plus-jakarta-sans border-[1px] border-solid border-lavender">
      <div className="flex flex-col items-start justify-start">
        <img
          className="w-10 h-10 relative rounded-xl overflow-hidden shrink-0 object-cover"
          loading="eager"
          alt=""
          src={depth7Frame0}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px_0px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start">
            <b className="relative leading-[20px]">{janeSmith}</b>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-sm text-steelblue">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative leading-[21px]">{founderCEO}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth5Frame;

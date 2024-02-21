import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Depth7FrameType = {
  depth9Frame0?: string;
  audienceInsights?: string;
  understandYourAudienceWit?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const Depth7Frame: NextPage<Depth7FrameType> = ({
  depth9Frame0,
  audienceInsights,
  understandYourAudienceWit,
  propHeight,
}) => {
  const depth7Frame0Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className="h-[236.4px] flex flex-col items-start justify-start gap-[12px_0px] text-left text-base text-gray font-plus-jakarta-sans"
      style={depth7Frame0Style}
    >
      <div className="self-stretch h-[125.4px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
          loading="eager"
          alt=""
          src={depth9Frame0}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[24px] font-medium">
            {audienceInsights}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-sm text-steelblue">
          <div className="self-stretch relative leading-[21px]">
            {understandYourAudienceWit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth7Frame;

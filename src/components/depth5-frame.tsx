import type { NextPage } from "next";
import Image from "next/image";

export type Depth5FrameType = {
  depth7Frame0?: string;
  janeSmith?: string;
  founderCEO?: string;
  linkedinUrl?: string; // Include the LinkedIn URL in the props
};

const Depth5Frame: NextPage<Depth5FrameType> = ({
  depth7Frame0,
  janeSmith,
  founderCEO,
  linkedinUrl, // Destructure the linkedinUrl from the props
}) => {
  return (
    <div className="flex-1 rounded-lg bg-whitesmoke box-border flex flex-col items-center justify-center py-4 pr-[18px] pl-4 gap-[12px_0px] min-w-[205px] max-w-[223px] text-center text-base text-gray font-plus-jakarta-sans border-[1px] border-solid border-lavender">
      <div className="flex items-center justify-center text-center">
        <Image
          className="w-20 h-20 relative rounded-xl overflow-hidden object-cover"
          loading="eager"
          alt=""
          width={200}
          height={200}
          src={depth7Frame0 || ""}
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[4px_0px]">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-center justify-start">
            {/* Use an <a> tag for the LinkedIn link */}
            {linkedinUrl ? (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative leading-[20px] text-black no-underline  font-bold cursor-pointer hover:scale-105 hover:text-blue-800"
              >
                {janeSmith}
              </a>
            ) : (
              <b className="relative leading-[20px]">{janeSmith}</b>
            )}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start text-sm text-steelblue">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="relative leading-[21px]">{founderCEO}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth5Frame;

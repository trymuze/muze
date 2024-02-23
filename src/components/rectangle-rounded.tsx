import type { NextPage } from "next";
import Depth7Frame from "./depth7-frame";
import Depth5Frame from "./depth5-frame";

export type Depth5FrameType = {
  depth7Frame0?: string;
  janeSmith?: string;
  founderCEO?: string;
  linkedinUrl?: string; // Add this line
};

import HeroCarousel from '../components/HeroCarousel'; // Adjust the path as necessary

const RectangleRounded: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[60px_0px] max-w-full text-left text-17xl text-gray font-plus-jakarta-sans mq975:gap-[60px_0px]" style={{fontFamily:"Locke"}}>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-4 pb-5 box-border gap-[40px_0px] max-w-full mq700:gap-[40px_0px]">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
          <div className="w-[720px] flex flex-col items-start justify-start gap-[16px_0px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <h1 className="m-0 relative text-inherit tracking-[-1.19px] leading-[45px] font-extrabold font-inherit inline-block max-w-full mq450:text-3xl mq450:leading-[27px] mq950:text-10xl mq950:leading-[36px]" style={{fontFamily:"Pontiac"}}>
                  The CRM built for creators
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-base">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="relative leading-[24px] inline-block max-w-full">
                  Discover the features that will help you grow and manage your
                  audience.
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="self-stretch grid flex-row items-start justify-start gap-[0px_12px] shrink-0 grid-cols-[repeat(4,_minmax(167px,_1fr))] text-base mq450:grid-cols-[minmax(167px,_1fr)] mq950:justify-center mq950:grid-cols-[repeat(2,_minmax(167px,_290px))]">
          <Depth7Frame
            depth9Frame0="/Depth-9-Frame-0.png"
            audienceInsights="Understand your audience"
            understandYourAudienceWit="Get detailed insights to understand your audience."
          />
          <Depth7Frame
            depth9Frame0="/Depth-9-Frame-0-1.png"
            audienceInsights="Personalization"
            understandYourAudienceWit="Deliver personalized messages at scale with dynamic content."
            propHeight="236.4px"
          />
          <Depth7Frame
            depth9Frame0="/Depth-9-Frame-0-2.png"
            audienceInsights="Segmentation"
            understandYourAudienceWit="Create segments based on any combination of attributes and behaviors."
            propHeight="unset"
          />
          <Depth7Frame
            depth9Frame0="/Depth-9-Frame-0.png"
            audienceInsights="Make more money"
            understandYourAudienceWit="Notify your fans the minute your tickets released"
            propHeight="236.4px"
          />
        </div>
      </div>

              
      <div className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
  <div className="w-[720px] flex flex-col items-start justify-start gap-[16px_0px] max-w-full">
    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <h1 className="m-0 relative text-inherit tracking-[-1.19px] leading-[45px] font-extrabold font-inherit inline-block max-w-full mq450:text-3xl mq450:leading-[27px] mq950:text-10xl mq950:leading-[36px]" style={{ fontFamily: "Pontiac", color: "#333333" }}>
          We<span style={{ fontFamily: "Arial" }}>&apos;</span>re looking to bring<span style={{ fontFamily: "Arial" }}>...</span>
        </h1>
      </div>
    </div>
    <div className="self-stretch flex flex-col items-start justify-start max-w-full text-base text-gray-700">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="relative leading-[24px] inline-block max-w-full">
          AI-based influencers for D<span style={{ fontFamily: "Arial" }}>2</span>C businesses to elevate Customer Interaction experience at all points.
        </div>
        <p className="mt-4">
          From Social media to Customer service, the face of your business will run the show.
        </p>
      </div>
    </div>
  </div>
</div>





      

      
      <div className="w-[770px] flex flex-row items-start justify-start py-0 pr-[11px] pl-0 box-border max-w-full text-center text-base bg-white rounded-lg text-steelblue">
        <div className="flex-1 flex flex-col items-center justify-start gap-[24px_0px] max-w-full">

          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-2.5">
            <div className="flex flex-row items-start justify-start gap-[0px_16px]">
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-px pl-[9px]">
            <div className="relative leading-[24px]" style={{fontFamily:"Pontiac"}}>
              ©202<span style={{fontFamily:"Arial"}}>4</span> Muze
              <a href = "mailto:contact@trymuze.com" style={{textDecoration:"None"}}>
              <p className="text-black">contact<span style={{fontFamily:"Arial",fontSize:"16px", color:"#000"}}>@</span>trymuze.com</p>
              </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectangleRounded;

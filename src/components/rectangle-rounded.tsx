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
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px_0px] max-w-full mq700:gap-[40px_0px]">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-4 box-border max-w-full">
          <div className="w-[720px] flex flex-col items-start justify-start gap-[16px_0px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h1 className="m-0 relative text-inherit tracking-[-1.19px] leading-[45px] font-extrabold font-inherit mq450:text-3xl mq450:leading-[27px] mq950:text-10xl mq950:leading-[36px]" style={{fontFamily:"Pontiac"}}>
                  How it works
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-base">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="relative leading-[24px] inline-block max-w-full">
                  Learn how our creator CRM can help you manage and monetize your
                  audience.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-4 gap-[0px_12px] text-base mq950:flex-wrap">
          <div className="flex-1 rounded-lg bg-[#8CAFE1] box-border flex flex-col items-start justify-start py-4 pr-[18px] pl-4 gap-[12px_0px] min-w-[205px] max-w-[223px] border-[1px] border-solid border-lavender">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-6 h-6 relative overflow-hidden shrink-0">
                {/* <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-1.svg"
                /> */}
                <div className="absolute top-[-1214.4px] left-[-187px] w-[19px] h-[17px]" />
              </div>
            </div>
            <div className="self-stretch h-[107px] flex flex-col items-start justify-start gap-[4px_0px]">
              <div className="self-stretch h-10 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <b className="w-[138px] relative leading-[20px] inline-block" style={{fontFamily:"Pontiac"}}>
                    Understand your audience
                  </b>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start text-sm text-white">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="w-[185px] relative leading-[21px] inline-block">
                    Get detailed insights to understand your
                    audience.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-[#8CAFE1] box-border flex flex-col items-start justify-start py-4 pr-[18px] pl-4 gap-[12px_0px] min-w-[205px] max-w-[223px] min-h-[177px] border-[1px] border-solid border-lavender mq950:min-h-[auto]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-6 h-6 relative overflow-hidden shrink-0">
                {/* <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-2.svg"
                /> */}
                <div className="absolute top-[-1214.4px] left-[-422px] w-[19px] h-5" />
              </div>
            </div>
            <div className="self-stretch h-[87px] flex flex-col items-start justify-start gap-[4px_0px]">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <b className="relative leading-[20px]" style={{fontFamily:"Pontiac"}}>
                    Scale your <br/> engagement
                  </b>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start text-sm text-white">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[21px]">
                    Automate workflows, save time and gain attraction.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-[#8CAFE1] box-border flex flex-col items-start justify-start py-4 pr-[18px] pl-4 gap-[12px_0px] min-w-[205px] max-w-[223px] border-[1px] border-solid border-lavender">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-6 h-6 relative overflow-hidden shrink-0">
                {/* <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-3.svg"
                /> */}
                <div className="absolute top-[-1214.4px] left-[-657px] w-6 h-[15px]" />
              </div>
            </div>
            <div className="self-stretch h-[107px] flex flex-col items-start justify-start gap-[4px_0px]">
              <div className="self-stretch h-10 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <b className="w-[167px] relative leading-[20px] inline-block" style={{fontFamily:"Pontiac"}}>
                    Create personalized experiences
                  </b>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start text-sm text-white">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="w-[154px] relative leading-[21px] inline-block">
                    Deliver personalized messages at scale.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-[#8CAFE1] box-border flex flex-col items-start justify-start py-4 pr-[18px] pl-4 gap-[12px_0px] min-w-[205px] max-w-[223px] border-[1px] border-solid border-lavender">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-6 h-6 relative overflow-hidden shrink-0">
                {/* <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-4.svg"
                /> */}
                <div className="absolute top-[-1214.4px] left-[-892px] w-[22px] h-[17px]" />
              </div>
            </div>
            <div className="self-stretch h-[107px] flex flex-col items-start justify-start gap-[4px_0px]">
              <div className="self-stretch h-10 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <b className="w-[184px] relative leading-[20px] inline-block" style={{fontFamily:"Pontiac"}}>
                    Make more money with your drops
                  </b>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start text-sm text-white">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="w-[185px] relative leading-[21px] inline-block" >
                    Notify your fans the minute your tickets release.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-3xl">
          <div className="self-stretch flex flex-row items-start justify-start pt-5 px-4 pb-3">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <h3 className="m-0 relative text-inherit tracking-[-0.33px] leading-[27.5px] font-bold font-inherit mq450:text-lg mq450:leading-[22px]" style={{fontFamily:"Pontiac", fontSize:"34px"}}>
                  Meet the team
                </h3>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-4 gap-[0px_12px] text-center">
            <Depth5Frame
              depth7Frame0="/satyam.jpg"
              janeSmith="Satyam Gupta"
              founderCEO={`Co-founder & CEO`}
              linkedinUrl="https://www.linkedin.com/in/satyam-gupta-spjimr/"
            />
            <Depth5Frame
              depth7Frame0="/satyajeet.jpg"
              janeSmith="Satyajeet Das"
              founderCEO={`Co-founder & CTO`}
              linkedinUrl="https://www.linkedin.com/in/satyajeetdas/"
            />
            <Depth5Frame
              depth7Frame0="/pranjal.jpg"
              janeSmith="Pranjal Animesh"
              founderCEO={`Co-founder & CIO`}
              linkedinUrl="https://www.linkedin.com/in/pranjalanimesh/"
            />
            <Depth5Frame
              depth7Frame0="/sameejpg.jpg"
              janeSmith="Sameer Akhtar"
              founderCEO={`Co-founder & COO`}
              linkedinUrl="https://www.linkedin.com/in/syed-sameer-akhtar/"
            />
          </div>
        </div>
      </div>
      <div className="w-[770px] flex flex-row items-start justify-start py-0 pr-[11px] pl-0 box-border max-w-full text-center text-base text-steelblue">
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

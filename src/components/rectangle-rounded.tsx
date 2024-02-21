import type { NextPage } from "next";
import Depth7Frame from "./depth7-frame";
import Depth5Frame from "./depth5-frame";

const RectangleRounded: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[60px_0px] max-w-full text-left text-17xl text-gray font-plus-jakarta-sans mq975:gap-[60px_0px]">
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-4 pb-5 box-border gap-[40px_0px] max-w-full mq700:gap-[40px_0px]">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
          <div className="w-[720px] flex flex-col items-start justify-start gap-[16px_0px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <h1 className="m-0 relative text-inherit tracking-[-1.19px] leading-[45px] font-extrabold font-inherit inline-block max-w-full mq450:text-3xl mq450:leading-[27px] mq950:text-10xl mq950:leading-[36px]">
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
            audienceInsights="Audience insights"
            understandYourAudienceWit="Understand your audience with detailed profiles and insights."
          />
          <Depth7Frame
            depth9Frame0="/Depth-9-Frame-0-1.png"
            audienceInsights="Automations"
            understandYourAudienceWit="Automate your workflows to save time and engage your audience."
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
            audienceInsights="Personalization"
            understandYourAudienceWit="Deliver personalized messages at  scale with dynamic content."
            propHeight="236.4px"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px_0px] max-w-full mq700:gap-[40px_0px]">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-4 box-border max-w-full">
          <div className="w-[720px] flex flex-col items-start justify-start gap-[16px_0px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h1 className="m-0 relative text-inherit tracking-[-1.19px] leading-[45px] font-extrabold font-inherit mq450:text-3xl mq450:leading-[27px] mq950:text-10xl mq950:leading-[36px]">
                  How it works
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-base">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="relative leading-[24px] inline-block max-w-full">
                  Learn how Creator CRM can help you grow and manage your
                  audience.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-4 gap-[0px_12px] text-base mq950:flex-wrap">
          <div className="flex-1 rounded-lg bg-whitesmoke box-border flex flex-col items-start justify-start py-4 pr-[18px] pl-4 gap-[12px_0px] min-w-[205px] max-w-[223px] border-[1px] border-solid border-lavender">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-6 h-6 relative overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-1.svg"
                />
                <div className="absolute top-[-1214.4px] left-[-187px] w-[19px] h-[17px]" />
              </div>
            </div>
            <div className="self-stretch h-[107px] flex flex-col items-start justify-start gap-[4px_0px]">
              <div className="self-stretch h-10 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <b className="w-[138px] relative leading-[20px] inline-block">
                    Understand your audience
                  </b>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start text-sm text-steelblue">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="w-[185px] relative leading-[21px] inline-block">
                    Get detailed profiles and insights to understand your
                    audience.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-whitesmoke box-border flex flex-col items-start justify-start py-4 pr-[18px] pl-4 gap-[12px_0px] min-w-[205px] max-w-[223px] min-h-[177px] border-[1px] border-solid border-lavender mq950:min-h-[auto]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-6 h-6 relative overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-2.svg"
                />
                <div className="absolute top-[-1214.4px] left-[-422px] w-[19px] h-5" />
              </div>
            </div>
            <div className="self-stretch h-[87px] flex flex-col items-start justify-start gap-[4px_0px]">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <b className="relative leading-[20px]">
                    Scale your engagement
                  </b>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start text-sm text-steelblue">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[21px]">
                    Automate your workflows to save time and engage your
                    audience.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-whitesmoke box-border flex flex-col items-start justify-start py-4 pr-[18px] pl-4 gap-[12px_0px] min-w-[205px] max-w-[223px] border-[1px] border-solid border-lavender">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-6 h-6 relative overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-3.svg"
                />
                <div className="absolute top-[-1214.4px] left-[-657px] w-6 h-[15px]" />
              </div>
            </div>
            <div className="self-stretch h-[107px] flex flex-col items-start justify-start gap-[4px_0px]">
              <div className="self-stretch h-10 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <b className="w-[167px] relative leading-[20px] inline-block">
                    Create personalized experiences
                  </b>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start text-sm text-steelblue">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="w-[154px] relative leading-[21px] inline-block">
                    Deliver personalized messages at scale with dynamic content.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-whitesmoke box-border flex flex-col items-start justify-start py-4 pr-[18px] pl-4 gap-[12px_0px] min-w-[205px] max-w-[223px] border-[1px] border-solid border-lavender">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-6 h-6 relative overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-4.svg"
                />
                <div className="absolute top-[-1214.4px] left-[-892px] w-[22px] h-[17px]" />
              </div>
            </div>
            <div className="self-stretch h-[107px] flex flex-col items-start justify-start gap-[4px_0px]">
              <div className="self-stretch h-10 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <b className="w-[104px] relative leading-[20px] inline-block">
                    Build lasting relationships
                  </b>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start text-sm text-steelblue">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="w-[185px] relative leading-[21px] inline-block">
                    Use detailed profiles and insights to understand your
                    audience.
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
                <h3 className="m-0 relative text-inherit tracking-[-0.33px] leading-[27.5px] font-bold font-inherit mq450:text-lg mq450:leading-[22px]">
                  Meet the team
                </h3>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center p-4 gap-[0px_12px] text-base">
            <Depth5Frame
              depth7Frame0="/depth-7-frame-0@2x.png"
              janeSmith="Satyam Gupta"
              founderCEO={`Co-founder & CEO`}
            />
            <Depth5Frame
              depth7Frame0="/depth-7-frame-0-1@2x.png"
              janeSmith="Satyajeet Das"
              founderCEO={`Co-founder & CTO`}
            />
            <Depth5Frame
              depth7Frame0="/depth-7-frame-0-2@2x.png"
              janeSmith="Pranjal Animesh"
              founderCEO={`Co-founder & CIO`}
            />
            <Depth5Frame
              depth7Frame0="/depth-7-frame-0-3@2x.png"
              janeSmith="Sameer Akhtar"
              founderCEO={`Co-founder & COO`}
            />
          </div>
        </div>
      </div>
      <div className="w-[770px] flex flex-row items-start justify-start py-0 pr-[11px] pl-0 box-border max-w-full text-center text-base text-steelblue">
        <div className="flex-1 flex flex-col items-center justify-start gap-[24px_0px] max-w-full">
          {/* <div className="self-stretch flex flex-row items-start justify-between py-0 pr-0.5 pl-0 gap-[20px] mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start py-0 pr-[9px] pl-0">
              <div className="relative leading-[24px]">Product</div>
            </div>
            <div className="relative leading-[24px]">Company</div>
            <div className="flex flex-col items-start justify-start py-0 pr-[17px] pl-0">
              <div className="relative leading-[24px]">Resources</div>
            </div>
            <div className="relative leading-[24px]">Legal</div>
          </div> */}
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-2.5">
            <div className="flex flex-row items-start justify-start gap-[0px_16px]">
              {/* <div className="h-6 w-6 relative overflow-hidden shrink-0">
                <img
                  className="absolute top-[-0.1px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-5.svg"
                />
                <div className="absolute top-[-1746px] left-[-543px] w-5 h-[18px] hidden" />
              </div>
              <div className="h-6 w-6 relative overflow-hidden shrink-0">
                <img
                  className="absolute top-[-0.1px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-6.svg"
                />
                <div className="absolute top-[-1746px] left-[-583px] w-[19px] h-5 hidden" />
              </div>
              <div className="h-6 w-6 relative overflow-hidden shrink-0">
                <img
                  className="absolute top-[-0.1px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-7.svg"
                />
                <div className="absolute top-[-1746px] left-[-623px] w-[21px] h-[17px] hidden" />
              </div>
              <div className="h-6 w-6 relative overflow-hidden shrink-0">
                <img
                  className="absolute top-[-0.1px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-8.svg"
                />
                <div className="absolute top-[-1746px] left-[-663px] w-[19px] h-5 hidden" />
              </div>
              <div className="h-6 w-6 relative overflow-hidden shrink-0">
                <img
                  className="absolute top-[-0.1px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-9.svg"
                />
                <div className="absolute top-[-1746px] left-[-703px] w-5 h-5 hidden" />
              </div> */}
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-px pl-[9px]">
            <div className="relative leading-[24px]">@2024 TryMuze</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectangleRounded;

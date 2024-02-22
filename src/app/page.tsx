import type { NextPage } from "next";
import Depth2Frame from "../components/depth2-frame";
import RectangleRounded from "../components/rectangle-rounded";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const GalileoDesign: NextPage = () => {
  return (
    <div className="w-full h-[1863px] relative bg-[#fcf8ba] flex flex-col items-start justify-start tracking-[normal] mq950:h-auto mq950:min-h-[1862.9]">
      <main className="w-full my-0 mx-[!important] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-col items-center justify-start pt-0 px-0 pb-10 box-border gap-[36px_0px] max-w-full mq700:gap-[36px_0px]">
        <Depth2Frame />
        <section className="w-[1000px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[56px_0px] max-w-full shrink-0 text-left text-[48px] text-white font-plus-jakarta-sans mq700:gap-[56px_0px]">
          <div className="w-[928px] rounded-xl overflow-hidden flex flex-row items-end justify-start pt-4 px-4 pb-0 box-border bg-[url('/Depth-6-Frame-0.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <div className="h-[464px] w-[831px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full">
              <div className="mb-[-16px] self-stretch flex flex-col items-start justify-end pt-0 px-10 pb-10 box-border min-h-[480px] max-w-full shrink-0 mq450:gap-[32px_0px]">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                        <h1 className="m-0 text-black relative text-inherit tracking-[-1.58px] leading-[60px] font-extrabold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[36px] mq950:text-[38px] pb-5 mq950:leading-[48px]" style={{fontFamily:"Pontiac", lineHeight:"1.10", fontSize:"70px", color:"#000"}}>
                          Manage your audience like a pro
                        </h1>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-base">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="relative leading-[24px]" style={{fontFamily:"Locke  "}}>
                          Creator CRM helps you turn your fans into superfans
                          with powerful tools for managing your audience.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RectangleRounded />
        </section>
      </main>
    </div>
  );
};

export default GalileoDesign;

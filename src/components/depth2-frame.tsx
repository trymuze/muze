import type { NextPage } from "next";
import Image from "next/image";

const Depth2Frame: NextPage = () => {
    return (
        <header className="self-stretch box-border flex flex-row items-center justify-between py-3 px-10 gap-[0px] top-[0] [row-gap:20px] z-[99] sticky max-w-full text-left text-lg text-gray font-plus-jakarta-sans border-b-[1px] border-solid border-gainsboro bg-[#000]">
            <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-center justify-start gap-[0px_16px]">
                    <div className="flex flex-col items-start justify-start">
                        <div className="w-4 h-4 relative overflow-hidden shrink-0">
                            <div className="absolute top-[-19.5px] left-[-35px] w-[13px] h-[13px]" />
                        </div>
                    </div>
                    <div className="h-[22px] flex flex-col items-start justify-start">
                        <div className="flex flex-col items-start justify-start">
                            <b className="relative tracking-[-0.27px] leading-[22.5px] whitespace-nowrap text-[#ff810a]">
                                {/* <p className="-mt-0" style={{ fontFamily: 'Pontiac', fontSize:"40px" }}>Muze</p> */}
                                <Image 
                                    src="/muze3.png"
                                    alt="Muze"
                                    width={160}
                                    height={98}
                                    className="m-0 p-0 -mt-9"
                                />
                            </b>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-10 w-[1058.1px] flex flex-row items-start justify-end gap-[0px_32px] max-w-full text-sm mq700:gap-[0px_32px]">
                <div className="self-stretch w-[322.8px] flex flex-row items-center justify-between gap-[20px] max-w-full">
                    {/* <div className="flex flex-col items-start justify-start py-0 pr-px pl-0">
                        <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[21px] font-medium">Home</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-px pl-0">
                        <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[21px] font-medium">
                                Features
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[21px] font-medium">Pricing</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-px pl-0">
                        <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[21px] font-medium">
                                Enterprise
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <div className="self-stretch w-44 flex flex-row items-start justify-start gap-[0px_8px]">

                    <div className="self-stretch rounded-xl bg-[#FF7B00] overflow-hidden flex flex-row items-center justify-center py-0 px-4">
                        <div className="bg-[#FF7B00] overflow-hidden flex flex-col items-start justify-start">
                            <div className="flex flex-col items-start justify-start">
                                <b className="relative tracking-[0.21px] leading-[21px] whitespace-nowrap text-black" style={{fontFamily:"Pontiac", fontSize:"16px"}}>
                                    Waitlist
                                </b>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </header>
    );
};

export default Depth2Frame;

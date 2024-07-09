import Li from "../components/li";
import { useEffect, useState } from "react";
import Component from "../components/component";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-end justify-start pt-[17px] px-[130px] pb-[221px] box-border gap-[107px] leading-[normal] tracking-[normal] mq450:gap-[27px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[53px] mq750:pl-[65px] mq750:pr-[65px] mq750:box-border">
      <div className="w-full h-[839px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[-80px] max-h-full w-[1600px] object-cover"
          alt=""
          src="/bg@2x.png"
        />
        <img
          className="absolute top-[23px] left-[130px] w-[193px] h-[25px] z-[1]"
          loading="lazy"
          alt=""
          src="/frame-9.svg"
        />
      </div>
      <header className="w-[812px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:w-[368px]">
        <nav className="m-0 w-[444px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full mq750:hidden">
          <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-sm text-white font-roboto">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[53px] z-[1]">
              Exchage
            </a>
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[112px] whitespace-nowrap z-[1]">
              Last Transactions
            </a>
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[78px] whitespace-nowrap z-[1]">
              Invite Friend
            </a>
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[81px] z-[1]">
              Notifications
            </a>
          </nav>
        </nav>
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <button className="cursor-pointer py-2 px-[9px] bg-[transparent] w-16 [backdrop-filter:blur(4px)] rounded-tl-lg rounded-tr-none rounded-br-lg rounded-bl-none box-border flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-blueviolet hover:bg-darkorchid-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkorchid-100">
            <a className="[text-decoration:none] relative text-sm font-medium font-roboto text-white text-left inline-block min-w-[44px] whitespace-nowrap">
              LOG IN
            </a>
          </button>
          <button className="cursor-pointer [border:none] p-2.5 bg-blueviolet [backdrop-filter:blur(4px)] rounded-tl-lg rounded-tr-none rounded-br-lg rounded-bl-none flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-darkorchid-100">
            <a className="[text-decoration:none] relative text-sm font-medium font-roboto text-white text-left inline-block min-w-[54px]">
              SIGN UP
            </a>
          </button>
        </div>
      </header>
      <main className="self-stretch flex flex-col items-end justify-start gap-[50px] max-w-full mq750:gap-[25px]">
        <section className="w-[1155px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-[68px] text-white font-roboto">
          <div className="w-[777px] flex flex-col items-start justify-start gap-[30px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.68px] leading-[75.6px] font-normal font-inherit z-[1] mq450:text-[41px] mq450:leading-[45px] mq750:text-[54px] mq750:leading-[60px]">
              Easy send and Request Crypto.
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xl">
              <div className="w-[557px] relative leading-[27.3px] inline-block shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[22px]">
                Bring blockchain to the people. Solana supports experiences for
                power users, new consumers, and everyone in between.
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row flex-wrap items-end justify-start max-w-full z-[1] text-left text-xl text-zinc-50 font-roboto">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[488px] box-border min-h-[1166px] max-w-full mq750:pb-[206px] mq750:box-border mq1225:pb-[317px] mq1225:box-border">
            <div className="self-stretch [backdrop-filter:blur(30px)] rounded-3xs bg-gray-300 overflow-hidden flex flex-col items-start justify-start py-7 px-10 gap-[8px] border-[1px] border-solid border-darkslategray-100 mq750:pt-5 mq750:pb-5 mq750:box-border">
            <div className="self-stretch h-[50px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-3.5 px-[47px] pb-[13px] box-border gap-[13px] mq1225:h-auto">

                <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq1225:flex-wrap">
                  <div className="flex-1 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[91px] mq450:text-base">
                    ASSETS
                  </div>
                  <div className="flex-1 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[91px] mq450:text-base">
                    LAST TRADE
                  </div>
                  <div className="flex-1 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[91px] mq450:text-base">
                    24H %
                  </div>
                  <div className="w-[162px] relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0 mq450:text-base">
                    24H CHANGE
                  </div>
                  <div className="w-[162px] relative font-semibold text-royalblue text-right inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0 mq450:text-base">{`MORE >`}</div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/border.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                {data.map((item, index) => (
                  <Li
                    key={index}
                    cryptocurrencyColorbtc={`/cryptocurrencycolor${item.symbol
                      .split("/")[0]
                      .toLowerCase()}.svg`}
                    bTC={`${item.symbol}`}
                    prop={`$${item.lastTrade.toFixed(2)}`}
                    prop1={`${item.change24h.toFixed(2)}%`}
                    prop2={`$${item.change24hValue.toFixed(2)}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <Component />
        </section>
      </main>
    </div>
  );
};

export default Main;

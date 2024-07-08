import { Button } from "@mui/material";
import FromTokenSelect from "./from-token-select";
import PropTypes from "prop-types";

const Component = ({ className = "" }) => {
  return (
    <div
      className={`flex-[0.9322] [backdrop-filter:blur(30px)] rounded-3xs bg-gray-300 box-border overflow-hidden flex flex-col items-start justify-start py-[38px] px-[39px] gap-[30px] max-w-full ml-[-1180px] text-left text-xl text-zinc-50 font-roboto border-[1px] border-solid border-darkslategray-100 mq450:pt-[38px] mq450:pb-[25px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
          <div className="w-[137px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
            <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base">
              SWAP TOKENS
            </div>
          </div>
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/letsiconssettingaltfill.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[3px] max-w-full text-31xl mq1225:flex-wrap">
        <div className="flex-1 rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-gray-200 flex flex-row items-start justify-between py-5 px-[50px] box-border min-w-[357px] max-w-full gap-[20px] mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border mq750:min-w-full">
          <div className="w-[100px] flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap mq450:text-11xl mq750:text-21xl">
              0.00
            </div>
            <div className="w-9 relative text-sm font-medium text-dimgray inline-block overflow-hidden text-ellipsis whitespace-nowrap">
              $0.00
            </div>
          </div>
          <FromTokenSelect
            phcurrencyBtcBold="/phcurrencybtcbold.svg"
            bTC="BTC"
            prop="24,240"
          />
        </div>
        <div className="flex-1 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-gray-200 flex flex-row items-start justify-between py-5 px-[50px] box-border relative min-w-[357px] max-w-full gap-[20px] mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border mq750:min-w-full">
          <div className="w-[100px] flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap mq450:text-11xl mq750:text-21xl">
              0.00
            </div>
            <div className="w-9 relative text-sm font-medium text-dimgray inline-block overflow-hidden text-ellipsis whitespace-nowrap">
              $0.00
            </div>
          </div>
          <FromTokenSelect
            phcurrencyBtcBold="/mingcutebnbline.svg"
            bTC="BNB"
            prop="63,790"
          />
          <img
            className="h-[50px] w-[50px] absolute !m-[0] top-[34px] left-[-25px] rounded-6xl overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/frame-36.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-sm">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <Button
            className="h-[51px] w-[250px] [backdrop-filter:blur(4px)]"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#9945ff",
              borderRadius: "8px 0px 8px 0px",
              "&:hover": { background: "#9945ff" },
              width: 250,
              height: 51,
            }}
          >
            SWOP TOKENS
          </Button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
          <div className="w-[133px] flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch relative overflow-hidden text-ellipsis whitespace-nowrap">
              1 BTC = 32.4039 ETH
            </div>
            <div className="w-[83px] relative text-royalblue inline-block overflow-hidden text-ellipsis whitespace-nowrap">
              Free exchage
            </div>
          </div>
          <div className="w-[85px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-dimgray">
            <div className="self-stretch relative overflow-hidden text-ellipsis whitespace-nowrap">
              Updates in 4s
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;

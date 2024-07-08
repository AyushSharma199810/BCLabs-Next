import PropTypes from "prop-types";

const FromTokenSelect = ({ className = "", phcurrencyBtcBold, bTC, prop }) => {
  return (
    <div
      className={`w-[122px] flex flex-col items-start justify-start gap-[9px] text-left text-xl text-gray-100 font-roboto ${className}`}
    >
      <div className="self-stretch bg-black flex flex-row items-center justify-center py-2 px-3 gap-[8px]">
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
          loading="lazy"
          alt=""
          src={phcurrencyBtcBold}
        />
        <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
          <div className="flex-1 relative font-medium overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base">
            {bTC}
          </div>
          <img
            className="h-8 w-4 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/weuiarrowoutlined.svg"
          />
        </div>
      </div>
      <div className="w-[101px] flex flex-row items-start justify-start gap-[4px] text-sm text-zinc-50">
        <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
          Balance:
        </div>
        <div className="w-[43px] relative text-royalblue inline-block overflow-hidden text-ellipsis whitespace-nowrap">
          {prop}
        </div>
      </div>
    </div>
  );
};

FromTokenSelect.propTypes = {
  className: PropTypes.string,
  phcurrencyBtcBold: PropTypes.string,
  bTC: PropTypes.string,
  prop: PropTypes.string,
};

export default FromTokenSelect;

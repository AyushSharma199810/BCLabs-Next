import PropTypes from "prop-types";

const Li = ({
  className = "",
  cryptocurrencyColorbtc,
  bTC,
  prop,
  prop1,
  prop2,
}) => {
  const getColor = (value) => {
    if (value > 0) return 'green';
    if (value < 0) return 'red';
    return 'gray';
  };

  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start py-2 px-0 [row-gap:20px] text-left text-lg text-zinc-50 font-roboto mq1225:flex-wrap ${className}`}
    >
      <div className="flex-[0.5891] flex flex-row items-center justify-start py-0 pr-[106px] pl-0 box-border gap-[12px] min-w-[140px] mq450:flex-wrap mq450:pr-5 mq450:box-border mq450:flex-1">
        <img
          className="h-16 w-16 relative rounded-lg overflow-hidden shrink-0 min-h-[64px]"
          loading="lazy"
          alt=""
          src={cryptocurrencyColorbtc}
        />
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border min-w-[49px]">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 relative font-medium overflow-hidden text-ellipsis whitespace-nowrap">
              {bTC}
            </div>
            <div className="flex-1 relative font-medium text-dimgray overflow-hidden text-ellipsis whitespace-nowrap">
              USD
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[71px]">
        {prop}
      </div>
      <div className="flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[71px]" style={{ color: getColor(Number(prop1.replace('%', ''))) }}>
        {prop1}
      </div>
      <div className="flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[71px]" style={{ color: getColor(Number(prop2.replace('$', ''))) }}>
        {prop2}
      </div>
      <div className="w-[66px] bg-springgreen flex flex-row items-center justify-center p-2.5 box-border text-darkslategray-200">
        <div className="flex-1 relative font-medium overflow-hidden text-ellipsis whitespace-nowrap">
          Trade
        </div>
      </div>
    </div>
  );
};

Li.propTypes = {
  className: PropTypes.string,
  cryptocurrencyColorbtc: PropTypes.string,
  bTC: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
};

export default Li;

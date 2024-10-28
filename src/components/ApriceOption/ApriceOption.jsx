import PropTypes from "prop-types";

const ApriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="border-2 bg-slate-900 text-white rounded-md p-2">
      <h2 className="text-center font-bold">
        <span className="text-7xl">{price}</span>
        <span className="text-2xl">/Mon</span>
      </h2>
      <h4 className="text-3xl text-center text-amber-600">{name}</h4>
    </div>
  );
};

ApriceOption.propTypes = {
  option: PropTypes.object,
};

export default ApriceOption;

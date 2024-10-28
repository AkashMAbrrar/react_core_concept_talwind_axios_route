import PropTypes from "prop-types";
import Features from "../Features/Features";

const ApriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="border-2 flex flex-col bg-slate-900 text-white rounded-md p-2">
      <h2 className="text-center font-bold">
        <span className="text-7xl">{price}</span>
        <span className="text-2xl">/Mon</span>
      </h2>
      <h4 className="text-3xl text-center text-amber-600">{name}</h4>
      <div className="pl-2 flex-grow">
        {features.map((feature, idx) => (
          <Features key={idx} feature={feature}></Features>
        ))}
      </div>
      <button className="btn btn-warning mt-12 hover:bg-green-600">
        Buy Now
      </button>
    </div>
  );
};

ApriceOption.propTypes = {
  option: PropTypes.object,
};

export default ApriceOption;

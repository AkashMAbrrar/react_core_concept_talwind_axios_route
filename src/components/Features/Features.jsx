import PropTypes from "prop-types";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Features = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        {" "}
        <IoIosCheckmarkCircle className="text-green-600 mr-2" />
        {feature}
      </p>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.string,
};

export default Features;

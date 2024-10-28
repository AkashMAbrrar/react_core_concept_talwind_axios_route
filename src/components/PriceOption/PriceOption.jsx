import ApriceOption from "../ApriceOption/ApriceOption";

const PriceOption = () => {
  const priceOptions = [
    {
      id: "basic-01",
      name: "Basic",
      price: 25.0,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free initial fitness assessment",
        "Free WiFi",
        "Access during off-peak hours",
      ],
    },
    {
      id: "standard-02",
      name: "Standard",
      price: 45.0,
      currency: "USD",
      features: [
        "All Basic features",
        "Access to group classes",
        "Discount on personal training sessions",
        "Access to sauna",
        "Extended hours access",
        "Monthly guest pass",
        "10% discount at gym cafe",
      ],
    },
    {
      id: "premium-03",
      name: "Premium",
      price: 65.0,
      currency: "USD",
      features: [
        "All Standard features",
        "Unlimited group classes",
        "Free monthly personal training session",
        "Access to swimming pool",
        "Priority locker access",
        "Free towel service",
        "Access to premium workout equipment",
        "Weekly nutritional counseling session",
        "Early access to new classes and workshops",
      ],
    },
    {
      id: "vip-04",
      name: "VIP",
      price: 85.0,
      currency: "USD",
      features: [
        "All Premium features",
        "Dedicated personal trainer",
        "Access to VIP lounge",
        "Free sports massage (once per month)",
        "Complimentary guest passes",
        "24/7 gym access",
        "Personalized workout and nutrition plan",
        "Exclusive access to VIP-only events",
        "Private locker with laundry service",
        "Complimentary smoothie or snack daily",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-4xl">Make Your Deal With Best Prices</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-8">
        {priceOptions.map((option) => (
          <ApriceOption key={option.id} option={option}></ApriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOption;

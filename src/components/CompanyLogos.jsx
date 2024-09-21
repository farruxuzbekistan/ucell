import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-gray-400">
        Bizning xizmatlarimizdan foydalanayotgan kompaniyalar
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img
              src={logo}
              width={134}
              height={28}
              alt={`Company Logo ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;

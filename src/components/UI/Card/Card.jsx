/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Card = ({ title, image, links, cardClass }) => {
  return (
    <div className={`card ${cardClass}`}>
      <h3 className={`text-xl font-semibold uppercase mb-2 ${cardClass === 'accentCard' ? 'text-accent' : 'text-info'}`}>{title}</h3>
      <div className={`flex border-2 p-4 md:p-6 md:min-h-64 max-h-64 overflow-hidden ${cardClass === 'accentCard' ? 'border-accent' : 'border-info'}`}>
        <div className="flex justify-center items-center max-w-32 md:max-w-40 w-1/2  mx-auto">
          <img src={image} alt={title} className="max-w-full h-auto" />
        </div>
        <ul className="col-span-2 w-1/2">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={"/"} className={`flex items-center py-2 px-2 font-semibold text-sm md:text-md ${cardClass === 'accentCard' ? 'border-accent text-accent' : 'border-info text-info'} ${index === links.length - 1 ? '' : 'border-b-2'}`}>
                <span className="mr-2">{'>'}</span>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;

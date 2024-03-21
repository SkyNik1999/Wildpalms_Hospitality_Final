import React, { useState } from 'react';
import {
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import siolim1 from '../Assets/3 bhk siolim/3bhk Siolim locations-02.png';
import sharayu from '../Assets/Sharayu/IMG20240126175345.jpg';
import morjim from '../Assets/morjim/WP-MOR 1-02.png';
import bhk from '../Assets/1bhk (1).png';
import bhk5 from '../Assets/5bh.png';
import screen from '../Assets/Screenshot 2024-02-11 190022.png';

const Listing = () => {
  const propertyOptions = ['House', 'Cottage', 'Flat', 'Villa', 'Luxury Villa'];
  const newDate = new Date().toISOString().split('T')[0];

  const [value, setValue] = useState(0);
  const [checkIn, setCheckIn] = useState(newDate);
  const [checkOut, setCheckOut] = useState(newDate);

  const amenitiesOptions = [
    { key: 'isAc', value: 'Air Conditioning' },
    { key: 'isPool', value: 'Pool' },
    { key: 'isParking', value: 'Parking space' },
    { key: 'isKitchen', value: 'Kitchen' },
  ];

  const [amenities, setAminities] = useState({
    isAc: false,
    isPool: false,
    isKitchen: false,
    isParking: false,
  });

  const handleAmenities = option => {
    setAminities({ ...amenities, [option]: !amenities[option] });
  };

  const [selectedType, setSelectedType] = useState('');

  const handleSelectProperty = option => {
    setSelectedType(option);
  };

  return (
    <section className="section" id="listing">
      <div className="container">
        <form className="check-form">
          <div>
            <label>Check-in</label>
            <Input
              type="date"
              value={checkIn}
              onChange={e => setCheckIn(e.target.value)}
            />
          </div>
          <div>
            <label>Check-out</label>
            <Input
              type="date"
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
            />
          </div>
          <div className="guest-field">
            <label>Guest</label>
            <NumberInput
              defaultValue={0}
              min={0}
              max={100}
              step={1}
              onChange={setValue}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>{' '}
          </div>

          <div>
            <label>Property type</label>
            <select
              value={selectedType}
              onChange={e => handleSelectProperty(e.target.value)}
            >
              <option value="">Select an option</option>
              {propertyOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="filter">
            {amenitiesOptions.map((option, index) => (
              <div key={index} className="filter-checkbox">
                <input
                  type="checkbox"
                  value={option.value}
                  onChange={() => handleAmenities(option.key)}
                  style={{ width: '20px', height: '20px' }}
                />
                <label>{option.value}</label>
              </div>
            ))}
          </div>

          <button type="submit">Check Availability</button>
        </form>
        <div className="list-container">
          <div className="left-col">
            <span className="section__subtitle">Our Listings </span>
            <h2 className="section__title">
              Recommended places in Goa<span>.</span>
            </h2>
            <div className="house">
              <div className="house-img">
                <img src={siolim1} alt="" className="src" />
              </div>
              <div className="house-info">
                <p className="popular__description">Siolim, Goa</p>
                <h2>3BHK Villa in Siolim</h2>
                <i className="bx bx-male-female"></i> 9 Pax
                <i className="bx bx-wind"></i> AC
                <i className="bx bx-bed"></i> 3 Bed
                <i className="bx bx-bath"></i> 3 Bath
                <i className="bx bx-wifi"></i> WIFI <br />
                <i className="bx bx-restaurant"></i> Kitchen
                <i className="bx bxs-car-garage"></i> Parking
                <i className="bx bx-swim"></i> Pool
                <br />
                <div className=" star">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                  <i className="bx bx-star"></i>
                </div>
                <div className="house-price">
                  <h3>
                    ₹ 20,000 <span>/night</span>
                  </h3>
                </div>
                <div className="wrapper2">
                  <Link className="contact__card-button2" to={'/details'}>
                    View Property
                  </Link>
                </div>
              </div>
            </div>

            <div className="house">
              <div className="house-img">
                <img src={sharayu} alt="" className="src" />
              </div>
              <div className="house-info">
                <p>Siolim, Goa</p>
                <h2>1BHK flat in Siolim</h2>
                <i className="bx bx-male-female"></i> 3 Pax
                <i className="bx bx-wind"></i> AC
                <i className="bx bx-bed"></i> 1 Bed
                <i className="bx bx-bath"></i> 1 Bath
                <i className="bx bx-wifi"></i> WIFI <br />
                <i className="bx bx-restaurant"></i> Kitchen
                <i className="bx bxs-car-garage"></i> Parking
                <i className="bx bx-swim"></i> Pool <br />
                <div className=" star">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                  <i className="bx bx-star"></i>
                </div>
                <div className="house-price">
                  <h3>
                    ₹ 3,000 <span>/night</span>
                  </h3>
                </div>
                <div className="wrapper2">
                  <a
                    href="https://wa.link/p4fzjj"
                    className=" contact__card-button2"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>

            <div className="house">
              <div className="house-img">
                <img src={morjim} alt="" className="src" />
              </div>
              <div className="house-info">
                <p>Morjim, Goa</p>
                <h2>Cottages in Morjim</h2>
                <i className="bx bx-male-female"></i> 3 Pax
                <i className="bx bx-wind"></i> AC
                <i className="bx bx-bed"></i> 1 Bed
                <i className="bx bx-bath"></i> 1 Bath <br />
                <i className="bx bx-wifi"></i> WIFI
                <i className="bx bxs-car-garage"></i> Parking
                <i className="bx bx-swim"></i> Pool
                <br />
                <div className=" star">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                  <i className="bx bx-star"></i>
                </div>
                <div className="house-price">
                  <h3>
                    ₹ 4650 <span>/night</span>
                  </h3>
                </div>
                <div className="wrapper2">
                  <a
                    href="https://wa.link/p4fzjj"
                    className=" contact__card-button2"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>

            <div className="house">
              <div className="house-img">
                <img src={bhk} alt="" className="src" />
              </div>
              <div className="house-info">
                <p className="popular__description">Siolim, Goa</p>
                <h2>1BHK Villa in Siolim</h2>
                <i className="bx bx-male-female"></i> 4 Pax
                <i className="bx bx-wind"></i> AC
                <i className="bx bx-bed"></i> 1 Bed
                <i className="bx bx-bath"></i> 1 Bath
                <i className="bx bx-wifi"></i> WIFI <br />
                <i className="bx bx-restaurant"></i> Kitchen
                <i className="bx bxs-car-garage"></i> Parking <br />
                <div className=" star">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                  <i className="bx bx-star"></i>
                </div>
                <div className="house-price">
                  <h3>
                    ₹ 2,000 <span>/night</span>
                  </h3>
                </div>
                <div className="wrapper2">
                  <a
                    href="https://wa.link/p4fzjj"
                    className=" contact__card-button2"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>

            <div className="house">
              <div className="house-img">
                <img src={bhk} alt="" className="src" />
              </div>
              <div className="house-info">
                <p>Assagao, Goa</p>
                <h2>1BHK Villa in Assagao</h2>
                <i className="bx bx-male-female"></i> 2 Pax
                <i className="bx bx-wind"></i> AC
                <i className="bx bx-bed"></i> 1 Bed
                <i className="bx bx-bath"></i> 1 Bath
                <i className="bx bx-wifi"></i> WIFI <br />
                <i className="bx bx-restaurant"></i> Kitchen
                <i className="bx bxs-car-garage"></i> Parking
                <i className="bx bx-swim"></i> Pool
                <br />
                <div className=" star">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                  <i className="bx bx-star"></i>
                </div>
                <div className="house-price">
                  <h3>
                    ₹ 3,655 <span>/night</span>
                  </h3>
                </div>
                <div className="wrapper2">
                  <a
                    href="https://wa.link/p4fzjj"
                    className=" contact__card-button2"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>

            <div className="house">
              <div className="house-img">
                <img src={bhk5} alt="" className="src" />
              </div>
              <div className="house-info">
                <p>Vagator, Goa</p>
                <h2>5BHK Villa in Vagator</h2>
                <i className="bx bx-male-female"></i> 15 Pax
                <i className="bx bx-wind"></i> AC
                <i className="bx bx-bed"></i> 5 Bed
                <i className="bx bx-bath"></i> 5 Bath
                <i className="bx bx-wifi"></i> WIFI <br />
                <i className="bx bx-restaurant"></i> Kitchen
                <i className="bx bxs-car-garage"></i> Parking
                <i className="bx bx-swim"></i> Pool
                <br />
                <div className=" star">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                  <i className="bx bx-star"></i>
                </div>
                <div className="house-price">
                  <h3>
                    ₹ 35,855 <span>/night</span>
                  </h3>
                </div>
                <div className="wrapper2">
                  <a
                    href="https://wa.link/p4fzjj"
                    className=" contact__card-button2"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>

            <div className="house">
              <div className="house-img">
                <img src={screen} alt="" className="src" />
              </div>
              <div className="house-info">
                <p>Candolim, Goa</p>
                <h2>4BHK Villa in Candolim</h2>
                <i className="bx bx-male-female"></i> 12 Pax
                <i className="bx bx-wind"></i> AC
                <i className="bx bx-bed"></i> 4 Bed
                <i className="bx bx-bath"></i> 4 Bath
                <i className="bx bx-wifi"></i> WIFI <br />
                <i className="bx bx-restaurant"></i> Kitchen
                <i className="bx bxs-car-garage"></i> Parking
                <i className="bx bx-swim"></i> Pool
                <br />
                <div className=" star">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                  <i className="bx bx-star"></i>
                </div>
                <div className="house-price">
                  <h3>
                    ₹ 25,486 <span>/night</span>
                  </h3>
                </div>
                <div className="wrapper2">
                  <a
                    href="https://wa.link/p4fzjj"
                    className=" contact__card-button2"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>

            <div className="house">
              <div className="house-img">
                <img src={screen} alt="" className="src" />
              </div>
              <div className="house-info">
                <p>Candolim, Goa</p>
                <h2>4BHK Villa in Candolim</h2>
                <i className="bx bx-male-female"></i> 12 Pax
                <i className="bx bx-wind"></i> AC
                <i className="bx bx-bed"></i> 4 Bed
                <i className="bx bx-bath"></i> 4 Bath
                <i className="bx bx-wifi"></i> WIFI <br />
                <i className="bx bx-restaurant"></i> Kitchen
                <i className="bx bxs-car-garage"></i> Parking
                <i className="bx bx-swim"></i> Pool
                <br />
                <div className=" star">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                  <i className="bx bx-star"></i>
                </div>
                <div className="house-price">
                  <h3>
                    ₹ 20,562 <span>/night</span>
                  </h3>
                </div>
                <div className="wrapper2">
                  <a
                    href="https://wa.link/p4fzjj"
                    className=" contact__card-button2"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;

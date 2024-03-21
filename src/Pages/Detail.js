import React, { useState } from 'react';
import {
  Input,
  AspectRatio,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import siolim1 from '../Assets/3 bhk siolim/3bhk Siolim locations-02.png';
import siolim2 from '../Assets/3 bhk siolim/3bhk Siolim locations-23.png';
import siolim3 from '../Assets/3 bhk siolim/3bhk Siolim locations-06.png';
import siolim4 from '../Assets/3 bhk siolim/3bhk Siolim locations-07.png';
import siolim5 from '../Assets/3 bhk siolim/3bhk Siolim locations-17.png';
import siolim6 from '../Assets/3 bhk siolim/3bhk Siolim locations-16.png';
import nikhil from '../Assets/host/nikhil.jpg';
import Modal from '../Components/Modal/Modal';
import useModal from '../Components/Modal/useModal';

const Detail = () => {
  const newDate = new Date().toISOString().split('T')[0];

  const [value, setValue] = useState(0);
  const { isShowing, toggle } = useModal();
  const [checkIn, setCheckIn] = useState(newDate);
  const [checkOut, setCheckOut] = useState(newDate);

  return (
    <section className="section" id="Detail">
      <div className="house-details">
        <div className="house-title">
          <h2 className="section__title">
            3BHK Villa in Siolim<span>.</span>
          </h2>
          <div className="row">
            <div>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
              <i className="bx bx-star"></i>
              <span>245 Reviews</span>
            </div>
            <div>
              <i className="bx bxs-map"></i> Siolim, Goa
            </div>
          </div>
          <div className="gallery">
            <div className="gallery-img-1">
              <img src="https://drive.google.com/thumbnail?id=152gBT2Lg-SXb6rdBVbWSJo_RncshFfLz" />
            </div>
            <div>
              <img src="https://photos.google.com/photo/AF1QipNyQ6rPnTDf_JWl-UMbP8kh-vSmedJhCT-FdaOd" />{' '}
            </div>
            <div>
              <img src="https://drive.google.com/thumbnail?id=1x7kDrykyrFZ8Ca_CPhDsywp_5XmD8o3n" />
            </div>
            <div>
              <img src={siolim4} />
            </div>
            <div>
              <img src={siolim5} />
            </div>
            <div>
              <img src={siolim6} />
            </div>
          </div>
          <button onClick={toggle}>See More</button>

          <Modal isShowing={isShowing} hide={toggle} />

          <div className="small-details">
            <h2>Entire rental unit hosted by Wildpalms</h2>
            <i className="bx bx-male-female"></i> 9 Pax
            <i className="bx bx-wind"></i> AC
            <i className="bx bx-bed"></i> 3 Bed
            <i className="bx bx-bath"></i> 3 Bath
            <i className="bx bx-wifi"></i> WIFI <br />
            <i className="bx bx-restaurant"></i> Kitchen
            <i className="bx bxs-car-garage"></i> Parking
            <i className="bx bx-swim"></i> Pool
            <br />
            <div className="house-price-1">
              <h3>
                ₹ 20,000<span>/night</span>
              </h3>
            </div>
          </div>
          <hr className="line" />

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
            <button type="submit">Check Availability</button>
          </form>

          <ul className="details-list">
            <li>
              <i className="bx bx-home-alt"></i>Entire Home:
              <span>You will have the entire flat for you.</span>
            </li>
            <li>
              <i className="bx bx-paint"></i>Enhanced Clean:
              <span>This host has committed to airbnb's cleaning process.</span>
            </li>
            <li>
              <i className="bx bx-map"></i>Great Location:
              <span>
                90% of recent guests gave the location a 5 star rating.
              </span>
            </li>
            <li>
              <i className="bx bxs-heart"></i>Great Check-in Experience:
              <span>
                100% of recent guests gave the check-in process a 5 star rating.
              </span>
            </li>
          </ul>

          <hr className="line" />
          <h2>Description</h2>
          <p className="home-desc">
            Guests will be allocateds on the ground floor according to
            availability. You get a comfortable Two bedroom apartment. It has a
            true luxury feeling. The price quoted is for two guest, at the guest
            slot please mark the number of guests to get the exact price for
            groups.
          </p>
          <hr className="line" />
          <AspectRatio ratio={16 / 9}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2050.2044533843314!2d73.75598817577104!3d15.622264414935332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfeb3745c2efe9%3A0x4a4ba7a8507d3529!2sFalcon%20villa!5e0!3m2!1sen!2sin!4v1709104126395!5m2!1sen!2sin" />
          </AspectRatio>

          <hr className="line" />

          <div className="host">
            <img src={nikhil} />
            <div>
              <h2>Hosted by Nikhil Gupta</h2>
              <p>
                <span>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                </span>
                245 reviews
              </p>
            </div>
            <a href="#" className="contact-host">
              Contact Host
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;

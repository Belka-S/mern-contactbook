import { SlickSlider } from './Slider.styled';
import { GrNext, GrPrevious } from 'react-icons/gr';

import ContactListImg from 'assets/images/contact-list.png';
import ContactCardImg from 'assets/images/contact-card.png';
import UserProfileImg from 'assets/images/user-profile.png';

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'wrapper',
    nextArrow: <GrNext />,
    prevArrow: <GrPrevious />,
  };

  return (
    <SlickSlider {...settings}>
      <div>
        <h3>Contacts List</h3>
        <img src={ContactListImg} alt="contact list" />
      </div>
      <div>
        <h3>Contact Card</h3>
        <img src={ContactCardImg} alt="contact card" />
      </div>
      <div>
        <h3>User Profile</h3>
        <img src={UserProfileImg} alt="user profile" />
      </div>
    </SlickSlider>
  );
};

export default Slider;

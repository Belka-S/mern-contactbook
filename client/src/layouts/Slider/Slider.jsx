import { SlickSlider } from './Slider.styled';
import { GrNext, GrPrevious } from 'react-icons/gr';

import ContactListImg from 'assets/images/contact-list.png';
import ContactCardImg from 'assets/images/contact-card.png';
import UserProfileImg from 'assets/images/user-profile.png';

const btnStyle = { width: '40px', height: '40px', padding: '8px' };

const Slider = () => {
  const NextArrow = ({ className, style, onClick }) => (
    <GrNext
      className={className}
      style={{ ...style, ...btnStyle }}
      onClick={onClick}
    />
  );
  const PrevArrow = ({ className, style, onClick }) => (
    <GrPrevious
      className={className}
      style={{ ...style, ...btnStyle }}
      onClick={onClick}
    />
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'wrapper',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SlickSlider {...settings}>
      <div>
        <img src={ContactListImg} alt="contact list" />
        <h3>Quickly find a contact in the List</h3>
      </div>
      <div>
        <img src={ContactCardImg} alt="contact card" />
        <h3>Easy to contact with the Card</h3>
      </div>
      <div>
        <img src={UserProfileImg} alt="user profile" />
        <h3>Keep personal data in your Profile</h3>
      </div>
    </SlickSlider>
  );
};

export default Slider;

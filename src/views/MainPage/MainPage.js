import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MainPage = () => {
  const navigate = useNavigate();
  const categories = [
    '공연',
    '전시',
    '연극',
    '스포츠',
  ];

  const items = [
    {
      name: 'Item 1',
      id: '1',
    },
    {
      name: 'Item 2',
      id: '2',
    },
    {
      name: 'Item 3',
      id: '3',
    },
    {
      name: 'Item 4',
      id: '4',
    },
  ];

  //const logoStyle = useMemo(() => ({
    //cursor : 'pointer',
 // }), []);


  return (
    <>
      {/* HEADER */}
      <Header />
      <br/>
      <br/>
      <h1 onClick={() => navigate('/')} style={{textAlign : 'center', cursor : 'pointer'}} >Ticket Together</h1>
      {/* 탭 */}
      <center>
        {categories.map((category, idx) => (
          <Button type="dashed" key={idx}>#{category}</Button>
        ))}
      </center>
      {/* 추천 캐러셀 */}
      <Carousel
        infinite
        autoPlay
        autoPlaySpeed={3000}
        responsive={responsive}
      >
        {items.map((item, idx) => (
          <Button
            key={idx}
            onClick={() => navigate('/detail/' + item.id)}
          >
            {item.name}
          </Button>
        ))}
      </Carousel>
      {/* FOOTER(TOP BUTTON) */}
      <Footer />
      
    </>
  );
};

export default MainPage;

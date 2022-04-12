import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Button, Card } from "antd";
import Header from "../Header/Header";
import PartsList from "../PartsPage/PartsList";

const DetailPage = () => {
  const { showId } = useParams();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };
  const handleModal2 = () => {
    setModalOpen2(!modalOpen2);
  };

  return (
    <>
      {/* Header */}
      <Header />
      <br />
      <br />
      {/* <h1
        onClick={() => navigate("/")}
        style={{ textAlign: "center", cursor: "pointer" }}
      >
        Ticket Together
      </h1> */}
      {/* 이미지 캐러셀 */}
      {/* 공연 정보(공연명, 카테고리, 공연 날짜) */}
      <Card>
        <p>공연명</p>
        <p>카테고리</p>
        <p>공연날짜</p>
      </Card>
      {/* 팟 목록 조회 버튼 */}
      <Button type="round" onClick={handleModal2}>
        팟 목록 조회
      </Button>
      <PartsList open={modalOpen2} close={handleModal2} header="Pot 목록">
        팟목록입니당
      </PartsList>
      {/* 후기 버튼 */}
      <Button type="round" onClick={() => navigate("/review")}>
        후기
      </Button>
    </>
  );
};

export default DetailPage;

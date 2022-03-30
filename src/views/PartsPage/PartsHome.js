import { useState } from "react";
import PotRecruit from "./Modals/PartsRecruit";
import PartsList from "./PartsList";

function PotHome() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };
  const handleModal2 = () => {
    setModalOpen2(!modalOpen2);
  };
  return (
    <div>
      <button onClick={handleModal}>팟 모집</button>
      <PotRecruit open={modalOpen} close={handleModal} header="Pot 모집">
        여기에 글을 써봐용
      </PotRecruit>
      <br />
      <br />
      <button onClick={handleModal2}>팟 목록</button>
      <PartsList open={modalOpen2} close={handleModal2} header="Pot 목록">
        팟목록입니당
      </PartsList>
    </div>
  );
}
export default PotHome;

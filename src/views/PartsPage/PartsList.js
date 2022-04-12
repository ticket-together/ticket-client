import Parts from "./Modals/Parts";
import "./Modals/PartsRecruit";
import "./PartsList.css";
import { useState } from "react";
import PotRecruit from "./Modals/PartsRecruit";

function PartsList(props) {
  const { open, close, header } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <Parts />
            <Parts />
            <button id="parts_generate" onClick={handleModal}>
              팟 새로 생성
            </button>

            <PotRecruit open={modalOpen} close={handleModal} header="Pot 모집">
              여기에 글을 써봐용
            </PotRecruit>
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}
export default PartsList;

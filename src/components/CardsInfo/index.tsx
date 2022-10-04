import "./assets/styleCardsInfo.css";

const CardsInfo = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container p-5">
          <div className="row">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="cardes h-100 shadow-lg">
                <div className="cardes-body">
                  <div className="text-center p-3">
                    <h2 className="cardes-title">O que é?</h2>
                    <br />
                    <br />
                  </div>
                  <p className="cardes-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus provident, adipisci ipsa ex, a esse tempora totam
                    sequi asperiores sapiente consequuntur dolor excepturi quis
                    aperiam in ut repellendus vel eligendi? sequi asperiores
                    sapiente consequuntur dolor excepturi quis aperiam in ut
                    repellendus vel eligendi
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="cardes h-100 shadow-lg">
                <div className="cardes-body">
                  <div className="text-center p-3">
                    <h2 className="cardes-title">Para que serve?</h2>
                    <br />
                    <br />
                  </div>
                  <p className="cardes-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus provident, adipisci ipsa ex, a esse tempora totam
                    sequi asperiores sapiente consequuntur dolor excepturi quis
                    aperiam in ut repellendus vel eligendi? sequi asperiores
                    sapiente consequuntur dolor excepturi quis aperiam in ut
                    repellendus vel eligendi
                  </p>
                </div>
              </div>

              {/* Card 3 */}
            </div>
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="cardes h-100 shadow-lg">
              <div className="cardes-body">
                  <div className="text-center p-3">
                    <h2 className="cardes-title">Qual a sua importância?</h2>
                    <br />
                  </div>
                  <p className="cardes-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus provident, adipisci ipsa ex, a esse tempora totam
                    sequi asperiores sapiente consequuntur dolor excepturi quis
                    aperiam in ut repellendus vel eligendi? sequi asperiores
                    sapiente consequuntur dolor excepturi quis aperiam in ut
                    repellendus vel eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsInfo;

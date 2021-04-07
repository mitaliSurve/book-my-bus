import React from "react";
import PropTypes from "prop-types";
import style from "./seat.module.css";

const BusSeats = ({ selectSeatNo, selectedSeat, onClick }) => {
  return (
    <div className={style.container}>
      <div className={style.grid_container}>
        {selectSeatNo.map((seatNo) => (
          <div key={seatNo.id} className={style.seat}>
            <div
              className={
                seatNo.seat === selectedSeat
                  ? style.seat_label_color
                  : style.seat_label
              }
              onClick={() => onClick(seatNo)}
            >
              {seatNo.seat}
            </div>
          </div>
        ))}
      </div>

      {/* <div className={style.container}>
        <div className={style.grid_container}
          {seatNo.map((seats) => (
            <div
              className={style.seat}
              key={seats.id}
              onClick={toggleOperatorMenu}
            >
              {seats.seatNumber.map((s) => (
                <div
                  key={s.id}
                  className={
                    s.seat === selectedSeat
                      ? style.seat_label_color
                      : style.seat_label
                  }
                  onClick={() => selectSeat(s)}
                >
                  {s.seat}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

BusSeats.propTypes = {
  selectSeatNo: PropTypes.arrayOf(PropTypes.object),
  selectedSeat: PropTypes.string,
  onClick: PropTypes.func,
};

export default BusSeats;

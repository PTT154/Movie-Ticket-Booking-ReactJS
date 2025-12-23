import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CinemaTab(props) {
  const { cinema, onSelect } = props;
  const dispatch = useDispatch();

  return (
    <div className="w-20 h-14 flex items-center justify-center">
      <img
        onClick={() => onSelect(cinema)}
        className="max-w-full max-h-full object-contain"
        src={cinema.logo}
        alt={cinema.tenHeThongRap}
      />
    </div>
  );
}

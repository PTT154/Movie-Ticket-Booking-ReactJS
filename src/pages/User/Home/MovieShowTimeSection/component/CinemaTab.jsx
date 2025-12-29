import { useDispatch } from "react-redux";

export default function CinemaTab(props) {
  const { cinema, onSelect } = props;
  const dispatch = useDispatch();

  return (
    <div className="w-14 h-14 p-2 flex items-center justify-center border border-gray-200 rounded-sm cursor-pointer hover:shadow-md transition shadow-sm hover:bg-gray-50">
      <img
        onClick={() => onSelect(cinema)}
        className="max-w-full max-h-full object-contain"
        src={cinema.logo}
        alt={cinema.tenHeThongRap}
      />
    </div>
  );
}
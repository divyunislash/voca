import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
//import dummy from "../db/data.json";

// map 형태 : 배열을 받아서 배열을 반환, 반환되는 배열의 요소는 jsx로 작성
export default function DayList() {
  const days = useFetch("http://localhost:3001/days/");

  if (days.length === 0) {
    return <span>Loading....</span>;
  }

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}

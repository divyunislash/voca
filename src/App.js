//import "./App.css";
//import styles from "./App.module.css";
import "./index.css";
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDays from "./component/CreateDays";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="create_word" element={<CreateWord />} />
          <Route path="create_day" element={<CreateDays />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <h1
//         style={{
//           color: "#f00",
//           background: "purple",
//           borderRight: "2px solid #000",
//           marginBottom: "10px",
//           opacity: 0.5,
//         }}
//       >
//         css 테스트
//       </h1>
//       <Welcome />
//       <div className={styles.box}>Test</div>
//       <Hello />
//     </div>
//   );
// }

export default App;

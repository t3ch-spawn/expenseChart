import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Chart from "./components/Chart";
import Summary from "./components/Summary";

function Card(props) {
  return (
    <div className="bg-chartCard px-[30px] rounded-lg">{props.children}</div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex w-[100%] justify-center items-center min-h-[100vh] bg-mainBg py-6">
      <div className="flex flex-col gap-7 w-[90%] max-w-[450px]">
        <Header />
        {/* main body */}
        <Card>
          <Chart />
          <Summary />
        </Card>
      </div>
    </div>
  );
}

export default App;

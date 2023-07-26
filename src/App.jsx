import { useState } from "react";
import BasicInfo from "./components/baisc-info";
import WorkExp from "./components/work-exp";
import Refrences from "./components/refrences";

function App() {
  return (
    <>
      <div className="h-screen bg-base-200 flex justify-center p-8">
        <div className="bg-neutral-content rounded-3xl p-4 shadow-lg flex flex-col gap-4 border border-white overflow-scroll">
          <BasicInfo />
          <WorkExp />
          <Refrences/>
        </div>
      </div>
    </>
  );
}

export default App;

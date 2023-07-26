//import { useState } from "react";

function BasicInfo() {
  return (
    <>
      <div>
        <div className="collapse collapse-arrow	bg-base-200 border border-white">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Contact Info</div>
          <div className="collapse-content">
            <div className="flex flex-col gap-3">
              <input type="text" placeholder="First Name" className="input input-bordered input-primary w-full max-w-xs " />
              <input type="text" placeholder="Last Name" className="input input-bordered input-primary w-full max-w-xs " />
              <input type="date" placeholder="Birth Date" className="input input-bordered input-primary w-full max-w-xs " />
              <input type="text" placeholder="Adress" className="input input-bordered input-primary w-full max-w-xs " />
              <input type="tel" placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs " />
              <input type="email" placeholder="E-mail" className="input input-bordered input-primary w-full max-w-xs " />
              <input type="text" placeholder="Citizenship" className="input input-bordered input-primary w-full max-w-xs " />
            </div>
          </div>
        </div>
      </div>
      {/*
          <div className="flex flex-col gap-3 bg-base-100 p-2 rounded-3xl">
            <h2 className="uppercase text-center font-semibold">Contact Info</h2>
            <input type="text" placeholder="First Name" className="input input-bordered input-primary w-full max-w-xs text-neutral-400" />
            <input type="text" placeholder="Last Name" className="input input-bordered input-primary w-full max-w-xs text-neutral-400" />
            <input type="date" placeholder="Birth Date" className="input input-bordered input-primary w-full max-w-xs text-neutral-400" id="" />
            <input type="text" placeholder="Adress" className="input input-bordered input-primary w-full max-w-xs text-neutral-400" />
            <input type="tel" placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs text-neutral-400" />
            <input type="email" placeholder="E-mail" className="input input-bordered input-primary w-full max-w-xs text-neutral-400" />
            <input type="text" placeholder="Citizenship" className="input input-bordered input-primary w-full max-w-xs text-neutral-400" />
          </div>
          <div className="flex flex-col gap-3 bg-base-100 p-2 rounded-3xl">
            <h2 className="uppercase text-center font-semibold ">Work Experience</h2>
            <input type="text" placeholder="First Name" className="input input-bordered input-primary w-full max-w-xs text-neutral-400" />
            <input type="text" placeholder="Last Name" className="input input-bordered input-primary w-full max-w-xs text-neutral-400" />
            <input type="date" placeholder="Birth Date" className="input input-bordered input-primary w-full max-w-xs text-neutral-400" id="" />
            <input type="text" placeholder="Adress" className="input input-bordered input-primary w-full max-w-xs text-neutral-400" />
            <input type="tel" placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs text-neutral-400" />
            <input type="email" placeholder="E-mail" className="input input-bordered input-primary w-full max-w-xs text-neutral-400" />
            <input type="text" placeholder="Citizenship" className="input input-bordered input-primary w-full max-w-xs text-neutral-400" />
  </div>*/}
    </>
  );
}

export default BasicInfo;

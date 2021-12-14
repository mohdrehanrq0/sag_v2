import React from "react";

function PCard(props) {
  return (
    <>
      <div class="wrapper relative  antialiased text-gray-900 mb-10">
        <div>
          <img
            src={props.img}
            alt=" random imgee"
            class="w-full object-cover object-center rounded-lg shadow-md"
          />

          <div class="absolute px-4 -mt-16  pcard_box ">
            <div class="bg-gray-200 p-6 rounded-lg shadow-2xl">
              <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                {props.name}
              </h4>

              <div class="mt-1">
                {props.content}
              </div>
              <div class="mt-4">
                <span class="bg-indigo-200 ml-2 text-indigo-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  {props.tagOne}
                </span>
                <span class="bg-indigo-200 ml-2 text-indigo-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  {props.tagTwo}
                </span>
                <span class="bg-indigo-200 ml-2 text-indigo-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  {props.tagThree}
                </span>
                <span class="bg-indigo-200 ml-2 text-indigo-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  {props.tagFour}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PCard;

import React from "react";

function SummaryModal(props) {
  const { summaryData, setSummaryModalActive } = props;
  var data = "Loading..";
  if (summaryData !== "" && summaryData !== undefined && summaryData !== null) {
    data = summaryData.split("\n");
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className=" flex flex-col backdrop-blur-lg bg-white h-auto w-4/6 px-4 py-4 rounded-lg">
          <div
            className="flex justify-end "
            onClick={() => setSummaryModalActive(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          {/* SUMMARY DATA BELOW */}
          {data.map((point) => {
            return <div className="text-[12px] text-bold my-2">{point}</div>;
          })}
        </div>
      </div>
    </>
  );
}

export default SummaryModal;

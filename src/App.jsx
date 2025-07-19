import { useState } from "react";

export const App = () => {
  return (
    <div className="flex flex-col gap-5 w-[700px] items-center">
      <h1 className="text-2xl font-bold">
        Demonstrating Dynamic Multi-Form Components
      </h1>
      <div>
        <FormModal />
      </div>
    </div>
  );
};

export default App;

const FormModal = () => {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (page >= 3) {
      setPage(3);
    } else {
      setPage((prev) => prev + 1);
    }
  };
  const handlePrevious = () => {
    if (page <= 1) {
      setPage(1);
    } else {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-[400px] h-[300px] bg-slate-800 text-gray-100 flex flex-col justify-center items-center rounded-md">
      <div className="p-3 w-full">
        {page === 1 && (
          <div className="flex flex-col gap-3 w-full">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="border-[1px] p-2 rounded-md w-full "
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="border-[1px] p-2 rounded-md w-full "
            />
          </div>
        )}
        {page === 2 && (
          <div className="flex flex-col gap-3 w-full">
            <input
              type="address"
              name="address"
              placeholder="1, Bello Street, New York"
              className="border-[1px] p-2 rounded-md w-full "
            />
            <input
              type="phone"
              name="phone"
              placeholder="08123456789"
              className="border-[1px] p-2 rounded-md w-full "
            />
          </div>
        )}
        {page === 3 && (
          <div className="flex flex-col gap-3 w-full">
            {/* Countries */}
            <label className="flex flex-col gap-2">
              <span className="text-sm">Country</span>
              <select className="border-[1px] rounded-md p-2">
                <option value={"Ghana"}>Ghana</option>
                <option value={"Niger"}>Niger</option>
                <option value={"Nigeria"}>Nigeria</option>
              </select>
            </label>
            {/* States */}
            <label className="flex flex-col gap-2">
              <span className="text-sm">State</span>
              <select className="border-[1px] rounded-md p-2">
                <option value={"Nassarawa"}>Nassarawa</option>
                <option value={"Lagos"}>Lagos</option>
                <option value={"Enugu"}>Enugu</option>
              </select>
            </label>
          </div>
        )}
      </div>
      {/* buttons */}
      <div className="w-full flex gap-2 justify-between  p-3">
        <button
          disabled={page === 1}
          onClick={handlePrevious}
          className="bg-sky-800 p-2 rounded-md hover:bg-sky-950 transition-colors duration-200"
        >
          Previous
        </button>
        {page === 3 ? (
          <button className="bg-sky-800 p-2 rounded-md hover:bg-sky-950 transition-colors duration-200">
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-green-800 p-2 rounded-md hover:bg-green-950 transition-colors duration-200"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

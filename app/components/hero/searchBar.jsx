import Form from "next/form";

import DropDownMenu from "../dropDownMenu";

export default function SearchBar() {
  const options = [
    { id:1, value: "SFO" },
    { id:2, value: "ATL"},
    { id:3, value: "LAX" },
    { id:4, value: "PVG" },
    { id:5, value: "MSP" },
  ];

  return (
    <div className="">
      <Form className="flex">
        <DropDownMenu
          title={"From where?"}
          icon={"/departure.png"}
          data={options}
        />
        <DropDownMenu
          title={"Where to?"}
          icon={"/arrival.png"}
          data={options}
        />
        <button
          type="submit"
          className=" text-white px-4 py-2 rounded-lg bg-purpleBlue"
        >
          Search
        </button>
      </Form>
    </div>
  );
}
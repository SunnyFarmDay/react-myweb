import { DESCRIPTION } from "../constants/Constants";

function About() {
  function description(line: string) {
    return (
      <span>
        {line}
        <br />
      </span>
    );
  }
  return (
    <>
      <div className="flex justify-between flex-wrap my-10">
        <div className="p-5 w-full sm:w-3/4 flex flex-col">
          <div className="p-6">
            <h2 className="text-3xl">Introduction</h2>
          </div>
          <div className="text-center flex-1 items-center justify-center flex">
            <p className="">{DESCRIPTION.map((line) => description(line))}</p>
          </div>
        </div>
        <div className="sm:w-1/4 w-full">
          <img
            src="https://picsum.photos/200/300"
            alt=""
            className="y-5 mx-auto"
          />
        </div>
      </div>
    </>
  );
}

export default About;

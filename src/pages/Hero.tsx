import { FULL_NAME, BIO_TITLE } from "../constants/Constants";

function Hero() {
  return (
    <>
      <div className="h-screen bg-green-600 flex">
        <div className="my-auto mx-auto relative">
          <div className="absolute"></div>
          <div className="">
            <h2 className="text-3xl">{FULL_NAME}</h2>
          </div>
          <div>
            <h3 className="text-gray-700 text-end">{BIO_TITLE}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

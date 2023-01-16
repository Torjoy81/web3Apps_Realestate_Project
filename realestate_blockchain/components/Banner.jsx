import React from "react";
import Image from "next/image";
import Search from "./Search";

function Banner() {
  return (
    <section className="h-full max-h-[969px] mb-8 xl:mb-28">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">
              Digital process & Hassle free
            </span>
            Your Dream house with us
          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quod perspiciatis repudiandae voluptatem necessitatibus, nihil quam
            nesciunt adipisci iste totam.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <Image
            src={"/static/image/house-banner.png"}
            alt=""
            width={480}
            height={420}
          />
        </div>
      </div>
      <Search />
    </section>
  );
}

export default Banner;

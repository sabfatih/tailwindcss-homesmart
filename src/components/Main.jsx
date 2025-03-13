import React from "react";

const Main = () => {
  return (
    <main className="grid gap-12 sm:gap-16 md:gap-24 lg:gap-32 px-8">
      <ButtonDownload />
      <div className="container flex flex-wrap md:justify-between items-start gap-12 max-w-5xl">
        <Qualities
          title={"Safe"}
          desc={"Our products are secure and private out-of-the-box"}
          icon={<IconLock />}
        />
        <Qualities
          title={"Efficient"}
          desc={"Feel good about your wallet and the environment"}
          icon={<IconBolt />}
        />
        <Qualities
          title={"Proven"}
          desc={"Leading the Smart Home world for 10 years"}
          icon={<IconVerified />}
        />
      </div>
    </main>
  );
};

const ButtonDownload = () => {
  return (
    <button className="my-4 focused shadow-lg hover:shadow-none transition-all cursor-pointer py-3 px-7 flex mx-auto bg-amber-400 rounded-md gap-2 text-neutral-900">
      <IconDownload />
      <p className="text-xl font-semibold my-auto">Download App</p>
    </button>
  );
};

const IconDownload = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 my-auto"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
};

const Qualities = ({ title, desc, icon }) => {
  return (
    <div className="grid gap-4 justify-items-center text-center mx-auto md:flex-1">
      <div className="rounded-full p-3 ring-4 mx-auto ring-amber-400 bg-white">
        {icon}
      </div>
      <h3 className="font-bold text-2xl">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const IconLock = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-16 m-auto"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  );
};
const IconBolt = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-16 m-auto"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  );
};
const IconVerified = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-16 m-auto"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
      />
    </svg>
  );
};

export default Main;

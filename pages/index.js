import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [head, setHead] = useState({
    y: "50%",
    x: "-50%",
  });

  useEffect(() => {
    setTimeout(() => {
      setHead((prev) => {
        return { y: "50%", x: "50%" };
      });
    }, 2000);
  }, []);
  // console.log(heart);
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="container bg-black max-w-full w-1000 h-screen overflow-hidden relative">
        <div
          style={{
            top: head.y,
            left: head.x,
            transition: "all 1.2s ease-out",
          }}
          className={`text-yellow-400 absolute transform -translate-x-1/2 -translate-y-1/2`}
        >
          <svg
            style={{
              fill: "red",
              position: "relative",
              width: 50,
            }}
            viewBox="0 0 32 29.6"
          >
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

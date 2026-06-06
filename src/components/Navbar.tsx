import { twMerge } from "tailwind-merge";
import { nameLogo, mailLogo } from "../assets/asset";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  themeVarients,
  colorVarients,
  changeThemeColor,
  ColorVariant,
} from "../utils/utils";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [themeSelectMenuVisible, setThemeSelectMenuVisible] = useState(false);

  return (
    <>
      <nav
        className={twMerge(
          "flex h-[10vh] w-full items-center justify-between bg-[rgba(11,11,11,.25)] px-4 md:px-8",
          className
        )}
      >
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <img src={nameLogo} alt="Logo" className="md:h-6" />
          </Link>
        </div>

        <span className="flex items-center justify-center">
          <span
            className={
              themeSelectMenuVisible
                ? "absolute mt-40 mr-48 flex flex-col gap-2 rounded-lg border-[1px] border-solid border-[#68676b] bg-[#2c2c2c] p-1 lg:mt-40 lg:mr-58"
                : "hidden"
            }
          >
            {colorVarients.map((color: ColorVariant) => {
              const selectedTheme = themeVarients[color];
              return (
                <button
                  key={color}
                  className="flex items-center justify-between gap-3 rounded-md bg-[#2c2c2c] p-1 text-(--color-font-primary) hover:cursor-pointer active:bg-[#c9c9c9]"
                  onClick={() => {
                    changeThemeColor(color);
                  }}
                >
                  <p>{color}</p>
                  <div className="flex items-start justify-center">
                    <div
                      style={{
                        backgroundColor: selectedTheme.primaryBackground,
                      }}
                      className={`rounded-full border-[1px] border-solid border-white p-[8px]`}
                    ></div>
                    <div
                      style={{ backgroundColor: selectedTheme.primaryFont }}
                      className={`ml-[-5px] rounded-full border-[1px] border-solid border-white p-[8px]`}
                    ></div>
                    <div
                      style={{ backgroundColor: selectedTheme.cardBorder }}
                      className={`ml-[-5px] rounded-full border-[1px] border-solid border-white p-[8px]`}
                    ></div>
                  </div>
                </button>
              );
            })}
          </span>
          <button
            className="mr-2 rounded-full border-solid bg-white p-3 hover:cursor-pointer"
            onClick={() => {
              setThemeSelectMenuVisible((prev) => !prev);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-4 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </button>
          <a
            href="mailto:shreyprajapati13@gmail.com"
            title="Send Mail"
            rel="noreferrer"
          >
            <img src={mailLogo} alt="Mail" className="md:size-16 lg:size-12" />
          </a>
        </span>
      </nav>
    </>
  );
}

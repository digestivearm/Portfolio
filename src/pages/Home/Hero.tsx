import { picture } from "../../assets/asset";

export default function Hero() {
  return (
    <>
      <section className="h-dvh w-full md:mt-0">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4">
          <img
            className="mb-6 hero_animate size-40 rounded-full bg-center object-cover md:size-52 lg:size-64"
            src={picture}
            alt="Pictue of Me!"
          />
          <h2 className="text-2xl leading-none font-extrabold tracking-tight text-(--color-heading-primary) md:text-5xl lg:text-4xl">
            Hello, I'm{" "}
            <mark className="rounded-sm bg-(--color-highlight) px-2 text-(--color-heading-primary)">
              Shrey
            </mark>
            👋🏻
          </h2>

          <h1 className="mb-3 text-center text-3xl leading-none font-extrabold tracking-tight text-(--color-heading-primary) md:text-5xl lg:text-5xl">
            Full Stack <br className="md:hidden" /> Web Developer
          </h1>

          <p className="mb-2 text-normal max-w-[30ch] text-center text-wrap text-(--color-font-primary) lg:text-lg">
            I code Beautifully simple things and I love what I do.
          </p>
          <a
            href={"mailto:shreyprajapati13@gmail.com"}
            target="_blank"
            rel="noreferrer"
            className="justify-centertext-normal flex items-center rounded-[8px] border-1 border-(--color-button-border) bg-(--color-button-primary) px-4 py-2 text-xs font-semibold text-(--color-button-text) transition-all hover:cursor-pointer hover:bg-(--color-button-hover) md:px-6 md:py-3 md:text-base"
          >
            Contact Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="ms-2 size-3 lg:size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}

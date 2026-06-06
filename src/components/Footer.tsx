import resumePdf from "../assets/Resume_Shrey_Prajapati.pdf";

export default function Footer() {
  return (
    <>
      <div className="flex w-full flex-col items-start justify-center gap-4 bg-(--color-background-secondary) p-8 md:w-11/12 md:gap-8 md:p-8 lg:w-[1024px] lg:flex-row lg:justify-between">
        <span className="flex-col items-center justify-center lg:flex">
          <p className="tracking-widest text-(--color-font-primary) md:text-xl">
            💌CONTACT ME
          </p>
          <p className="max-w-60ch w-full text-center font-normal text-(--color-font-primary)">
            <a
              href="mailto:shreyprajapati13@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              shreyprajapati13@gmail.com
            </a>
          </p>
        </span>
        <span className="relative flex-col items-center justify-center lg:-left-10 lg:flex">
          <p className="tracking-widest text-(--color-font-primary) md:text-xl">
            LET'S CONNECT🫱🏼‍🫲🏼
          </p>
          <p className="max-w-60ch flex w-full items-center justify-start gap-4 text-center font-normal text-(--color-font-primary)">
            <a href={resumePdf} target="_blank" rel="noreferrer">
              Resume
            </a>
            |
            <a
              href="https://github.com/cd-Shrey13/"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            |
            <a
              href="https://x.com/Shrey_Lad03"
              rel="noreferrer"
              target="_blank"
            >
              X
            </a>
          </p>
        </span>

        <span className="relative flex-col items-center justify-center lg:-left-16 lg:flex">
          <p className="tracking-widest text-(--color-font-primary) md:text-xl">
            MADE WITH ❤️
          </p>
          <p className="max-w-60ch w-full text-center font-normal text-(--color-font-primary)">
            By Shrey Prajapati
          </p>
        </span>
      </div>
    </>
  );
}

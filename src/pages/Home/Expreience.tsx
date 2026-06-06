import Card from "../../components/Card";

export default function Expreience() {
  return (
    <>
      <section className="about py-8 w-full flex-col items-center justify-center gap-8 px-4 ">
        <div className="flex flex-col items-center justify-center gap-8 p-4 lg:gap-15 mb-10">
          <h2 className="text-center text-4xl font-bold text-(--color-heading-primary) lg:text-5xl">
            <span className="underline decoration-(--color-highlight) decoration-8 underline-offset-3">
              Work Experience
            </span>
          </h2>
          <Card className={"h-full w-full space-y-4 lg:max-w-1/2"}>
            <h3 className="text-2xl font-bold text-(--color-heading-secondary)">Backend Developer</h3>
            <div>
              <p className="max-w-[40ch] text-lg">L.D. College of Engineering</p>
              <p className="max-w-[40ch] text-lg">Feb’25-Present</p>
            </div>
            <p className="max-w-[40ch] text-lg lg:max-w-none">
              I’ve been working as a backend developer for the college student
              portal, collaborating with a team to design and implement system
              architecture. <br />
              ◦ Developed APIs to for efficient exchange of data
              between frontend and backend. <br />
              ◦ Ensured scalability, security, and
              seamless integration with the frontend for a smooth user
              experience
            </p>
            <a
              href="https://github.com/LDCE-STUDENT-PORTAL-LATEST"
              className="inline-flex items-center rounded-lg border-[1.5px] border-solid border-(--color-button-border) bg-(--color-button-primary) px-3 py-2 text-center text-sm font-medium text-(--color-button-text) hover:bg-(--color-button-hover) focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github me-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              View Work
            </a>
          </Card>
        </div>
      </section>
    </>
  );
}

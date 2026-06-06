import Card from "../../components/Card";

export default function AboutSection() {
  return (
    <>
      <section className="about py-8 w-full flex-col items-center justify-center gap-8 ">
        <div className="w-full">
          <h2 className="mb-4 text-center text-4xl font-bold text-(--color-heading-primary) lg:gap-15 lg:text-5xl">
            <span className="underline decoration-8 underline-offset-3 decoration-(--color-highlight)">
              About
            </span>
          </h2>
          <div className="flex flex-col items-center justify-center gap-8 p-4 md:flex-row lg:items-end lg:gap-4">
            {/* left section */}
            <div>
              <article className="p-4 text-lg text-(--color-font-primary) lg:text-base">
                <p className="mb-3 max-w-[40ch] lg:max-w-[50ch]">
                  I am a B.E. student in Computer Engineering at{" "}
                  <strong>L.D. College of Engineering</strong> with a strong
                  academic record <strong> (CPI: 8.41/10)</strong>. I have a
                  passion for learning new technology and software development.
                </p>
                <p className="max-w-[40ch] lg:max-w-[50ch]">
                  My journey in technology began with a curiosity about how
                  things work, which evolved into a passion for building
                  solutions that can make a difference. I enjoy tackling complex
                  problems and transforming ideas into reality through code.
                </p>
              </article>

              <Card className="h-full w-full">
                <h3 className="text-2xl font-bold text-(--color-heading-secondary)">
                  Coding Profiles
                </h3>
                <ul>
                  <li className="text-gray-400 lg:text-sm">Leetcode: 128</li>
                  <li>GeekForGeeks: 50</li>
                </ul>
              </Card>
            </div>

            {/* right section */}
            <div className="flex flex-col items-center justify-center gap-8 p-4 lg:p-0">
              <h2 className="text-4xl font-bold text-(--color-heading-secondary)">
                Education
              </h2>
              <div className="w-full space-y-5 lg:space-y-4">
                <Card className="flex w-full items-start justify-start">
                  <div className="me-4 flex h-full items-start justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-(--color-heading-secondary)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75 0 1 0 0-1.5.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-2 text-2xl font-bold text-(--color-heading-secondary) lg:text-xl">
                      B.E. in Computer Engineering
                    </h4>
                    <p className="text-gray-400 lg:text-sm">
                      L.D. College of Enginering, Ahmedabad
                    </p>
                    <p className="text-gray-400 lg:text-sm">
                      CPI: 8.06/10 | 2022-26
                    </p>
                  </div>
                </Card>
                <Card className="flex w-full items-start justify-start">
                  <div className="me-4 flex h-full items-start justify-center">
                    <svg
                      className="h-6 w-6 text-(--color-heading-secondary)"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6 10.5237-2.27075.6386C3.29797 11.2836 3 11.677 3 12.125V20c0 .5523.44772 1 1 1h2V10.5237Zm12 0 2.2707.6386c.4313.1213.7293.5147.7293.9627V20c0 .5523-.4477 1-1 1h-2V10.5237Z" />
                      <path
                        fillRule="evenodd"
                        d="M12.5547 3.16795c-.3359-.22393-.7735-.22393-1.1094 0l-6.00002 4c-.45952.30635-.5837.92722-.27735 1.38675.30636.45953.92723.5837 1.38675.27735L8 7.86853V21h8V7.86853l1.4453.96352c.0143.00957.0289.01873.0435.02746.1597.09514.3364.14076.5112.1406.3228-.0003.6395-.15664.832-.44541.3064-.45953.1822-1.0804-.2773-1.38675l-6-4ZM10 12c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1Zm1-4c-.5523 0-1 .44772-1 1s.4477 1 1 1h2c.5523 0 1-.44772 1-1s-.4477-1-1-1h-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-2 text-2xl font-bold text-(--color-heading-secondary) lg:text-xl">
                      HSC
                    </h4>
                    <p className="text-gray-400 lg:text-sm">
                      The Radiant International School, Surat
                    </p>
                    <p className="text-gray-400 lg:text-sm">
                      CPI: 8.06/10 | 2022-26
                    </p>
                  </div>
                </Card>
                <Card className="flex w-full items-start justify-start">
                  <div className="me-4 flex h-full items-start justify-center">
                    <svg
                      className="h-6 w-6 text-(--color-heading-secondary)"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m6 10.5237-2.27075.6386C3.29797 11.2836 3 11.677 3 12.125V20c0 .5523.44772 1 1 1h2V10.5237Zm12 0 2.2707.6386c.4313.1213.7293.5147.7293.9627V20c0 .5523-.4477 1-1 1h-2V10.5237Z" />
                      <path
                        fillRule="evenodd"
                        d="M12.5547 3.16795c-.3359-.22393-.7735-.22393-1.1094 0l-6.00002 4c-.45952.30635-.5837.92722-.27735 1.38675.30636.45953.92723.5837 1.38675.27735L8 7.86853V21h8V7.86853l1.4453.96352c.0143.00957.0289.01873.0435.02746.1597.09514.3364.14076.5112.1406.3228-.0003.6395-.15664.832-.44541.3064-.45953.1822-1.0804-.2773-1.38675l-6-4ZM10 12c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1Zm1-4c-.5523 0-1 .44772-1 1s.4477 1 1 1h2c.5523 0 1-.44772 1-1s-.4477-1-1-1h-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-2 text-2xl font-bold lg:text-xl dark:text-white">
                      SSC
                    </h4>
                    <p className="text-gray-400 lg:text-sm">
                      The Radiant International School, Surat
                    </p>
                    <p className="text-gray-400 lg:text-sm">
                      CPI: 8.06/10 | 2022-26
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

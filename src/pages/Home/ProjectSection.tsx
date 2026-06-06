import Button from "../../components/Button";
import Card from "../../components/ProjectCard";
import { useNavigate } from "react-router-dom";
import { projectDetails } from "../../utils/utils";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <section className=" w-full py-8  md:px-4  flex items-center justify-center ">
        <div className="w-10/12 flex items-center justify-center lg:gap-15 flex-col md:w-11/12">
          <h2 className="mb-8 text-center text-4xl font-bold text-(--color-heading-primary) lg:text-5xl">
            <span className="underline decoration-(--color-highlight) decoration-8 underline-offset-3">
              Projects
            </span>
          </h2>

          <div className="flex flex-col items-center justify-start md:grid grid-cols-2 gap-4 lg:grid-cols-3">
            {projectDetails.map(
              ({ title, image, url, tags, github, description }, index) => {
                return (
                  <Card
                    key={index}
                    image={image}
                    title={title}
                    url={url}
                    tag={tags}
                    description={description}
                    github={github}
                  />
                );
              },
            )}
          </div>

          <Button
            onClickHandler={() => navigate("/project")}
            className="hidden border-[1px] border-solid border-(--color-button-border) bg-(--color-button-primary) text-(--color-font-primary) transition duration-300 ease-in-out hover:translate-y-1 hover:bg-(--color-button-hover) active:bg-(--color-button-active) lg:flex"
          >
            View All
          </Button>
        </div>
      </section>
    </>
  );
}

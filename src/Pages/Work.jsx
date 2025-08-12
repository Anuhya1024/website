

import SectionTitle from "../Components/SectionTitle";
import WorkCards from "../Components/WorkCards";

const Work = () => {
  return (
    <div id="work" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[800px] h-screen xl:w-[70%] relative mt-40 flex flex-col items-center justify-center pb-36">
        <div className="w-full">
          <SectionTitle title="Work Experience" subtitle="Where I have worked so far" />
        </div>
        <div className="w-full mt-8">
          <WorkCards />
        </div>
      </div>
    </div>
  );
};

export default Work;
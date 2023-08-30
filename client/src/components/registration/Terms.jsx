import React, { useEffect } from "react";
import { Throu_l, Throu_l_footer, throu } from "../../assets";
import Scrollbar from "../landingPage/utility_components/Scrollbar";

const Terms = ({ handleSection, previousSection }) => {
  useEffect(() => {
    document.getElementById("Terms-text").style.overflow = "auto";
  }, []);

  return (
    <div className="md:min-w-[750px] md:w-[80vw] md:max-w-[950px] md:h-[550px] w-screen h-screen bg-white pt-20 md:pt-0 overflow-hidden">
      <div className="md:container flex flex-col items-start justify-center gap-4 w-full h-full p-8">
        <div className="flex flex-col items-start justify-start gap-4">
          <img src={Throu_l} alt="" className="w-[150px] h-[40px]" />
          <p className=" font-sen md:text-[22px] text-[18px] font-semibold text-[#B5B5B5]">
            Términos y Condiciones
          </p>
        </div>

        <div
          id="Terms-text"
          className="overflow-y-auto modal-scrollable-content md:min-h-[200px] md:h-full md:max-h-[400px] h-[90%]"
        >
          <p className="font-jakarta text-[18px] ">
            <span className="text-[22px] w-[65%] font-bold mb-[20px] block">
              {" "}
              Sed id orci quam pharetra eget platea. Magna ultrices dignissim
              quam duis vitae condimentum.
            </span>
            Ultricies malesuada quam sit magnis. Sit elementum aliquam feugiat
            egestas. Posuere enim sem euismod neque scelerisque amet. Ipsum
            vitae consectetur fringilla sed gravida elit ac. Quis tortor ut amet
            eget at. Neque orci pretium ut eget pretium in. Suspendisse massa
            lectus at ipsum. In pellentesque neque purus in amet pulvinar. Arcu
            ut sociis vitae malesuada. Tristique mauris bibendum imperdiet duis
            nulla id sed eget. Egestas libero dui urna nisl sit nunc ut
            malesuada.
            <span className="text-[22px] w-[65%] font-bold my-[20px] block">
              1.Sed vitae pellentesque consectetur auctor bibendum sem.
            </span>
            Vel mattis sapien dictum fermentum enim viverra sodales. Orci
            suspendisse ut sed est pharetra. Feugiat scelerisque pretium
            volutpat nunc. Pharetra consequat sed mi eget sit. Quis fermentum
            sed duis sed ipsum. Volutpat dolor posuere consequat vulputate purus
            sed ante erat vitae. Bibendum venenatis nec malesuada amet fames
            tortor.{" "}
            <span className="text-[22px] w-[65%] font-bold mb-[20px] block">
              {" "}
              Sed id orci quam pharetra eget platea. Magna ultrices dignissim
              quam duis vitae condimentum.
            </span>
            Ultricies malesuada quam sit magnis. Sit elementum aliquam feugiat
            egestas. Posuere enim sem euismod neque scelerisque amet. Ipsum
            vitae consectetur fringilla sed gravida elit ac. Quis tortor ut amet
            eget at. Neque orci pretium ut eget pretium in. Suspendisse massa
            lectus at ipsum. In pellentesque neque purus in amet pulvinar. Arcu
            ut sociis vitae malesuada. Tristique mauris bibendum imperdiet duis
            nulla id sed eget. Egestas libero dui urna nisl sit nunc ut
            malesuada.
            <span className="text-[22px] w-[65%] font-bold my-[20px] block">
              1.Sed vitae pellentesque consectetur auctor bibendum sem.
            </span>
            Vel mattis sapien dictum fermentum enim viverra sodales. Orci
            suspendisse ut sed est pharetra. Feugiat scelerisque pretium
            volutpat nunc. Pharetra consequat sed mi eget sit. Quis fermentum
            sed duis sed ipsum. Volutpat dolor posuere consequat vulputate purus
            sed ante erat vitae. Bibendum venenatis nec malesuada amet fames
            tortor.
          </p>
        </div>

        <div className="flex items-center justify-end w-full">
          <button
            type="button"
            className="w-[400px] text-[16px] bg-[#062147] py-4 text-white"
            onClick={() => handleSection(previousSection)}
          >
            {" "}
            Continuar{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;

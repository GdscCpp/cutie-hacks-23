import resources from "@/public/resources.svg";
import polyPostSvg from "@/public/polypost.svg";
import timelineSvg from "@/public/timeline.svg";

function homeScreen() {
  return (
    <div className="bg-base-100 flex justify-center text-center w-full">
      <div className="h-[750px] bg-sky-900 w-screen">
        <div className="w-96 h-[654px] bg-white rounded-[30px] shadow-inner flex flex-col justify-around m-auto mt-10 items-center">
          <div className="text-center">
            <span className="text-green-700 text-[40px] font-bold font-['Inter']">
              Bronco
            </span>
            <span className="text-yellow-500 text-[40px] font-bold font-['Inter']">
              Safe
            </span>
          </div>
          <div className="flex justify-around">
            <img
              className="w-36 h-[82.26px] bg-[#00843D, #FFFDFD00]"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Cal_Poly_Pomona_Broncos_logo.svg/1200px-Cal_Poly_Pomona_Broncos_logo.svg.png"
            />
            <div className="text-black text-3xl font-bold font-['Inter'] pl-8">
              Hello
              <br />
              Bronco!
            </div>
          </div>
          <div className="w-96 h-[73px] text-center">
            <span className="text-black text-3xl font-bold font-['Inter']">
              Safety Tip of the Day!
            </span>
            <br />
            <span className="text-black text-[25px] font-normal font-['Inter']">
              Always walk in pairs!
            </span>
          </div>
          <a href="/resources">
            <div className="bg-green-700 flex h-[100px] w-fit justify-around text-center items-center rounded-3xl p-[15px]">
              <img className="w-[88px] h-[84px]" src={resources.src} />
              <div className="w-[230px] h-9 text-center text-black text-3xl font-bold font-['Inter']">
                Resources
              </div>
            </div>
          </a>
          <a href="/timeline">
            <div className="bg-green-700 flex h-[100px] w-fit justify-around text-center items-center rounded-3xl p-[15px]">
              <img className="w-[88px] h-[84px]" src={timelineSvg.src} />
              <div className="w-[230px] h-9 text-center text-black text-2xl font-bold font-['Inter']">
                Activity Timeline
              </div>
            </div>
          </a>
          <a href="https://thepolypost.com/" target="_blank">
            <div className="bg-green-700 flex h-[100px] w-fit justify-around text-center items-center rounded-3xl p-[15px]">
              <img className="w-[88px] h-[84px]" src={polyPostSvg.src} />
              <div className="w-[230px] h-9 text-center text-black text-2xl font-bold font-['Inter']">
                The Poly Post
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}



export default function Home() {
    return homeScreen()
}
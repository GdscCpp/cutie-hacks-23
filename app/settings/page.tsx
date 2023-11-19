import person from "@/public/person.svg";

export default function Home() {
    return (
      <div className="flex justify-center items-center h-screen w-full overflow-hidden">
        <div className="w-1/2 h-full bg-sky-900 rounded-[30px]">
          <div className="bg-white h-full rounded-md shadow-inner flex flex-col text-center">
            <img className="rounded-[262px]" src={person.src} />
            <div className="h-full">
              <span className="text-black text-xl font-bold font-['Inter']">
                Class Level:{" "}
              </span>
              <span className="text-black text-xl font-normal font-['Inter']">
                Sophmore
                <br />
              </span>
              <span className="text-black text-xl font-bold font-['Inter']">
                Major:
              </span>
              <span className="text-black text-xl font-normal font-['Inter']">
                {" "}
                Computer Science
                <br />
              </span>

              <span className="text-black text-[25px] font-bold font-['Inter']">
                Brandon K. Chang
                <br />
              </span>
              <span className="text-black text-[25px] font-thin font-['Inter']">
                015817191
                <br />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}


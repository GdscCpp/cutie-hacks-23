import person from "@/public/person.svg";

export default function Home() {
    return (<div className="flex justify-center items-center h-screen">
	
	<div className="w-[430px] h-[932px] relative bg-sky-900 rounded-[30px]">
    <div className="w-96 h-[754px] left-[23px] top-[73px] absolute bg-white rounded-[30px] shadow-inner">
        <img className="w-28 h-28 left-[19px] top-[25px] absolute rounded-[262px]" src={person.src} />
        <div className="w-[248px] h-[62px] left-[34px] top-[159px] absolute"><span className="text-black text-xl font-bold font-['Inter']">Class Level: </span><span className="text-black text-xl font-normal font-['Inter']">Sophmore<br/></span><span className="text-black text-xl font-bold font-['Inter']">Major:</span><span className="text-black text-xl font-normal font-['Inter']"> Computer Science<br/></span></div>
    </div>
    <div className="w-[237px] h-[62px] left-[162px] top-[130px] absolute"><span className="text-black text-[25px] font-bold font-['Inter']">Brandon K. Chang<br/></span><span className="text-black text-[25px] font-thin font-['Inter']">015817191<br/></span></div>
		
</div></div>)
}


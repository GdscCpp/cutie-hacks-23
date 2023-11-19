import bronco from "@/public/bronco.svg";

export default function Home() {
	return(<div className="flex justify-center items-center h-screen">
	<div className="w-[430px] h-[932px] relative bg-gradient-to-b from-green-700 to-white rounded-[30px]">
    <img className="w-[441px] h-[169px] left-0 top-[299px] absolute" src={bronco.src} />
    <div className="w-72 h-[59px] left-[71px] top-[497px] absolute bg-white rounded-[30px]" />
    <div className="left-[126px] top-[509px] absolute text-center text-green-700 text-3xl font-bold font-['Inter']">BroncoName</div>
    <div className="w-72 h-[59px] left-[71px] top-[597px] absolute bg-white rounded-[30px]" />
    <div className="left-[150px] top-[608px] absolute text-center text-green-700 text-3xl font-bold font-['Inter']">Password</div>
	<div className="w-154 h-[41px] left-[154px] top-[697px] absolute bg-white rounded-[30px]" />
    <div className="left-[185px] top-[706px] absolute text-center text-black text-xl font-bold font-['Inter']">Log In</div>
</div></div>)
}
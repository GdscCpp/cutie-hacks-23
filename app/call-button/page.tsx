function callButton(){
    return(
        <div className="bg-base-100 items-center">        
            <div className="bg-base-100 flex flex-col justify-center items-center p-3 w-[447px] h-screen mr-auto ml-auto" > 
                <div className="w-[347px] h-[98px] text-center text-black text-2xl font-normal font-['Inter'] content-center mb-12">Press the button to call campus police</div>
                <div className="relative">
                    <a href={'tel:9098693070'}>
                        <div className="w-[283px] h-[275px] bg-red-500 rounded-full content-center" />
                        <div className="w-[230px] h-9 text-center text-white text-[32px] font-normal font-['Inter'] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">PRESS HERE</div>
                    </a>
                </div>
            </div>
        </div>

    )
}



export default function Home(){
    return callButton()
}
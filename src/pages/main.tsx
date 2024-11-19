import Boxes from "./content"

export default function Main(){
    return(
        <div className="w-[1046px] h-[1028px] top-[104px] left-[187px] pt-[80px] mt-[-70px] pb-[80px] ml-[140px] gap-[80px]">
            <div className="w-[701px] h-[496px] flex-row ml-[160px]">
                <div className="w-[77px] h-[24px]">
                    <h5 className="text-[#23A6F0;] font-bold w-[700px] size-[16px] h-[24px] text-center font-sans flex-row text-[19px]">Welcome</h5>
                </div>
            <div className="ml-[100px] mt-[50px] w-[542px] h-[160px] text-center flex-col ">
                <h1 className="text-white text-[60px] font-bold leading-[80px] font-sans">Selling on the internet like a pro</h1>
            </div>

            <div className="w-[536px] h-[60px] mt-[30px] ml-[100px]">
                <h4 className="text-white text-2xl text-center leading-[30px] align-[center] font-sans">We know how large objects will act, but things on a 
                small scale just do not act that way.</h4>
            </div>

            <div className="w-[365px] h-[52px] gap-[10px] mt-[50px] ml-[190px]">
                <button className="bg-[#23A6F0] rounded gap-be h-[60px] w-[170px] text-white font-sans">Get Quote Now</button>
                <button className="border-2 rounded border-blue-500 ml-5 h-[60px] w-[170px] text-blue-400 font-sans">Learn more</button>
            </div>
            </div>
            <Boxes/>
        </div>
    )
}
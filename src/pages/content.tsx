export default function Boxes() {
    return (
        <div className="mainbox grid grid-cols-3 w-[1046px] h-[292px] gap-[30px]">
           
           {/* first box */}
            <div className="first w-[328px] h-[290px] border-2 bg-white">
                <div className="w-[70px] h-[76px] rounded-[10px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px] bg-[#FFDCD1] mt-[40px] ml-[40px]"></div>
                <div className="w-[170px] h-[30px] ml-[40px] mt-[20px]">
                    <h5 className="text-[#252B42] font-bold text-[20px] font-sans">training Courses</h5>
                </div>
                <div className="line w-[50px] h-[2px] bg-[#E74040] mt-[15px] ml-[40px]"></div>
                <div className="para w-[222px] h-[60px] ml-[40px] mt-[12px]">
                    <p className="font-medium text-[#737373] font-sans">The gradual accumulation of information about atomic and small-scale behaviour...</p>
                </div>
            </div>
             
             {/* second box */}
            <div className="second w-[328px] h-[290px] border-2 bg-white">
                <div className="w-[70px] h-[76px] rounded-[10px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px] bg-[#B9EAAB] mt-[40px] ml-[40px]"></div>
                <div className="w-[170px] h-[30px] ml-[40px] mt-[20px]">
                    <h5 className="text-[#252B42] font-bold text-[17px] font-sans">2,769 online courses</h5>
                </div>
                <div className="line w-[50px] h-[2px] bg-[#E74040] mt-[15px] ml-[40px]"></div>
                <div className="para w-[222px] h-[60px] ml-[40px] mt-[12px]">
                    <p className="font-medium text-[#737373] font-sans">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
                </div>
            </div>

            {/* third box */}
            <div className="third w-[328px] h-[290px] bg-[#23A6F0]">
                <div className="w-[70px] h-[76px] rounded-[10px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px] bg-[#FFFFFF] border-2 mt-[40px] ml-[40px]"></div>
                <div className="w-[170px] h-[30px] ml-[40px] mt-[20px]">
                    <h5 className="text-white font-bold text-[21px] font-sans">training courses</h5>
                </div>
                <div className="line w-[50px] h-[2px] bg-white mt-[15px] ml-[40px]"></div>
                <div className="para w-[222px] h-[60px] ml-[40px] mt-[12px]">
                    <p className="font-medium text-white font-sans">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
                </div>
            </div>
        </div>
    );
}

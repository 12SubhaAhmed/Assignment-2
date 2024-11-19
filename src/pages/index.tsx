import Link from "next/link"
import Main from "./main"

export default function Nav(){
  return(
    <div className="bg-[#252B42;] w-[1440px] h-[1132px] top[-590px] left-[-750px]">
      <div className="header w-[1322px] h-[91px] left-[59px] ml-[20px] mr-[30px]">
      <header className="text-white body-font bg-[#252B42;]">

        <div className="w-[1322px] h-[91px] left-[59px]container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="ml-7 text-3xl font-sens font-bold">BrandName</span>
        <nav className="md:mr-auto md:ml-32 md:py-3 md:pl-6 flex flex-wrap font-sens font-bold items-center text-base justify-center">
        <Link className="mr-5 hover:text-blue-400 " href={"/"}>Home</Link>
        <Link className="mr-5 hover:text-blue-400 " href={"/"}>Product</Link>
        <Link className="mr-5 hover:text-blue-400 " href={"/"}>Pricing</Link>
        <Link className="mr-5 hover:text-blue-400 " href={"/"}>Contact</Link>
        </nav>

        <div className="flex space-x-8 mt-4 md:mt-0 ">
                 <button className="inline-flex items-right text-white border-0 py-3 px-5 focus:outline-none rounded text-base">
             Login
           </button>

           <button className="inline-flex place-items-end bg-blue-400 font-sens text-white border-0 py-3 px-4 focus:outline-none rounded text-base">
             Join us
           </button>
            </div>
        </div>
      </header>
      </div>
      <div className="w-[1046px] h-[1028px] left-[197px] top-[104px] pt-[80px] pb-[80px] gap-[80px]">
         <div className="flex row-auto bg-white">
         </div>
         <Main/> 
      </div>
    </div>
  )}

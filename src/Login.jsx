import esilogo  from "./assets/esilogo.png"
function Login() {

 


  return (<div className="bg-[#2F3E47] h-min-screen flex justify-end items-center " >
    <form className="bg-[#F5F7FF] w-full max-w-[600px] h-screen top-[12px]  left-[828px] rounded-[30px] shadow-lg  ">
    <div className="flex flex-col items-center ">
    <img src={esilogo} alt="esi sba" className="w-[60px] h-auto mt-5" />
    <div className="ml-10"> 
    <h1 className=" text-[40px] font-semibold text-center leading-tight tracking-[0.05em] mb-20 mt-40 ">
      Welcome to your PFE guide
  <span className="block sm:inline p-3 "> platform</span>
</h1>
    </div>
  </div>
  <div className>
  <label htmlFor="email" className=" font-Roboto font-normal text-[#282A2C] leading-[24px] px-22 ">
            Email
          </label>
          <div className="px-20">
          <input 
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full  p-3 border border-gray rounded-[25px] focus:outline-none focus:ring-2 focus:ring-blue-500 border-[#B70000]"

          />
          <div className="mt-6">
  <label htmlFor="password" className="font-Roboto font-normal text-[#282A2C] leading-[24px] ">
    Password
  </label>
  <div className="">
    <input
      type="password"
      id="password"
      placeholder="Enter your password"
      className="w-full p-3 border border-gray rounded-[25px] focus:outline-none focus:ring-2 focus:ring-blue-500 border-[#B70000]"

    />
    <div className="flex justify-center mt-8">
  <button 
    className="w-[456px] h-[48px] bg-[#0A7477] text-white font-semibold rounded-[25px] shadow-md hover:bg-[#086b6c] transition duration-300"
  >
    Log In
  </button></div> </div></div> </div></div> </form> </div >
      )
}

export default Login;

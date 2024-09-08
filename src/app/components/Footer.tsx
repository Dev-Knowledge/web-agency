import Image from "next/image"

function Footer() {
  return (
    <footer className="w-full  bg-gradient-to-b from-[#000000] to-[#444444] text-white py-10 px-16">
        <div className="w-full h-[1px] bg-slate-400"></div>
        <div className="flex flex-col justify-between items-center my-20 ">
            <Image src="/logo-white.png" alt="logo" width={100} height={50} />
            <div>
                <nav>
                    <ul className='flex md:flex-row sm:flex-col justify-between items-center gap-4 text-{16px]'>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        
                    </ul>
                </nav>
            </div>
        </div>
            <div className="flex md:flex-row flex-col sm:gap-8 w-full justify-between items-center text-sm sm:text-center">
                <p className="md:order-1 sm:order-1">© 2024 WebDev Agency. All rights reserved.</p>
                <nav>
                    <ul className="flex md:flex-row flex-col sm:order-2 gap-4 underline font-light">
                        <li>Privacy Policy</li>
                        <li>Terms and conditions</li>   
                        <li>Cookie Policy</li>
                    </ul>
                </nav>
            </div>
    </footer>
  )
}

export default Footer
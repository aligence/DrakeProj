function Navbar(){
    return (
    <nav className="flex flex-col sm:flex-row items-center justify-between px-0 rounded-2xl bg-gray-200 backdrop-blur-xl bg-opacity-10 sm:h-16 absolute z-10 top-1 right-5 text-3xl font-bold text-white ">
        <a href="#" className="text-white hover:animate-pulse hover:text-gray-200 mx-6"> [ HOME ]</a> 
        <a href="#" className="text-white hover:animate-pulse hover:text-gray-200 mx-6">[ ABOUT ]</a> 
        <a href="#" className="text-white hover:animate-pulse hover:text-gray-200 mx-6">[ LINKS ]</a> 
    </nav>
    )
}
export default Navbar
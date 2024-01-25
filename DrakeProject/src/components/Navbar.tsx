function Navbar(){
    return (
    <nav className="flex items-center justify-between px-4 w-1/3 rounded-2xl bg-gray-200 backdrop-blur-xl bg-opacity-10 h-16 absolute z-10 top-1 right-1 text-3xl text-white font-bold animate-fade-in">
        <a href="#" className="text-white hover:animate-pulse hover:text-gray-200"> [ HOME ]</a> 
        <a href="#" className="text-white hover:animate-pulse hover:text-gray-200">[ ABOUT ]</a> 
        <a href="#" className="text-white hover:animate-pulse hover:text-gray-200">[ LINKS ]</a> 
    </nav>
    )
}
export default Navbar
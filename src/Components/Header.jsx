import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <header className="z-50 flex flex-wrap w-full text-sm md:justify-start md:flex-nowrap">
            <nav className="mt-6 relative w-full bg-white border border-gray-200 rounded-[16px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto" aria-label="Global">
            <div className="flex items-center justify-between">
                <a className="flex-none text-xl font-bold" href="/">Expense Tracker</a>

            </div>
            <div className="flex flex-col mt-5 list-none gap-y-4 gap-x-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">

                <li className="text-lg font-medium text-gray-700 hover:text-gray-400 md:py-6"><NavLink className={({isActive})=>isActive?"is-active":""} to="/">Home</NavLink></li>
                <li className="text-lg font-medium text-gray-700 hover:text-gray-400 md:py-6"><NavLink className={({isActive})=>isActive?"is-active":""} to="/income">Income</NavLink></li>
                <li className="text-lg font-medium text-gray-700 hover:text-gray-400 md:py-6"><NavLink className={({isActive})=>isActive?"is-active":""} to="/expense">Expense</NavLink></li>

                </div>
            </nav>
        </header>
        </div>
    );
};

export default Header;
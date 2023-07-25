import Header from "../Components/Header";

const Income = () => {
    return (
        <div>
            <Header/>
            <div className="w-3/5 mx-auto mt-10 text-center">
                <h3 className="mb-6 text-3xl">Add Income</h3>
                <p className="inline-flex items-center justify-center gap-2 px-20 py-6 mb-5 text-2xl font-semibold text-white transition-all bg-green-500 border border-none rounded-md">$2000</p>
                <div className="flex w-4/5 mx-auto">
                <input type="number" className="w-full px-4 py-3 text-sm border-gray-200 rounded-md  focus:border-blue-500 focus:ring-blue-500 bg-slate-200" placeholder="Deposit here.."/>
                <button type="button" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ">Deposit</button>
                </div>

            </div>
        </div>
           
       
 
    );
};

export default Income;
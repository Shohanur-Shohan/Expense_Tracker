import React, { useState } from 'react';
import Header from '../Components/Header';

const Home = () => {
    const [list, setList] = useState([]);
    const [itemTitle, setItemTitle] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [income, setIncome]= useState(10000);
    const [expense, setExpense]= useState(0);

    const addExpense = ()=>{
        if(itemTitle && itemPrice){

            // const item = {title: itemTitle, price: itemPrice};
            setList([...list, {title: itemTitle, price: itemPrice}]);
            setExpense(expense + parseInt(itemPrice));
            setIncome(income - parseInt(itemPrice))

        }else{
            alert("Form Empty");
        }
        
    }

    const deleteItem =(index) =>{
       const newList = [...list];
       newList.splice(index, 1);
       setList(newList);
    }


    return (
        <div>
            <Header/>
            <div className='w-2/3 mx-auto mt-10'>

                <div>
                    <div className='flex justify-center text-center'>
                        <div className="justify-center gap-2 px-10 py-6 mb-5 mr-5 text-2xl font-semibold text-white transition-all bg-green-500 border border-none rounded-md">
                            <p>Income Amount</p>
                            <p>${income}</p>
                        </div>
                        <div className="justify-center gap-2 px-10 py-6 mb-5 ml-5 text-2xl font-semibold text-white transition-all bg-red-500 border border-none rounded-md">
                            <p>Expense Ammount</p> 
                            <p>${expense}</p> 
                        </div>                                  
                    </div>
                    <div className="w-3/5 px-3 py-5 mx-auto mb-10 text-center border-2 rounded-md bg-slate-200">
                        <input onChange={(e)=>setItemTitle(e.target.value)} type="text" className="w-full px-4 py-3 mb-2 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 " placeholder="Product name.."/>
                        <input onChange={(e)=>setItemPrice(e.target.value)}  type="number" className="w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500" placeholder="Product price.."/>
                        <button onClick={addExpense} type="button" className="px-12 py-3 mx-auto mt-2 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Add</button>
                    </div>
                </div>
                {/*  */}
                {
                    list.length > 0 ?(

                        list.map((element, id)=>{
                            return(
                                <div key={id} className='flex justify-between w-3/5 px-4 py-5 mx-auto my-2 text-sm border-gray-200 rounded-md shadow-md bg-slate-200 '>                
                                    <div className='flex my-auto'>
                                        <p className='mr-3'>{id}</p>
                                        <p>{element.title}</p>
                                    </div>
                                    <div className='flex my-auto'>
                                        <p className='my-auto text-xl font-semibold'>{element.price}</p>
                                        <p onClick={deleteItem} className='ml-5 text-2xl font-semibold text-red-600'>X</p> 
                                    </div>
                                    
                                </div>
                            );
                            
                        })

                    ) : (
                        <div className='flex justify-between w-3/5 px-4 py-5 mx-auto my-2 text-sm border-gray-200 rounded-md shadow-md bg-slate-200 '>                
                            <p>Empty</p>
                        
                        </div>
                    )
                    

                }

            </div>
            
        </div>
    );
};

export default Home;

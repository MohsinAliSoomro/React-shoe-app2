import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext/globalState'
const Home = () => {
    const { state } = useContext(GlobalContext);
    return (
        <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
            <div className="ml-6 pt-1">
                <h1 className="text-2xl text-blue-700 leading-tight">
                    Home
                </h1>
                <p className="text-base text-gray-700 leading-normal">
                    Building apps together
                </p>
            </div>
        </div>
    )
}
export default Home;
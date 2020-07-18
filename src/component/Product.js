import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext/globalState'
import { Link } from 'react-router-dom'
const Product = () => {
    const { state } = useContext(GlobalContext);
    // console.log(Object.keys(state[0]))
    return (
        <div>
            {/* {Object.keys(state[0]).map(item=>{
        const {price,name} = state[0][item]
        return(<h1>
            {item} values {name}</h1>)
    })} */}
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {Object.keys(state[0]).map(item => {
                            const { price, name, img } = state[0][item];
                            return (
                                <div key={item} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <Link key={item} to={`/product/${item}`} className="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img} />
                                    </Link>
                                    <div className="mt-4">
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                                        <p className="mt-1">${price}</p>
                                    </div>
                                    <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to cart</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Product;
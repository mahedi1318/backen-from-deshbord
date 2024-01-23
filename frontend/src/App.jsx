
import './App.css'
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import { useState } from 'react'

function App() {

    let [product, setProduct] = useState(true)
    let [adminProduct, setAdminProduct]=useState(false)

    let hanldeProductShow = ()=>{      
      setProduct(true)
      setAdminProduct(false)
    }

    let hanldeAdminProduct = ()=>{
      setAdminProduct(true)
      setProduct(false)
    }

  return (
    <>
      <div className='flex gap-x-4'>
        <div className='bg-primary w-[200px] h-screen text-center pt-4'>
          <div>
            <img className='w-[100px] h-[100px] rounded-full m-auto' src="images/logo.png" alt="" />
            <h1 className='text-xl font-bold text-white mt-2'>Admin + Products</h1>
          </div>
          <ul className='mt-8'>
            <li onClick={hanldeProductShow} className={`py-3 hover:bg-secondery transition-all font-semibold hover:text-white ${!product ? "bg-none" : "bg-[#f39c12]"}`}>Product Show</li>
            <li onClick={hanldeAdminProduct} className={`py-3 hover:bg-secondery transition-all font-semibold hover:text-white ${!adminProduct ? "ng-none" : "bg-[#f39c12]"}`}>Admin Product</li>
            <li className='py-3 hover:bg-secondery transition-all font-semibold hover:text-white'>Product Send</li>
            <li className='py-3 hover:bg-secondery transition-all font-semibold hover:text-white'>Product Send</li>
            <li className='py-3 hover:bg-secondery transition-all font-semibold hover:text-white'>Product Send</li>
            <li className='py-3 hover:bg-secondery transition-all font-semibold hover:text-white'>Product Send</li>
            <li className='py-3 hover:bg-secondery transition-all font-semibold hover:text-white'>Product Send</li>
            <li className='py-3 hover:bg-secondery transition-all font-semibold hover:text-white'>Product Send</li>
            <li className='py-3 hover:bg-secondery transition-all font-semibold hover:text-white'>Product Send</li>
          </ul>
        </div>
        <div>
          <h1>
            {product && <Home/>}
            {adminProduct && <Admin/>}
          </h1>
        </div>
      </div>
    </>
  )
}

export default App

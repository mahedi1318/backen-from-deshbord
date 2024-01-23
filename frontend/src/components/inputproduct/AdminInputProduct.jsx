import React, { useState } from 'react'
import { AiFillCloseSquare } from "react-icons/ai";
import axios from "axios"

const AdminInputProduct = () => {

    let [productname, setProductname] = useState("")
    let [brandname, setBrandname] = useState("")
    let [productDescreption, setProductDescreption] = useState("")
    let [colorCase, setColorCase] = useState("")
    let [productSize, setProductSize] = useState([])
    let [number, setNumber] = useState(1)
    let [price, setPrice] = useState("")
    let [discountPrice, setDiscountPrice] = useState("")
    let [totalPrice, setTotalPrice] = useState("")
    let [error, setError] = useState("")



    let handleProductName = (e)=>{
      setProductname(e.target.value)
    }
    let handleBrandName = (e)=>{
      setBrandname(e.target.value)
    }
    let handleProductDescreption = (e)=>{
      setProductDescreption(e.target.value)
    }

    let handleColorCase = (e)=>{
      const {value, checked} = e.target
      if(checked){
        setColorCase(item=>[...item, value])
      }else{
        setColorCase(item=>{
          return[...item.filter((colorCase => colorCase !== value))]
        })
      }
    }
    
    let handleSize = (e)=>{
     
      const {value} = e.target
      if(value){
        setProductSize((s)=>[...s, value])
      }
    }
  

    let handleIncrement = ()=>{
      if(number < 5){
        setNumber(number + 1)
      }
    }

    let handleDecrement = ()=>{
      if(number > 1){
        setNumber(number - 1)
      }
  }


  // http://localhost:8080/products

    let handleSubmit= ()=>{

      try{
        let data = {
          productname: productname,
          brandname: brandname,
          productDescreption: productDescreption,
          colorCase: colorCase,
          productSize: productSize,
          number: number,
          price: price,
          discountPrice: discountPrice,
          totalPrice: totalPrice,
  
        }
        axios.post("http://localhost:8080/products",data)
            .then((caseRes)=>{
              setError(caseRes.data)
            }).catch(err=>{
              console.log(err.message)
            })
      } catch(err){
        console.log("err dise" + err)
      }
     
    }

    let handlePrice = (e)=>{
      let a = Number (e.target.value)
      setPrice(a)  
      // console.log(a - discountPrice)
      discountFun(a, discountPrice)
    }

    let handleDiscountPrice = (e)=>{
      setDiscountPrice(Number (e.target.value))      
      // console.log(price - Number (e.target.value))
      discountFun(price, Number (e.target.value))
    }

    function discountFun(priceCase, disPrice){
      let result = priceCase - disPrice
      setTotalPrice(result)
    }

    const hanldeDeleteSize = (item)=>{
      const arrayDelete = productSize.filter(function (mainarr){
        return mainarr !== item
      })
      setProductSize(arrayDelete)
    }

  return (
    <div>
      <div className='imput-group'>
        <label className='text-xl block' htmlFor="">Product Name:</label>
        <input onChange={handleProductName} className='w-[500px] border border-solid border-gray-500 py-2 px-3  rounded-2xl' type="text" />
        {error == "please your product name messing !" && <p className='text-danger'>{error}</p>}
      </div>
      <div className='imput-group mt-4'>
        <label className='text-xl block' htmlFor="">Brand Name:</label>
        <input onChange={handleBrandName} className='w-[500px] border border-solid border-gray-500 py-2 px-3  rounded-2xl' type="text" />
        {error == "please your brand name messing !" && <p className='text-danger'>{error}</p>}
      </div>
      <div className='imput-group mt-4'>
        <label className='text-xl block' htmlFor="">Product Descreption:</label>    
        <textarea onChange={handleProductDescreption} className='w-[500px] border border-solid border-gray-500 py-2 px-3  rounded-2xl' name="" id="" cols="30" rows="7"></textarea>
        {error == "please your product Descreption messing !" && <p className='text-danger'>{error}</p>}  
      </div>
      <div className='flex'>
          <div className='imput-group mt-4 w-1/2'>
          <label className='text-xl block' htmlFor="">Product Color:</label>  
            <div className='ml-4'>
                <div>
                    <input onChange={handleColorCase} id='red' type="checkbox" value="red" />
                    <label className='ml-2' htmlFor="red">red</label>
                </div>
                <div>
                    <input onChange={handleColorCase} id='green' type="checkbox" value="green" />
                    <label className='ml-2' htmlFor="green">green</label>
                </div>
                <div>
                    <input onChange={handleColorCase} id='gray' type="checkbox" value="gray" />
                    <label className='ml-2' htmlFor="gray">gray</label>
                </div>
                <div>
                    <input onChange={handleColorCase} id='blow' type="checkbox" value="blow" />
                    <label className='ml-2' htmlFor="blow">blow</label>
                </div>
                <div>
                    <input onChange={handleColorCase} id='yellow' type="checkbox" value="yellow" />
                    <label className='ml-2' htmlFor="yellow">yellow</label>
                </div>
                  {error == "please your color Case messing !" && <p className='text-danger'>{error}</p>}
            </div>
          </div>
          <div className='mt-4 w-1/2'>
          <label className='text-xl block' htmlFor="">Quentety:</label> 
            <div className='flex items-center gap-x-3 mt-2'>
                <button onClick={handleDecrement} className={`bg-secondery px-3 py-2 text-2xl font-bold ${number < 2 && 'opacity-30 cursor-not-allowed'}`}>-</button>
                <h4 className='text-xl font-semibold'>{number}</h4>
                <button onClick={handleIncrement} className={`bg-secondery px-3 py-2 text-2xl font-bold ${number >= 5 && 'opacity-30 cursor-not-allowed'}`}>+</button>
            </div>
            {error == "please your product Size messing !" && <p className='text-danger'>{error}</p>}
          </div>
      </div>
      <div className='flex'>
        <div className='flex mt-4'>
        <label className='text-xl block' htmlFor="">Size:</label>
          <select  onChange={handleSize} className='ml-3 w-[200px] border border-solid border-gray-500 rounded-full'>
              <option value="">Select</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
              <option value="xxxl">XXXL</option>
          </select>          
        </div>
        <div className='ml-5'>
          <ul className='flex'>
            { !productSize.length == 0 ?  productSize.map((sizeShow, index)=>(
            <li className='inline bg-primary px-4 py-2 ml-3 text-white rounded-md relative' key={index}>
              <p>{sizeShow}</p>
              <div onClick={()=>hanldeDeleteSize(sizeShow)} className='absolute top-[-10px] right-[-6px] cursor-pointer'>
                <AiFillCloseSquare className='bg-danger' />
              </div>
            </li>
            )):(
              <p className='text-danger'>please your product Size messing !</p>
            )
            }
          </ul>  
        </div>
          {error == "please your product Size messing !" && <p className='text-danger'>{error}</p>}        
      </div>
      
      <div className='flex mt-4 gap-x-8'>
        <div className='imput-group'>
          <label className='text-xl block' htmlFor="">Price:</label>
          <input onChange={handlePrice} className=' border border-solid border-gray-500 py-2 px-3  rounded-2xl' type="number" />
          {error == "please your price messing !" && <p className='text-danger'>{error}</p>}
        </div>
        <div className='imput-group'>
        <label className='text-xl block' htmlFor="">Discount Product:</label>
        <input onChange={handleDiscountPrice} className=' border border-solid border-gray-500 py-2 px-3  rounded-2xl' type="number" />        
        </div>
      </div>
      <button onClick={handleSubmit} className='text-xl font-semibold bg-[#e67e22] px-7 py-3 rounded-md mt-5' type='Submit'>Submit</button>
    </div>
  )
}

export default AdminInputProduct

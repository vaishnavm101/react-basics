import React, { useState } from 'react'

const AddProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()

        const url = "http://localhost:8000/products/add-product"

        const formData = new FormData()
        formData.append("name", name)
        formData.append("price", price)
        formData.append("photo", file)


        const options = {
            method: "POST",
            body: formData
        }       
        
        const response = await fetch(url, options)
        const data = await response.text()
        console.log(data)
    }
  return (
    <>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            Enter Product name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            Enter Product price: <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
            Upload Product photo: <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <input type="submit" value="Add Product" />


        </form>
    </>
  )
}

export default AddProduct
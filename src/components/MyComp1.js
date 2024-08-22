import React from 'react'

const MyComp1 = (props) => {
  return (
    <>
      <h1>Inside MyComp1</h1>
      <h2>Second Line</h2>
      <h3>Value: {props.value}</h3>
      <h2>{console.log("Inside mycomp1")}</h2>
    </>
  )
}

export default MyComp1
import React from "react"
import { useState } from 'react'
import styled from "styled-components"

const TitleArea = styled.input`
  
`

const ContentArea = styled.textarea`
  
`

 const Modify = () => {
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  const handlerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let date: string = 
    new Date().getFullYear().toString() + (new Date().getMonth()+1).toString().padStart(2,'0') 
    + new Date().getDate().toString() + new Date().getHours().toString() + new Date().getMinutes()
    let currentDB = {title, contents, date}
    let jsonDB = JSON.stringify(currentDB)
    console.log(currentDB)

    window.localStorage.setItem("솜사탕", jsonDB)
  }

  return (
    <>
      <form onSubmit={handlerFormSubmit}>
        <TitleArea type="text" onChange={(e)=> setTitle(e.target.value)}></TitleArea>
        <ContentArea onChange={(e) => setContents(e.target.value)}></ContentArea>
        <button>Done</button>
      </form>
    </>
  )
}
export default Modify
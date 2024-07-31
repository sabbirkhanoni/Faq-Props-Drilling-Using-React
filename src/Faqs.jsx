import React, { useState } from 'react'
import { questions } from './Data/FaqQuestion'


export default function Faqs() {
let [currentId,setCurrentId] = useState(questions[0].id);
  let items = questions.map((itemData,index)=>{

    let itemDetailsObj={
        itemData,
        currentId,
        setCurrentId
    }

    return(
        <FaqComponent itemDetailsObj = {itemDetailsObj} key={index}/>
    )
  })



  return (
    <div>
        <h1 className='text-center bg-[#7f65fd] p-4 text-white font-bold text-lg rounded-lg'>
            Frequently Asked Questions (FAQs)
        </h1>
        <div className='faqouter'>
            {items}
        </div>
        
    </div>
  )
}

function FaqComponent({itemDetailsObj}){
     
    return(
        <div className='faqitems'>
            <h1 onClick ={()=>itemDetailsObj.setCurrentId(itemDetailsObj.itemData.id)}
            className='bg-[#2f3640] pl-8 text-left text-white p-4 rounded-full text-xl mt-2'>
                {itemDetailsObj.itemData.id}. {itemDetailsObj.itemData.question}</h1>
            <p className={itemDetailsObj.currentId===itemDetailsObj.itemData.id ? 'bg-[#00a8ff] duration-700 pl-8 text-left p-3 rounded-full text-white text-lg' : 'scale-y-0 h-0'}>
                Ans: {itemDetailsObj.itemData.answer}</p>
        </div>
    )
}

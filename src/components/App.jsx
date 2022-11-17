// import React from 'react'
import React, { useState, useEffect } from 'react';
import '../index.css'
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"
import { Statistics } from "components/statistics/Statistics"
import { Section } from 'components/Section/Section';
import { Notification } from './Notification/Notification';


export function App () {
    const [good, setGood] = useState(0) 
    const [ neutral, setNeutral] = useState(0)
    const [ bad, setBad] = useState(0) 
    
   
   
    


useEffect(() => {
    console.log(' handle review CLICK !!!')
    handleReviewClick()
},)

useEffect(() => {
    console.log('count total feedback')
    countTotalFeedback()
},)

useEffect(() => {
    countPositiveFeedbackPercentage()
},)
  
  
    
  const countTotalFeedback = () => {
    return bad + good + neutral
}


const countPositiveFeedbackPercentage = () => {
        return Math.floor(good / (bad + good + neutral) *100)

    }

    
  const  handleReviewClick = (whichBtnClicked) => {
switch(whichBtnClicked) {
case 'good': 
setGood((useState) =>
    ( 
         good +1
    ))
    break;
    case 'neutral': 
    setNeutral((useState) =>
    ( 
         neutral +1
    ))
    break;
    case 'bad': 
    setBad((useState) =>
    (
         bad +1
    ))
    break;
default: 
return 0;
}



    }
    
    
        
       
    return (
            <div className='feedback'>
              <Section title = 'Please leave feedback'>
              <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={handleReviewClick} />
              
              </Section>
             <Section title = 'Statistics'>
            {   
                countTotalFeedback() === 0 ? <Notification message = "There is no feedback :(" /> : (
                <Statistics 
                good = {good}
                neutral ={neutral} 
                bad = {bad} 
                total = {countTotalFeedback()}
                positiveFeedback = {countPositiveFeedbackPercentage()}

                
                />)}

             </Section>
              
            </div> 

        )
        



}

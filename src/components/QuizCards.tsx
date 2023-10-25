"use client"
import { cn } from '@/lib/utils'
import { Chapter, Question } from '@prisma/client'
import React from 'react'
import { RadioGroup,RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'

type Props = {
    chapter:Chapter & {
        questions:Question[]
    }
}

const QuizCards = ({chapter}: Props) => {
    const [answers, setAnswers] = React.useState<Record<string,string>>({});    
    const [questionState, setQuestionState] = React.useState<Record<string,boolean | null>>({}); 

    const checkAnswers=React.useCallback(()=>{
        const newQuestionState={...questionState}
        chapter.questions.forEach(question => {
            const user_answer=answers[question.id];
            if(!user_answer){
                return;
            }
            if(user_answer===question.answer){
                newQuestionState[question.id]=true;
            }
            else{
                newQuestionState[question.id]=false;
            }
            setQuestionState(newQuestionState);
        })
    },[answers,questionState,chapter.questions]);
   
    return (
         <div className='w-full sm:w-[400px] sm:ml-4'>
      <h1 className='text-2xl font-bold'>Concept Check</h1>
      <div className='mt-2'>
        {chapter.questions.map((question) => {
          const options = JSON.parse(question.options) as string[];
          return (
            <div
              className={cn('p-3 mt-4 border border-secondary rounded-lg', {
                'bg-green-700': questionState[question.id] === true,
                'bg-red-700': questionState[question.id] === false,
                'bg-secondary': questionState[question.id] === null,
              })}
              key={question.id}
            >
              <h1 className='text-lg font-semibold'>{question.question}</h1>
              <div className='mt-2'>
                <RadioGroup
                  onValueChange={(e) => {
                    setAnswers((prev) => ({
                      ...prev,
                      [question.id]: e,
                    }));
                  }}
                  defaultValue='comfortable'
                >
                  {options.map((option, index) => (
                    <div className='flex items-center space-x-2' key={index}>
                      <RadioGroupItem value={option} id={question.id + index.toString()} />
                      <Label htmlFor={question.id + index.toString()}>{option}</Label>
                    </div>
                  ))};
                </RadioGroup>
              </div>
            </div>
          );
        })};
      </div>
      <Button className='w-full sm:w-auto mt-2' onClick={checkAnswers}>
        Check Answers
        <ChevronRight className='w-4 h-4 ml-1' />
      </Button>
    </div>
      );
}

export default QuizCards;
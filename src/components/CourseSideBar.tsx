
import { cn } from '@/lib/utils'
import { Chapter, Course, Unit } from '@prisma/client'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

type Props = {
    course:Course & {
        units:(Unit & {
            chapters:Chapter[]
        })[]
    },
    currentChapterId:string
}

const CourseSideBar = ({course,currentChapterId}: Props) => {
  return (
    <div className='w-full rounded-r-3xl bg-secondary antialiased mt-2 md:mt-44 sm:w-[400px] sm:absolute sm:top-1/2 sm:-translate-y-1/2'>
    <h1 className='text-4xl font-bold text-center'>
        {course.name}
    </h1>
    {course.units.map((unit, unitIndex) => (
        <div key={unit.id} className='mt-4'>
            <h2 className='text-sm uppercase text-secondary-foreground/60 text-center'>Unit {unitIndex + 1}</h2>
            <h2 className='text-2xl font-bold text-center'>{unit.name}</h2>
            {unit.chapters.map((chapter, chapterIndex) => (
                <div key={chapter.id}>
                    <Link
                        className={cn('text-secondary-foreground/60', {
                            'text-green-500 font-bold': chapter.id === currentChapterId
                        })}
                        href={`/course/${course.id}/${unitIndex}/${chapterIndex}`}>
                        {chapter.name}
                    </Link>
                </div>
            ))}
            <Separator className='mt-2 text-gray-500 bg-gray-500' />
        </div>
    ))}
</div>
  )
}

export default CourseSideBar
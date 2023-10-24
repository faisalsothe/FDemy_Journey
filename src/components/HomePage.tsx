import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
<div className="text-center bg-white dark:bg-gray-950 min-h-screen p-8">
      <div className="container mx-auto">
        <div className="mt-12">
          <p className="text-xl mb-4">
            Welcome to Your AI Course Generator, where your AI journey begins!
          </p>
          <div className="text-lg leading-10">
          <p>The AI Course Generator is a cutting-edge platform providing personalized AI education. In an ever-changing technological landscape, it tailors courses to individual proficiency levels, ensuring learners don&apos;t waste time on content they already know or struggle with advanced material. The platform covers a wide range of AI topics, from machine learning to computer vision, offering flexibility for diverse learning needs.</p>
          </div>
        </div>
      </div>
    </div>
      );
}

export default HomePage
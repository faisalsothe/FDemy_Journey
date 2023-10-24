'use client'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {

  return (
      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <p>&copy; Copyright 2023, Faisal Sothe, India.</p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;

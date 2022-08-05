import React from "react";

type propTypes = {
  href: string, 
  text?: string, 
  type?: string
}
const Button= ({href,text,type}:propTypes) => {

  const className :string =  `w-full 
                              flex 
                              items-center
                              justify-center
                              px-8 
                              py-3 
                              border 
                              border-transparent
                              text-base
                              font-medium
                              rounded-md
                              md:py-4
                              md:text-lg 
                              md:px-10
                              ${
                              type === 'dark'?
                              "text-white bg-indigo-600 hover:bg-indigo-700"
                              :
                              "text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                            }`
  return (
    <div className="mt-3 sm:mt-0 sm:ml-3">
      <a href={href} className={className}>
        {text}
      </a>
    </div>
  );
}

export default Button;

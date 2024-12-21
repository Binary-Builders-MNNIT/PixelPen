import { Link } from "react-router-dom"
import MainCategories from "../components/MainCategories"

const HomePage = () => {
  return (
    <div className="mt-2 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-3">
        <Link to="/">Home</Link>
        <span className="font-bold">·</span>
        <span className="text-blue-700">Blogs and Articles</span>
      </div>

      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* Titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold">
            Lorem ipsum dolor sit Repellendus, quis.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit amet iste quas facilis.
          </p>
        </div>
        {/* Animated Button */}
        <Link to="write" className="hidden md:block relative">
          <svg 
            viewBox="0 0 200 200"
            width="150"
            height="150"
            className="text-lg tracking-widest"
            // className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"              
            />
              <text>
                <textPath href="#circlePath" startOffset="0%">Write your story ·</textPath>
                <textPath href="#circlePath" startOffset="50%">Share your idea ·</textPath>
              </text>
          </svg>
          <button className="absolute top-0  right-0 left-0 bottom-0 m-auto w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6"/>
              <polyline points="9 6 18 6 18 15"/>
            </svg>
          </button>
        </Link>
      </div>

      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      {/* POST LIST */}
    </div>
  )
}

export default HomePage

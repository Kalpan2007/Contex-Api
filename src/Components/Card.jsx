import React from "react";

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="w-full h-56 object-cover rounded-t-lg" src="data:image/jpeg;base64,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" alt="Card Image" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
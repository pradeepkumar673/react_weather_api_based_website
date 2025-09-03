import { MapPin } from 'lucide-react'
import React, { useState } from 'react'
import { Search } from 'lucide-react'

const searchBar = () => {
    return (
        <>
            <div className='relative w-full max-w-2xl mx-auto'>
                <form className='relative w-full max-w-2xl mx-auto'>
                    <input type='text' placeholder='Search for a city around the globe....' className='relative max-w-2xl w-full px-4 py-2 rounded-md bg-white/20 text-white outline-none focus:ring-2 focus:ring-white/50' />
                    <button className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white'>
                        <MapPin className='w-5 h-5'></MapPin>
                    </button>
                </form>
                <div className="absolute top-full left-0 right-0 mt-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-50">
                    <div className="p-6 text-center text-white/70">
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-white/30 border-t-white mx-auto"></div>
                        <p>Search Cities.....</p>
                    </div>

                    <button className="w-full px-6 py-4 text-left hover:bg-white/10 transition-all duration-200 flex items-center justify-between group border-b border-white/10 last:border-b-0">
                        <div className="font-medium text-white group-hover:text-white/90">
                            City Name
                            <span>, City State</span>
                        </div>
                        <div className="text-sm text-white/60">County</div>
                        <Search className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-all" />
                    </button>
                </div>

            </div>
        </>
    )
}

export default searchBar
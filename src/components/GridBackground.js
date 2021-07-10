
function GridBackground() {
    return (
        // Pembuatan background grid menggunakan beberapa baris dan memandaatkan css grid
        <div className="absolute inset-0 p-2 grid grid-cols-11 gap-1">
                {/* baris 1 */}
                <div className="col-span-1 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-4 bg-gray-400 rounded pulse-very-slow">  </div>
                <div className="col-span-2 bg-gray-400 rounded pulse-fast">  </div>
                <div className="col-span-3 bg-gray-400 rounded pulse-very-slow">  </div>
                <div className="col-span-1 bg-gray-400 rounded animate-pulse">  </div>

                {/* baris 2 */}
                <div className="col-span-4 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-1 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-1 bg-gray-400 rounded pulse-very-slow">  </div>
                <div className="col-span-2 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-3 bg-gray-400 rounded pulse-fast">  </div>

                {/* baris 3 */}
                <div className="col-span-1 bg-gray-400 rounded pulse-very-slow">  </div>
                <div className="col-span-1 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-3 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-4 bg-gray-400 rounded pulse-fast">  </div>
                <div className="col-span-2 bg-gray-400 rounded animate-pulse">  </div>

                {/* baris 4 */}
                <div className="col-span-3 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-1 bg-gray-400 rounded pulse-very-slow">  </div>
                <div className="col-span-2 bg-gray-400 rounded pulse-very-slow">  </div>
                <div className="col-span-1 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-4 bg-gray-400 rounded pulse-fast">  </div>

                {/* baris 5 */}
                <div className="col-span-1 bg-gray-400 rounded pulse-very-slow">  </div>
                <div className="col-span-2 bg-gray-400 rounded pulse-fast">  </div>
                <div className="col-span-1 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-3 bg-gray-400 rounded pulse-very-slow">  </div>
                <div className="col-span-1 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-3 bg-gray-400 rounded animate-pulse">  </div>

                {/* baris 6 */}
                <div className="col-span-4 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-1 bg-gray-400 rounded pulse-very-slow">  </div>
                <div className="col-span-1 bg-gray-400 rounded pulse-fast">  </div>
                <div className="col-span-2 bg-gray-400 rounded pulse-very-slow">  </div>
                <div className="col-span-3 bg-gray-400 rounded animate-pulse">  </div>

                {/* baris 7 */}
                <div className="col-span-3 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-3 bg-gray-400 rounded pulse-fast">  </div>
                <div className="col-span-3 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-2 bg-gray-400 rounded pulse-very-slow">  </div>

                {/* baris 8 */}
                <div className="col-span-1 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-4 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-2 bg-gray-400 rounded animate-pulse">  </div>
                <div className="col-span-3 bg-gray-400 rounded pulse-very-slow">  </div>
                <div className="col-span-1 bg-gray-400 rounded pulse-very-slow">  </div>
            </div>
    )
}

export default GridBackground

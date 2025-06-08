import React, { useState, useEffect } from 'react'

function Projects() {
  const projects = [
    {tag: 'App', img: 'https://images.pexels.com/photos/30675194/pexels-photo-30675194/free-photo-of-creative-watercolor-art-workspace-with-supplies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alternative: 'painting', title: 'Sip and Paint', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', more: '', link: 'https://georkingsworldtours.co.ke/' },
    {tag: 'Web', img: 'https://images.pexels.com/photos/30675194/pexels-photo-30675194/free-photo-of-creative-watercolor-art-workspace-with-supplies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alternative: 'painting', title: 'Portfolio Website', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', more: '', link: 'https://georkingsworldtours.co.ke/' },
    {tag: 'App', img: 'https://images.pexels.com/photos/30675194/pexels-photo-30675194/free-photo-of-creative-watercolor-art-workspace-with-supplies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alternative: 'painting', title: 'E-commerce App', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', more: '', link: 'https://georkingsworldtours.co.ke/' },
    {tag: 'Web', img: 'https://images.pexels.com/photos/30675194/pexels-photo-30675194/free-photo-of-creative-watercolor-art-workspace-with-supplies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alternative: 'painting', title: 'Dashboard UI', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', more: '', link: 'https://georkingsworldtours.co.ke/' },
    {tag: 'App', img: 'https://images.pexels.com/photos/30675194/pexels-photo-30675194/free-photo-of-creative-watercolor-art-workspace-with-supplies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alternative: 'painting', title: 'Chat Application', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', more: '', link: 'https://georkingsworldtours.co.ke/' },
    {tag: 'Web', img: 'https://images.pexels.com/photos/30675194/pexels-photo-30675194/free-photo-of-creative-watercolor-art-workspace-with-supplies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alternative: 'painting', title: 'Blog Platform', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', more: '', link: 'https://georkingsworldtours.co.ke/' },
    {tag: 'App', img: 'https://images.pexels.com/photos/30675194/pexels-photo-30675194/free-photo-of-creative-watercolor-art-workspace-with-supplies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alternative: 'painting', title: 'Task Manager', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', more: '', link: 'https://georkingsworldtours.co.ke/' },
    {tag: 'Web', img: 'https://images.pexels.com/photos/30675194/pexels-photo-30675194/free-photo-of-creative-watercolor-art-workspace-with-supplies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alternative: 'painting', title: 'Landing Page', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', more: '', link: 'https://georkingsworldtours.co.ke/' }
  ]

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setItemsPerPage(6);
      } else { // sm and md breakpoints
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Reset to page 1 when itemsPerPage changes (screen size change)
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8" id="projects">
      <h2 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>
        PROJECTS
      </h2>
      
      {/* Projects Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl'>
        {currentProjects.map((items, index) => (
          <div key={startIndex + index} className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
            <div className='relative'>
              <img
                src={items.img}
                alt={items.alternative}
                className='rounded-t-xl w-full h-48 object-cover'
              />
              <div className='bg-secondary w-[70px] rounded-2xl flex items-center justify-center h-[30px] absolute top-2 text-white right-2 text-xs font-semibold'>
                {items.tag}
              </div>
            </div>
            <div className='p-4'>
              <h4 className='text-center text-lg font-semibold mb-2 text-gray-800'>{items.title}</h4>
              <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                {items.description}
                {items.more && (
                  <a 
                    href={items.more}
                    className='text-primary hover:underline ml-1'
                  >
                    Read More
                  </a>
                )}
              </p>
              <div className='flex justify-center'>
                <button className='px-6 py-2 bg-secondary text-white rounded-xl hover:bg-primary-light transition-colors duration-200 text-sm font-medium'>
                  <a href={items.link} className='text-white'>View Project</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className='flex items-center justify-center gap-2 mt-8'>
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-secondary text-white hover:bg-primary-light'
            }`}
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                currentPage === pageNumber
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {pageNumber}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-secondary text-white hover:bg-primary-light'
            }`}
          >
            Next
          </button>
        </div>
      )}

      {/* Page Info */}
      <div className='text-white text-sm text-center'>
        Showing {startIndex + 1}-{Math.min(endIndex, projects.length)} of {projects.length} projects
      </div>
    </div>
  )
}

export default Projects
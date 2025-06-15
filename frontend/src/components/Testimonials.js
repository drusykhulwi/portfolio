import { useRef } from 'react'

function Testimonials() {
    const reviews = [
        {name:"John Doe", company: "Aurora", ratings: "5 star", review: "I'm passionate about building modern and scalable software solutions. I specialize in frontend and backend development, crafting seamless user experiences, and optimizing performance."},
        {name:"Jane Smith", company: "TechCorp", ratings: "5 star", review: "Outstanding work on our project. The attention to detail and technical expertise exceeded our expectations. Highly recommend for any development needs."},
        {name:"Mike Johnson", company: "StartupXYZ", ratings: "5 star", review: "Delivered exceptional results on time and within budget. Great communication throughout the project and truly understands modern development practices."},
        {name:"Sarah Wilson", company: "InnovateLabs", ratings: "5 star", review: "Professional, reliable, and skilled developer. The final product was exactly what we envisioned and the performance optimizations were impressive."},
        {name:"David Chen", company: "CloudTech", ratings: "5 star", review: "Excellent problem-solving skills and deep knowledge of both frontend and backend technologies. Made our complex requirements seem effortless."},
        {name:"Emily Davis", company: "WebSolutions", ratings: "5 star", review: "Top-notch developer who delivers clean, maintainable code. The user experience improvements made a significant impact on our business metrics."},
    ]

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        const container = scrollRef.current;
        const cardWidth = container.children[0].offsetWidth;
        const gap = 8; // gap-2 = 8px
        const scrollDistance = cardWidth + gap;
        container.scrollBy({ left: -scrollDistance, behavior: 'smooth'});
    };

    const scrollRight = () => {
        const container = scrollRef.current;
        const cardWidth = container.children[0].offsetWidth;
        const gap = 8; // gap-2 = 8px
        const scrollDistance = cardWidth + gap;
        container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    };

    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8">
            <h2 className='h-[15%] text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>
                TESTIMONIALS
            </h2>
            <div className='h-[80%] relative w-full max-w-7xl'>
                <button 
                    onClick={scrollLeft}
                    className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary-light bg-opacity-20 hover:bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-all duration-200'
                >
                    {"<"}
                </button>
                <div 
                    className='overflow-x-hidden scroll-smooth'
                    ref={scrollRef}
                >
                    <div className='flex gap-2 px-12'>
                        {reviews.map((items, index) => (
                            <div
                                key={index} 
                                className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4 py-6 bg-pink-300 text-gray-800 rounded-xl transition-all duration-300 hover:scale-85'
                            >
                                <div className='space-y-3'>
                                    <div>
                                        <h3 className='font-bold text-sm mb-1'>{items.name}</h3>
                                        <h5 className='font-semibold text-xs text-gray-600 mb-1'>{items.company}</h5>
                                        <p className='text-xs text-yellow-600'>{items.ratings}</p>
                                    </div>
                                    <p className='text-sm leading-relaxed'>
                                        {items.review}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button 
                    onClick={scrollRight}
                    className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-all duration-200'
                >
                    {">"}
                </button>
            </div>
        </div>
    )
}

export default Testimonials
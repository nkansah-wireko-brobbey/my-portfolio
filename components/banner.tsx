
import Link from 'next/link'

const Banner = () => {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40" id='intro'>
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl sm:4xl md:text-4xl lg:text-6xl font-bold tracking-tight">
            {"I'm Nkansah Wireko-Brobbey."}
            <br />
            <span className='text-primary ml-3'>{"<I Code & Design/>"}</span>
        
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80">
          {"I'm a software engineer with a focus on frontend. I enjoy creating visually appealing and user-friendly applications."}
          </p>
          <Link
            href="#repos"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-transparent border text-[#6366F1] font-medium text-lg transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6366F1]"
            prefetch={false}
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Banner
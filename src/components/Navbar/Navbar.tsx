import './Navbar.css'

const Navbar = () => {
  return (
<header className="fixed top-0 left-0 right-0 z-50 py-5 bg-gradient-to-b backdrop-blur-sm saturate-200 from-zinc-100 via-zinc-100 via-35% to-zinc-100/5 dark:from-zinc-900 dark:via-zinc-900 dark:via-35% dark:to-zinc-900/5">
  {" "}
  <div className="mx-auto max-w-screen-sm px-6">
    {" "}
    <div className="flex flex-nowrap items-center justify-between">
      {" "}
      <a href="/" aria-label="Go to home page">
        <svg id="brand" width="32" height="32" viewBox="0 0 180 180">
          <defs>
            <clipPath id="backgroundClip">
              <circle cx="90" cy="90" r="90"></circle>
            </clipPath>
          </defs>
          <g clipPath="url(#backgroundClip)">
            <circle
              id="bg"
              cx="90"
              cy="90"
              r="90"
              className="fill-zinc-900 dark:fill-zinc-100"
            ></circle>
            <path
              id="left-ear"
              className="fill
        -zinc-100 dark:fill-zinc-900"
              d="M60.264121901091 34L60.264121901091 34L127 180H17Z"
            ></path>
            <path
              id="right-ear"
              className="fill-zinc-100 dark:fill-zinc-900"
              d="M120.264121901091 34L120.264121901091 34L53 180H163Z"
            ></path>
            <circle
              id="head"
              r="42"
              cx="89.471756197818"
              cy="115.97670130468775"
              className="fill-zinc-100 dark:fill-zinc-900"
            ></circle>
            <ellipse
              rx="7"
              id="left-eye"
              cx="75.73918732606"
              cy="131.92233768229252"
              ry="14"
              className="fill-zinc-900 dark:fill-zinc-100 transition-[ry] duration-150 ease-in-out"
            ></ellipse>
            <ellipse
              id="right-eye"
              rx="7"
              cx="101.73918732606"
              cy="131.92233768229252"
              ry="14"
              className="fill-zinc-900 dark:fill-zinc-100 transition-[ry] duration-150 ease-in-out"
            ></ellipse>
          </g>
        </svg>{" "}
      </a>{" "}
      <nav className="flex flex-nowrap">
        {" "}
        <a
          href="/work"
          className="px-2 py-0.5 rounded-md flex items-center transition-colors duration-300 ease-in-out hover:text-black hover:dark:text-white hover:bg-black/5 hover:dark:bg-white/15"
        >
          work
        </a>{" "}
        <a
          href="/projects"
          className="px-2 py-0.5 rounded-md flex items-center transition-colors duration-300 ease-in-out hover:text-black hover:dark:text-white hover:bg-black/5 hover:dark:bg-white/15"
        >
          projects
        </a>{" "}
        <a
          href="/blog"
          className="px-2 py-0.5 rounded-md flex items-center transition-colors duration-300 ease-in-out hover:text-black hover:dark:text-white hover:bg-black/5 hover:dark:bg-white/15"
        >
          blog
        </a>{" "}
        <button
          id="theme-button"
          aria-label="Toggle theme button"
          className="group size-8 flex items-center justify-center rounded-md hover:bg-black/5 hover:dark:bg-white/15 transition-colors duration-300 ease-in-out"
        >
          {" "}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="block dark:hidden group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out"
          >
            {" "}
            <circle cx="12" cy="12" r="5"></circle>{" "}
            <line x1="12" y1="1" x2="12" y2="3"></line>{" "}
            <line x1="12" y1="21" x2="12" y2="23"></line>{" "}
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>{" "}
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>{" "}
            <line x1="1" y1="12" x2="3" y2="12"></line>{" "}
            <line x1="21" y1="12" x2="23" y2="12"></line>{" "}
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>{" "}
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>{" "}
          </svg>{" "}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden dark:block group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out"
          >
            {" "}
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>{" "}
          </svg>{" "}
        </button>{" "}
      </nav>{" "}
    </div>{" "}
  </div>{" "}
</header>
  )}
    
export default Navbar
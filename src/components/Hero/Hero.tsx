import './Hero.css'

const Hero = () => {
    return (
      <main>
        <div className="mx-auto max-w-screen-sm px-6">
          {" "}
          <div className="space-y-24">
            {" "}
            <section>
              {" "}
              <div className="animate font-semibold text-black dark:text-white show">
                {" "}
                <div>Mark Horn</div> <div>Software Engineer</div>{" "}
              </div>{" "}
              <article>
                {" "}
                <p className="p-spacing">
                  I am a <i> software developer</i>,
                  <i> web creator</i>,
                  <i> video editor</i>, 
                  <i> data analyst</i>,<i> and problem solver enthusiast</i>.
                </p>{" "}
                <p className="p-spacing">
                  I love to both build and break things. I am motivated by
                  challenging projects with self-guided research and dynamic problem
                  solving. My true passion is crafting creative front end designs
                  with unique takes on color, typography and motion.
                </p>{" "}
                <p className="p-spacing">
                  This is my personal space, where I share my work and projects. I
                  also write interactive blog posts about engineering and design.
                </p>{" "}
              </article>{" "}
            </section>{" "}
            <section className="animate space-y-6 show">
              {" "}
              <div className="flex flex-wrap gap-y-2 items-center justify-between">
                {" "}
                <p className="font-semibold text-black dark:text-white">
                  Work
                </p>{" "}
                <a
                  href="/work"
                  className="text-sm font-semibold hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out"
                >
                  See all work
                </a>{" "}
              </div>{" "}
              <ul className="flex flex-col space-y-4">
                {" "}
                <li>
                  {" "}
                  <div className="flex"></div>{" "}
                  <div className="font-semibold"> StreamlineFS </div>{" "}
                  <div className="text-sm opacity-75"> Software Engineer </div>{" "}
                  <div className="text-sm opacity-75"> Nov 2019 - Current </div>{" "}
                  <article className="last-of-type:[&amp;>p]:mb-0">
                    {" "}
                    <p>
                      Currently, I am a software engineer at Streamline FS where I
                      do product planning, design and development.
                    </p>{" "}
                  </article>{" "}
                </li>{" "}
              </ul>{" "}
            </section>{" "}
            <section className="animate space-y-6 show">
              {" "}
              <div className="flex flex-wrap gap-y-2 items-center justify-between">
                {" "}
                <p className="font-semibold text-black dark:text-white">
                  Projects
                </p>{" "}
                <a
                  href="/projects"
                  className="text-sm font-semibold hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out"
                >
                  See all projects
                </a>{" "}
              </div>{" "}
              <ul className="flex flex-col [&amp;>li:first-child_aside]:rounded-t-lg [&amp;>li:last-child_aside]:rounded-b-lg">
                {" "}
                <li className="group relative">
                  {" "}
                  <a
                    href="https://github.com/markhorn-dev/astro-sphere"
                    target="_blank"
                    className="block border-b py-4 pr-8 border-zinc-200 dark:border-zinc-800"
                  >
                    {" "}
                    <p className="font-semibold group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
                      {" "}
                      Sphere{" "}
                    </p>{" "}
                    <p className="text-sm">
                      {" "}
                      Portfolio and blog built with astro.{" "}
                    </p>{" "}
                  </a>{" "}
                  <aside className="absolute -z-10 inset-0 -inset-x-3 -top-[1px] group-hover:bg-zinc-200 group-hover:dark:bg-zinc-800 transition-colors duration-300 ease-in-out"></aside>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="arrow absolute -rotate-45 top-1/2 -right-1 -translate-y-1/2 size-5 stroke-[2px] fill-none stroke-current"
                  >
                    {" "}
                    <line x1="5" y1="12" x2="19" y2="12" className=""></line>{" "}
                    <polyline points="12 5 19 12 12 19" className=""></polyline>{" "}
                  </svg>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="arrow-motion absolute -rotate-45 top-1/2 -right-1 -translate-y-1/2 size-5 stroke-[2px] fill-none stroke-current opacity-50 group-hover:opacity-100 group-hover:stroke-black group-hover:dark:stroke-white transition-all duration-300 ease-in-out"
                  >
                    {" "}
                    <line
                      x1="5"
                      y1="12"
                      x2="19"
                      y2="12"
                      className="translate-x-3 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                    ></line>{" "}
                    <polyline
                      points="12 5 19 12 12 19"
                      className="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                    ></polyline>{" "}
                  </svg>{" "}
                </li>
                <li className="group relative">
                  {" "}
                  <a
                    href="https://github.com/markhorn-dev/astro-nano"
                    target="_blank"
                    className="block border-b py-4 pr-8 border-zinc-200 dark:border-zinc-800"
                  >
                    {" "}
                    <p className="font-semibold group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
                      {" "}
                      Nano{" "}
                    </p>{" "}
                    <p className="text-sm">
                      {" "}
                      Minimal portfolio and blog built with astro and no frameworks.{" "}
                    </p>{" "}
                  </a>{" "}
                  <aside className="absolute -z-10 inset-0 -inset-x-3 -top-[1px] group-hover:bg-zinc-200 group-hover:dark:bg-zinc-800 transition-colors duration-300 ease-in-out"></aside>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="arrow absolute -rotate-45 top-1/2 -right-1 -translate-y-1/2 size-5 stroke-[2px] fill-none stroke-current"
                  >
                    {" "}
                    <line x1="5" y1="12" x2="19" y2="12" className=""></line>{" "}
                    <polyline points="12 5 19 12 12 19" className=""></polyline>{" "}
                  </svg>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="arrow-motion absolute -rotate-45 top-1/2 -right-1 -translate-y-1/2 size-5 stroke-[2px] fill-none stroke-current opacity-50 group-hover:opacity-100 group-hover:stroke-black group-hover:dark:stroke-white transition-all duration-300 ease-in-out"
                  >
                    {" "}
                    <line
                      x1="5"
                      y1="12"
                      x2="19"
                      y2="12"
                      className="translate-x-3 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                    ></line>{" "}
                    <polyline
                      points="12 5 19 12 12 19"
                      className="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                    ></polyline>{" "}
                  </svg>{" "}
                </li>{" "}
              </ul>{" "}
            </section>{" "}
            <section className="animate space-y-6 show">
              {" "}
              <div className="flex flex-wrap gap-y-2 items-center justify-between">
                {" "}
                <p className="font-semibold text-black dark:text-white">
                  Blog posts
                </p>{" "}
                <a
                  href="/blog"
                  className="text-sm font-semibold hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out"
                >
                  See all posts
                </a>{" "}
              </div>{" "}
              <ul className="flex flex-col [&amp;>li:first-child_aside]:rounded-t-lg [&amp;>li:last-child_aside]:rounded-b-lg">
                {" "}
                <li className="group relative">
                  {" "}
                  <a
                    href="/blog/batcat-brand"
                    className="block border-b py-4 pr-8 border-zinc-200 dark:border-zinc-800"
                  >
                    {" "}
                    <p className="font-semibold group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
                      {" "}
                      How I made the batcat brand logo{" "}
                    </p>{" "}
                    <p className="text-sm"> React, tailwind and motion </p>{" "}
                  </a>{" "}
                  <aside className="absolute -z-10 inset-0 -inset-x-3 -top-[1px] group-hover:bg-zinc-200 group-hover:dark:bg-zinc-800 transition-colors duration-300 ease-in-out"></aside>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="arrow absolute top-1/2 -right-1 -translate-y-1/2 size-5 stroke-[2px] fill-none stroke-current"
                  >
                    {" "}
                    <line x1="5" y1="12" x2="19" y2="12" className=""></line>{" "}
                    <polyline points="12 5 19 12 12 19" className=""></polyline>{" "}
                  </svg>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="arrow-motion absolute top-1/2 -right-1 -translate-y-1/2 size-5 stroke-[2px] fill-none stroke-current opacity-50 group-hover:opacity-100 group-hover:stroke-black group-hover:dark:stroke-white transition-all duration-300 ease-in-out"
                  >
                    {" "}
                    <line
                      x1="5"
                      y1="12"
                      x2="19"
                      y2="12"
                      className="translate-x-3 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                    ></line>{" "}
                    <polyline
                      points="12 5 19 12 12 19"
                      className="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                    ></polyline>{" "}
                  </svg>{" "}
                </li>
                <li className="group relative">
                  {" "}
                  <a
                    href="/blog/arrow-buttons"
                    className="block border-b py-4 pr-8 border-zinc-200 dark:border-zinc-800"
                  >
                    {" "}
                    <p className="font-semibold group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
                      {" "}
                      Animated arrow buttons with tailwind{" "}
                    </p>{" "}
                    <p className="text-sm">
                      {" "}
                      Add beautiful animated arrows to your links and buttons with
                      tailwindcss{" "}
                    </p>{" "}
                  </a>{" "}
                  <aside className="absolute -z-10 inset-0 -inset-x-3 -top-[1px] group-hover:bg-zinc-200 group-hover:dark:bg-zinc-800 transition-colors duration-300 ease-in-out"></aside>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="arrow absolute top-1/2 -right-1 -translate-y-1/2 size-5 stroke-[2px] fill-none stroke-current"
                  >
                    {" "}
                    <line x1="5" y1="12" x2="19" y2="12" className=""></line>{" "}
                    <polyline points="12 5 19 12 12 19" className=""></polyline>{" "}
                  </svg>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="arrow-motion absolute top-1/2 -right-1 -translate-y-1/2 size-5 stroke-[2px] fill-none stroke-current opacity-50 group-hover:opacity-100 group-hover:stroke-black group-hover:dark:stroke-white transition-all duration-300 ease-in-out"
                  >
                    {" "}
                    <line
                      x1="5"
                      y1="12"
                      x2="19"
                      y2="12"
                      className="translate-x-3 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                    ></line>{" "}
                    <polyline
                      points="12 5 19 12 12 19"
                      className="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                    ></polyline>{" "}
                  </svg>{" "}
                </li>
                <li className="group relative">
                  {" "}
                  <a
                    href="/blog/svg-sprites-with-use"
                    className="block border-b py-4 pr-8 border-zinc-200 dark:border-zinc-800"
                  >
                    {" "}
                    <p className="font-semibold group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
                      {" "}
                      Svg sprites is the way{" "}
                    </p>{" "}
                    <p className="text-sm">
                      {" "}
                      An alternative way to use svg icons.{" "}
                    </p>{" "}
                  </a>{" "}
                  <aside className="absolute -z-10 inset-0 -inset-x-3 -top-[1px] group-hover:bg-zinc-200 group-hover:dark:bg-zinc-800 transition-colors duration-300 ease-in-out"></aside>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="arrow absolute top-1/2 -right-1 -translate-y-1/2 size-5 stroke-[2px] fill-none stroke-current"
                  >
                    {" "}
                    <line x1="5" y1="12" x2="19" y2="12" className=""></line>{" "}
                    <polyline points="12 5 19 12 12 19" className=""></polyline>{" "}
                  </svg>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="arrow-motion absolute top-1/2 -right-1 -translate-y-1/2 size-5 stroke-[2px] fill-none stroke-current opacity-50 group-hover:opacity-100 group-hover:stroke-black group-hover:dark:stroke-white transition-all duration-300 ease-in-out"
                  >
                    {" "}
                    <line
                      x1="5"
                      y1="12"
                      x2="19"
                      y2="12"
                      className="translate-x-3 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                    ></line>{" "}
                    <polyline
                      points="12 5 19 12 12 19"
                      className="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                    ></polyline>{" "}
                  </svg>{" "}
                </li>{" "}
              </ul>{" "}
            </section>{" "}
            <section className="animate space-y-6 show">
              {" "}
              <p className="font-semibold text-black dark:text-white">
                Let's Connect
              </p>{" "}
              <article>
                {" "}
                <p>
                  If you want to get in touch with me about something or just to say
                  hi, reach out on social media or send me an email.
                </p>{" "}
              </article>{" "}
              <ul className="flex flex-wrap [&amp;>li:first-child_a]:pl-0">
                {" "}
                <li>
                  {" "}
                  <a
                    href="https://twitter.com/markhorn_dev"
                    target="_blank"
                    aria-label="Mark Horn on twitter-x"
                    className="flex items-center justify-center p-2 hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out"
                  >
                    {" "}
                    <svg className="size-6 fill-current">
                      {" "}
                      <use href="/socials.svg#twitter-x"></use>{" "}
                    </svg>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="https://github.com/markhorn-dev"
                    target="_blank"
                    aria-label="Mark Horn on github"
                    className="flex items-center justify-center p-2 hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out"
                  >
                    {" "}
                    <svg className="size-6 fill-current">
                      {" "}
                      <use href="/socials.svg#github"></use>{" "}
                    </svg>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/markhorn-dev"
                    target="_blank"
                    aria-label="Mark Horn on linkedin"
                    className="flex items-center justify-center p-2 hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out"
                  >
                    {" "}
                    <svg className="size-6 fill-current">
                      {" "}
                      <use href="/socials.svg#linkedin"></use>{" "}
                    </svg>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="https://codepen.io/markhorn-dev"
                    target="_blank"
                    aria-label="Mark Horn on codepen"
                    className="flex items-center justify-center p-2 hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out"
                  >
                    {" "}
                    <svg className="size-6 fill-current">
                      {" "}
                      <use href="/socials.svg#codepen"></use>{" "}
                    </svg>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="https://dribbble.com/markhorn-dev"
                    target="_blank"
                    aria-label="Mark Horn on dribbble"
                    className="flex items-center justify-center p-2 hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out"
                  >
                    {" "}
                    <svg className="size-6 fill-current">
                      {" "}
                      <use href="/socials.svg#dribbble"></use>{" "}
                    </svg>{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
              <a
                href="mailto:markhorn.dev@gmail.com"
                aria-label="Email Mark Horn"
                className="hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out"
              >
                {" "}
                markhorn.dev@gmail.com{" "}
              </a>{" "}
            </section>{" "}
          </div>{" "}
        </div>
      </main>
    );
  };
  
  export default Hero;
  
export default function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-900 text-gray-100 space-y-4">
      <h1 className="text-6xl font-semibold">What is this?</h1>
      <p>This is a service that generates dynamic <a className="tracking-wider text-indigo-400 hover:text-indigo-500 hover:underline" href="http://ogp.me" target="_blank">Open Graph</a> images that you can embed in your <code>&lt;meta&gt;</code> tags.</p>
      <p>Later you can use playwright or puppeteer headless chromium to render an HTML page and take a screenshot of the result which gets cached.</p>
      <p>Find out how this works and deploy your own image generator by visiting <a className="tracking-wider text-indigo-400 hover:text-indigo-500 hover:underline" href="https://github.com/gibranbadrulz/opengraph-image" target="_blank">GitHub ↗</a></p>
      <footer className="text-gray-400 space-y-4">Proudly hosted on <a className="tracking-wider text-gray-400 hover:text-indigo-500 hover:underline" href="https://vercel.com">▲Vercel</a></footer>
    </div>
  )
}

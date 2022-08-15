import { useRouter } from "next/router";

function getFontSize(length) {
  if (length > 32) {
    return `text-6xl`;
  }

  return `text-9xl`;
}

// Usage:
// {baseURL}/v1/og?title=${title}&url=${url}&date=${date}

const OpenGraph = () => {
  const router = useRouter();

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const link = searchParams.get("url");

  if (!link) return null;

  const title = searchParams.get("title");
  const date = searchParams.get("date");
  const url = searchParams.get("url");

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap  " />
      <div
        className="relative flex flex-col justify-between p-28 pl-32 pt-32 text-gray-100 bg-card bg-no-repeat "
        style={{ width: 1200, height: 630 }}
      >
        <div className="max-w-screen-md space-y-2">
          <h1
              className={`${getFontSize(
                title.length
              )} font-bold text-gray-600 roboto-condensed`}
            >
              {title}
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="text-xl flex items-center pb-2 space-x-6">
            { date ? (
                <p className="font-regular text-gray-600 font-source-sans-pro">
                <p className="font-bold text-gray-600 uppercase font-source-sans-pro">
                    <span>{url}</span>
                </p>
                  <span>Posted on {date}</span>
                </p>
              ) : null
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenGraph;

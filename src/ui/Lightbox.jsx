import Gallery from "./Gallery";
export default function Lightbox({
  large,
  hideLightBox
}) {

    return (
      <div className="fixed h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50">
        <div className="flex flex-col items-end gap-5 absolute left-1/2 top-1/2 w-full px-10 md:max-w-[800px] -translate-x-1/2 -translate-y-1/2 ">
          <button onClick={()=>hideLightBox(false)}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                height="100%"
                width="100%"
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                className="fill-[#ffffff] transition-colors hover:fill-orange-500 hover:stroke-orange-500"
              />
            </svg>
          </button>
          <div>
            <img
              src={large}
            />
          </div>
        </div>
      </div>
  );
}

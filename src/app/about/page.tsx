import Footer from "@/components/footer";
import JoinCommunity from "@/components/JoinCommunity";
import { AboutUsContent } from "@/fixtures/apart";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const router =  useRouter();
  return (
    <div aria-describedby="about us page">
      <section
        aria-describedby="about exchange next door"
        className="container-padding-y bg-[#FBFBFB] mt-8"
      >
        <div className="container-padding-x  text-center mb-2">
          <h1 className="section-header">About Us</h1>
          <p className="text-p-600 mx-auto text-lg lg:text-xl max-w-[600px] lg:max-w-4xl">
            Welcome to Exchange Next Door, your premier digital platform for
            secure and seamless transactions involving gift cards and USDT
            (Tether). At Exchange Next Door, we&apos;ve created a dynamic
            marketplace that connects Merchants and Users, providing a reliable
            and user-friendly environment for buying and selling within the
            realm of gift cards and USDT.
          </p>
        </div>
      </section>
      <section
        aria-describedby="our vision"
        className="container-padding-x container-padding-y"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center w-full">
          <div className="w-full md:w-1/2">
            <VisionSvg />
          </div>
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h3 className="text-[1.35rem] md:text-[1.75rem] font-bold mb-4">
              Our Vision
            </h3>
            <p className="text-lg lg:text-xl text-p-600 w-full max-w-[600px] mx-auto lg:mx-0 lg:w-4/5">
              At Exchange Next Door, our vision is to revolutionize the way
              individuals and businesses engage in the exchange of gift cards
              and USDT. We believe in fostering a community where Merchants and
              Users can effortlessly transact, ensuring trust, transparency, and
              efficiency in every interaction.
            </p>
          </div>
        </div>
      </section>
      <section
        aria-describedby="why choose exchange next door"
        className="container-padding-x bg-[#FBFBFB] py-28"
      >
        <h3 className="text-[1.5rem] md:text-[2rem] text-[#031425] font-bold mb-5 text-center lg:text-left">
          What sets us apart
        </h3>

        <div className="">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 mt-16">
            {AboutUsContent.map((item, index) => (
              <ApartCard key={index} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <JoinCommunity />

      <section className="container-padding-x container-padding-y text-center bg-[#E3E3E3]/10" aria-describedby="subscribe to newsletters" >
        <div className="mb-16">
          <h2 className="text-[1.35rem] md:text-[1.75rem] font-bold mb-4 text-main-primary">
            Subscribe to our newsletters
          </h2>
          <p className="section-description text-g-700">
            Get the latest news about our product and services
          </p>

          <div className="flex w-full md:w-[4/5] max-w-2xl flex-col items-center justify-center md:flex-row mx-auto text-base lg:text-lg gap-4 md:gap-0 mt-8">
            <label className="sr-only">Email</label>
            <input
              className="w-full h-16 text-g-700 p-3 bg-p-100 rounded-r-md md:rounded-r-none rounded-l-md"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <button className="w-36 h-16 text-white p-3 bg-p-600 rounded-l-md md:rounded-l-none rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

interface ApartProps {
  title: string;
  text: string;
}

const ApartCard: React.FC<ApartProps> = ({ title, text }) => {
  return (
    <div className="text-sm md:text-base">
      <h4 className="font-[600] mb-5 border-l border-l-black/40 pl-4">
        {title}
      </h4>
      <p className="max-w-[450px] pl-4">{text}</p>
    </div>
  );
};

const VisionSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="410"
    height="410"
    viewBox="0 0 426 426"
    fill="none"
    className="max-w-[320px] mx-auto lg:max-w-[initial] lg:mx-0"
  >
    <path
      d="M115.59 176.695C115.062 175.47 112.964 176.22 113.403 177.455C119.788 195.443 124.257 214.054 126.734 232.98C126.947 234.503 129.229 233.988 129.048 232.499C127.373 218.786 121.341 189.973 115.59 176.695Z"
      fill="#031425"
    />
    <path
      d="M160.75 338.863C156.535 337.687 153.807 336.899 149.523 335.981C149.212 335.892 148.879 335.93 148.596 336.086C148.313 336.243 148.104 336.505 148.015 336.816C147.926 337.127 147.964 337.46 148.12 337.743C148.277 338.026 148.539 338.235 148.85 338.324C152.543 339.602 158.265 340.33 158.622 341.157C158.765 341.489 149.996 371.861 148.499 374.197C147.233 376.172 145.191 374.528 143.506 373.81C141.623 373.013 140.238 372.698 138.349 371.914C136.573 371.175 135.733 374.08 137.514 374.809C139.644 375.68 141.278 376.04 143.41 376.89C146.969 378.308 149.547 379.593 151.118 374.954C154.918 363.733 158.205 351.95 161.698 340.584C161.795 340.23 161.75 339.852 161.573 339.531C161.396 339.21 161.101 338.97 160.75 338.863Z"
      fill="#031425"
    />
    <path
      d="M247.595 343.896C244.585 347.517 234.951 347.336 230.255 347.865C214.309 349.658 209.112 353.036 195.11 360.091C180.928 367.233 170.229 368.53 160.348 368.059C157.896 367.942 155.843 370.653 160.222 370.922C171.731 371.76 183.256 369.525 193.616 364.445C209.202 357.019 213.104 352.595 231.087 350.6C236.351 350.016 246.076 349.724 249.505 345.275C250.458 344.048 249.271 341.884 247.595 343.896Z"
      fill="#031425"
    />
    <path
      d="M342.489 103.778C342.216 103.699 341.925 103.711 341.66 103.814C341.395 103.916 341.171 104.103 341.023 104.345C340.875 104.587 340.81 104.871 340.839 105.153C340.868 105.436 340.989 105.701 341.183 105.908C343.234 108.664 344.704 109.966 345.126 113.719C345.43 116.443 347.682 117.027 348.272 113.674C348.397 111.637 347.914 109.609 346.885 107.847C345.855 106.085 344.325 104.669 342.489 103.778Z"
      fill="#031425"
    />
    <path
      d="M330.575 101.508C330.286 101.553 330.022 101.701 329.832 101.923C329.642 102.146 329.537 102.429 329.537 102.722C329.537 103.015 329.642 103.298 329.832 103.521C330.022 103.743 330.286 103.891 330.575 103.936C334.684 104.479 336.916 112.371 337.481 115.909C338.22 120.533 340.676 119.53 340.857 115.679C341.076 110.71 336.173 100.767 330.575 101.508Z"
      fill="#031425"
    />
    <path
      d="M317.226 100.977C316.202 101.234 315.931 103.145 317.239 103.32C324.952 104.368 326.258 109.98 327.335 116.549C328.224 121.959 330.997 121.316 331.033 115.88C331.082 108.508 325.727 98.8424 317.226 100.977Z"
      fill="#031425"
    />
    <path
      d="M304.673 104.212C303.742 104.981 304.794 106.602 305.881 106.222C313.996 103.394 317.08 111.75 317.481 116.374C317.632 118.119 319.875 119.316 320.303 117.271C322.254 107.931 311.988 98.1668 304.673 104.212Z"
      fill="#031425"
    />
    <path
      d="M413.149 223.21C412.806 196.272 414.237 168.13 413.149 141.55C412.407 123.407 411.941 112.765 391.621 110.254C379.48 108.763 363.884 109.943 352.111 110.017C351.951 110.016 351.791 110.046 351.642 110.106C351.493 110.166 351.357 110.255 351.243 110.367C351.011 110.595 350.879 110.905 350.876 111.229C350.873 111.554 350.999 111.866 351.226 112.098C351.453 112.33 351.763 112.462 352.088 112.465C364.406 113.078 378.634 112.697 389.872 113.374C407.794 114.452 410.343 123.833 410.373 143.407C410.414 170.245 409.677 197.03 409.922 223.896C410.173 251.616 412.371 282.42 411.566 309.784C410.774 336.818 398.094 335.733 379.209 336.196C322.296 337.618 261.955 336.577 205.188 336.999C203.887 336.999 203.889 339.293 205.188 339.305C259.58 339.861 321.744 341.331 376.498 339.802C401.845 339.092 413.072 340.111 414.919 310.621C416.456 286.273 413.334 238.001 413.149 223.21Z"
      fill="#031425"
    />
    <path
      d="M308.211 109.875C276.42 109.518 242.568 108.553 210.88 109.662C195.442 110.203 177.186 115.88 177.186 134.336C177.154 183.859 176.89 233.381 176.973 282.902C176.99 294.404 176.085 309.005 177.373 319.994C177.483 322.24 178.077 324.436 179.115 326.431C180.153 328.427 181.61 330.174 183.386 331.553C184.47 332.405 186.603 330.989 185.161 329.553C183.647 328.052 182.446 326.267 181.626 324.3C180.807 322.333 180.385 320.223 180.385 318.091C179.548 305.852 180.353 291.543 180.36 279.038C180.383 230.842 180.225 182.64 180.225 134.451C180.225 116.38 199.515 113.017 213.777 112.843C245.148 112.457 276.578 113.241 307.961 113.079C309.993 113.068 310.287 109.91 308.211 109.875Z"
      fill="#031425"
    />
    <path
      d="M204.42 151.243C237.671 150.585 274.796 149.999 304.16 149.999C304.122 148.845 303.964 147.775 303.716 146.978C303.467 146.181 303.144 145.709 302.802 145.646C274.711 141.84 236.068 145.468 204.42 143.754C204.135 143.79 203.865 144.201 203.666 144.899C203.468 145.597 203.358 146.529 203.358 147.499C203.358 148.468 203.468 149.4 203.666 150.098C203.865 150.796 204.135 151.207 204.42 151.243Z"
      fill="#FBC108"
    />
    <path
      d="M205.215 171.418C263.332 171.143 333.563 173.516 379.543 172.36C379.477 171.879 379.201 171.433 378.767 171.101C378.332 170.769 377.766 170.572 377.17 170.546C328.072 168.96 260.531 169.011 205.215 168.297C204.716 168.312 204.244 168.483 203.898 168.774C203.551 169.065 203.358 169.453 203.358 169.857C203.358 170.261 203.551 170.649 203.898 170.94C204.244 171.231 204.716 171.402 205.215 171.418Z"
      fill="#031425"
    />
    <path
      d="M205.215 195.961C263.332 195.686 333.563 198.059 379.543 196.903C379.477 196.422 379.201 195.976 378.767 195.644C378.332 195.312 377.766 195.115 377.17 195.089C328.072 193.503 260.531 193.554 205.215 192.84C204.716 192.855 204.244 193.026 203.898 193.317C203.551 193.608 203.358 193.996 203.358 194.4C203.358 194.804 203.551 195.192 203.898 195.483C204.244 195.774 204.716 195.945 205.215 195.961Z"
      fill="#031425"
    />
    <path
      d="M205.215 220.503C263.332 220.229 333.563 222.602 379.543 221.446C379.477 220.965 379.201 220.519 378.767 220.187C378.332 219.855 377.766 219.658 377.17 219.632C328.072 218.046 260.531 218.097 205.215 217.383C204.716 217.398 204.244 217.569 203.898 217.86C203.551 218.151 203.358 218.539 203.358 218.943C203.358 219.347 203.551 219.735 203.898 220.026C204.244 220.317 204.716 220.488 205.215 220.503Z"
      fill="#031425"
    />
    <path
      d="M205.215 245.046C263.332 244.772 333.563 247.145 379.543 245.989C379.477 245.508 379.201 245.062 378.767 244.73C378.332 244.398 377.766 244.201 377.17 244.175C328.072 242.589 260.531 242.64 205.215 241.926C204.716 241.941 204.244 242.112 203.898 242.403C203.551 242.694 203.358 243.082 203.358 243.486C203.358 243.89 203.551 244.278 203.898 244.569C204.244 244.86 204.716 245.031 205.215 245.046Z"
      fill="#031425"
    />
    <path
      d="M205.215 269.589C263.332 269.315 333.563 271.688 379.543 270.532C379.477 270.051 379.201 269.605 378.767 269.273C378.332 268.941 377.766 268.744 377.17 268.718C328.072 267.132 260.531 267.183 205.215 266.469C204.716 266.484 204.244 266.655 203.898 266.946C203.551 267.237 203.358 267.625 203.358 268.029C203.358 268.433 203.551 268.821 203.898 269.112C204.244 269.403 204.716 269.574 205.215 269.589Z"
      fill="#031425"
    />
    <path
      d="M204.596 294.132C243.34 293.858 290.161 296.231 320.814 295.075C320.77 294.594 320.586 294.148 320.297 293.816C320.007 293.484 319.63 293.287 319.232 293.261C286.5 291.675 241.473 291.726 204.596 291.012C204.263 291.027 203.948 291.198 203.717 291.489C203.487 291.78 203.358 292.168 203.358 292.572C203.358 292.976 203.487 293.364 203.717 293.655C203.948 293.946 204.263 294.117 204.596 294.132Z"
      fill="#031425"
    />
    <path
      d="M203.202 323.166C189.725 326.486 180.758 343.56 166.894 343.867C162.781 343.959 161.905 346.152 166.894 346.521C181.363 347.586 190.63 329.396 203.796 326.043C209.698 324.539 200.588 328.461 195.233 340.597C194.507 342.244 197.127 343.213 197.851 341.579C199.783 337.171 202.56 333.183 206.024 329.841C209.992 325.96 209.276 321.666 203.202 323.166Z"
      fill="#031425"
    />
    <path
      d="M91.3261 106.19C89.1045 108.009 87.245 105.442 86.1481 103.606C84.3014 100.513 81.8881 93.4777 83.0702 89.8418C84.5037 85.405 89.8649 88.1782 92.3017 90.0121C93.3922 90.8343 94.5552 89.4733 95.0131 88.6C98.5127 81.916 100.877 72.0137 99.3498 64.531C99.0985 63.2998 97.0068 63.2082 97.026 64.6013C97.1623 73.1958 96.8258 79.2599 92.7362 87.0898C88.4975 83.3282 81.0489 83.309 79.9221 89.5308C78.5355 97.1988 84.3269 112.624 91.6669 109.617C93.3134 123.736 95.7139 137.799 96.2869 152.888C96.3446 153.168 96.5002 153.42 96.726 153.597C96.9517 153.773 97.2329 153.864 97.5195 153.853C97.806 153.842 98.0792 153.729 98.2904 153.535C98.5016 153.341 98.637 153.078 98.6725 152.794C99.6012 139.435 95.7736 120.686 93.7501 107.355C93.5392 105.979 92.2591 105.425 91.3261 106.19Z"
      fill="#031425"
    />
    <path
      d="M129.123 158.618C128.626 152.654 124.662 155.787 122.04 157.679C118.839 159.98 115.409 161.945 111.804 163.541C106.37 160.013 100.448 157.301 94.2269 155.491C94.0221 155.412 93.802 155.381 93.5833 155.4C93.3646 155.418 93.1529 155.486 92.9642 155.598C92.7756 155.71 92.6148 155.864 92.4941 156.047C92.3734 156.231 92.2958 156.439 92.2673 156.656C92.0671 160.156 92.9809 175.703 96.3271 178.17C99.0599 180.184 110.138 171.682 112.302 169.973C116.884 170.945 125.033 178.578 127.538 177.854C129.743 177.198 129.338 161.242 129.123 158.618Z"
      fill="#031425"
    />
    <path
      d="M137.185 57.6247C136.506 56.221 134.557 57.3499 135.096 58.7344C142.527 77.8405 148.138 101.07 144.216 121.414C141.611 134.929 132.429 138.865 119.934 135.272C116.905 134.403 113.932 133.216 111.071 132.147C109.702 131.636 109.154 133.702 110.417 134.277C112.87 135.406 115.382 136.402 117.943 137.259C118.543 141.883 118.128 151.473 118.279 153.956C118.362 155.334 120.409 155.268 120.652 153.941C120.974 148.624 120.896 143.291 120.418 137.985C130.855 140.705 141.015 138.179 145.224 127.212C151.825 109.982 145.498 74.7606 137.185 57.6247Z"
      fill="#031425"
    />
    <path
      d="M117.646 40.1152C116.291 40.1685 116.368 42.3006 117.659 42.4582C123.923 43.2463 133.455 45.027 132.569 53.5768C132.539 53.8651 132.623 54.1536 132.803 54.3808C132.983 54.608 133.245 54.7559 133.532 54.7932C133.82 54.8304 134.11 54.7539 134.342 54.58C134.574 54.4061 134.729 54.1486 134.773 53.8622C136.746 44.5414 125.418 39.8128 117.646 40.1152Z"
      fill="#031425"
    />
    <path
      d="M124.881 55.11C120.359 45.9766 109.253 41.904 99.5829 42.575C91.9298 43.1053 75.5416 47.6657 74.4255 56.8332C74.2401 58.3476 76.843 58.7182 77.0943 57.1953C78.3617 49.489 94.0577 45.4803 100.627 45.2353C104.978 44.9546 109.327 45.8196 113.239 47.744C117.152 49.6684 120.492 52.5849 122.926 56.2027C123.075 56.4536 123.316 56.6363 123.598 56.712C123.88 56.7876 124.18 56.7503 124.435 56.6079C124.69 56.4655 124.879 56.2293 124.962 55.9496C125.046 55.6698 125.016 55.3686 124.881 55.11Z"
      fill="#031425"
    />
    <path
      d="M108.032 59.1734C100.411 54.2851 88.9176 53.4416 81.1005 58.3811C72.5571 63.7764 73.4602 75.5872 79.3965 82.6141C79.6098 82.8787 79.9194 83.0478 80.2574 83.0842C80.5953 83.1205 80.9338 83.0212 81.1985 82.8079C81.4632 82.5946 81.6323 82.285 81.6686 81.9471C81.705 81.6091 81.6056 81.2706 81.3923 81.0059C76.7063 74.109 74.7446 64.6198 83.5223 60.0254C90.907 56.1616 99.7934 57.6569 106.937 61.2182C108.122 61.8061 109.133 59.8806 108.032 59.1734Z"
      fill="#031425"
    />
    <path
      d="M139.257 86.9953C138.453 86.5901 137.558 86.3969 136.658 86.4342C135.758 86.4715 134.882 86.7379 134.113 87.2083C132.742 88.252 133.594 89.4149 134.72 89.138C136.046 88.8732 137.401 88.7858 138.75 88.8782C139.849 88.7802 140.469 87.8622 139.257 86.9953Z"
      fill="#031425"
    />
    <path
      d="M121.288 88.0277C120.193 87.8164 119.064 87.8429 117.98 88.1052C116.896 88.3676 115.88 88.8598 115.002 89.5486C114.035 90.4219 114.604 91.702 115.673 91.3697C117.421 90.7146 119.279 90.4015 121.145 90.4474C123.738 90.6221 123.648 88.6241 121.288 88.0277Z"
      fill="#031425"
    />
    <path
      d="M139.671 78.7114C139.054 77.9463 138.262 77.3405 137.362 76.945C136.462 76.5494 135.481 76.3756 134.5 76.4383C133.519 76.5009 132.567 76.798 131.725 77.3048C130.883 77.8115 130.175 78.513 129.66 79.3504C129.522 79.6015 129.478 79.8937 129.536 80.1743C129.594 80.455 129.75 80.7057 129.977 80.8813C130.203 81.057 130.485 81.146 130.771 81.1325C131.058 81.1189 131.33 81.0036 131.538 80.8073C131.913 80.2678 132.4 79.8156 132.965 79.4812C133.531 79.1469 134.162 78.9383 134.815 78.8698C135.468 78.8013 136.129 78.8744 136.751 79.0841C137.374 79.2939 137.944 79.6353 138.423 80.0852C139.466 80.8222 140.389 79.8722 139.671 78.7114Z"
      fill="#031425"
    />
    <path
      d="M122.117 79.6626C121.067 78.9748 119.889 78.5064 118.653 78.2857C117.417 78.065 116.149 78.0964 114.926 78.3781C113.702 78.6599 112.548 79.1861 111.533 79.9251C110.519 80.6642 109.664 81.6008 109.02 82.6787C108.847 82.9329 108.782 83.2454 108.84 83.5474C108.897 83.8493 109.072 84.1161 109.327 84.289C109.581 84.4618 109.893 84.5266 110.195 84.4691C110.497 84.4116 110.764 84.2365 110.937 83.9823C111.947 82.4352 113.528 81.3501 115.335 80.9635C117.142 80.5769 119.029 80.9201 120.584 81.9183C122.049 82.8853 123.604 80.5998 122.117 79.6626Z"
      fill="#031425"
    />
    <path
      d="M136.657 113.877C135.461 113.617 134.216 113.695 133.061 114.102C132.807 114.171 132.585 114.325 132.43 114.537C132.275 114.75 132.198 115.01 132.211 115.273C132.225 115.535 132.327 115.786 132.503 115.982C132.678 116.178 132.915 116.309 133.174 116.352C135.083 116.654 136.962 117.121 138.791 117.747C144.949 119.283 138.751 114.354 136.657 113.877Z"
      fill="#031425"
    />
    <path
      d="M129.077 114.38C127.007 114.023 124.877 114.309 122.975 115.2C121.118 116.293 119.396 117.6 117.844 119.094C115.399 120.947 117.081 121.516 119.173 120.585C120.945 119.803 122.368 119.094 124.127 118.436C125.949 117.929 127.729 117.283 129.452 116.506C130.321 115.96 130.002 114.806 129.077 114.38Z"
      fill="#031425"
    />
    <path
      d="M130.367 85.9049C129.781 84.6482 127.7 85.2233 128.251 86.563C131.181 93.4767 132.726 100.898 132.799 108.406C132.835 111.814 127.301 108.285 124.816 107.537C124.568 107.489 124.312 107.523 124.085 107.633C123.858 107.743 123.673 107.924 123.558 108.149C123.443 108.373 123.405 108.629 123.448 108.878C123.491 109.126 123.614 109.354 123.798 109.527C125.197 110.486 126.739 111.22 128.366 111.701C132.156 113.058 135.332 113.74 135.355 108.293C135.277 100.564 133.578 92.9363 130.367 85.9049Z"
      fill="#031425"
    />
    <path
      d="M87.046 304.828C110.64 316.117 145.142 328.335 171.14 329.738C171.353 297.667 172.804 185.699 172.804 174.51C160.821 170.061 148.462 166.698 135.876 164.461C138.837 193.642 133.827 221.025 133.733 249.751C133.665 270.935 134.291 292.097 134.24 313.239C134.24 314.63 132.151 314.943 132.04 313.493C130.532 293.803 130.336 274.013 130.5 254.279C120.834 230.891 94.371 179.416 79.7848 163.73C61.4391 169.117 35.4808 181.173 26.2621 193.859C12.8005 212.36 6.0591 300.223 14.1382 321.095C22.2173 341.967 107.49 379.499 132.353 385.896C132.353 364.862 143.016 340.405 148.303 331.766C125.91 324.398 103.383 317.478 82.5282 306.719C73.1754 301.895 65.6693 295.656 65.9547 284.944C66.3807 269.044 67.1816 247.544 70.3574 232.089C70.4081 231.792 70.5731 231.526 70.8171 231.349C71.0611 231.173 71.3646 231.098 71.6627 231.143C71.9607 231.187 72.2296 231.346 72.4116 231.586C72.5936 231.826 72.6744 232.128 72.6365 232.427C70.236 248.96 70.3957 265.77 69.105 282.435C68.0932 295.516 76.1169 299.601 87.046 304.828ZM136.002 261.054C140.884 250.424 145.587 240.089 149.547 229.079C152.697 220.346 154.629 218.295 147.325 211.276C144.492 208.556 141.766 205.244 146.98 203.334C149.463 202.422 155.96 201.244 155.44 198.222C154.669 193.763 146.386 179.39 143.962 174.817C143.291 173.552 145.027 172.261 145.847 173.52C150.268 180.464 154.087 187.774 157.261 195.369C158.326 197.813 158.938 200.584 156.539 202.454C154.536 203.709 152.342 204.63 150.043 205.182C146.247 206.169 146.976 207.018 150.196 210.235C157.683 217.705 154.987 222.052 151.751 230.945C147.978 241.631 143.456 252.037 138.217 262.085C138.067 262.356 137.819 262.56 137.525 262.656C137.23 262.752 136.91 262.732 136.629 262.602C136.348 262.471 136.128 262.239 136.011 261.951C135.895 261.664 135.891 261.344 136.002 261.054ZM72.2297 197.304C70.8345 192.984 73.6312 180.581 74.9987 176.363C75.4247 175.047 77.5121 175.773 77.199 177.092C76.1084 181.708 73.9763 190.694 74.4513 195.372C74.8219 199.012 78.1511 199.229 88.2963 202.509C96.1773 205.065 94.1751 208.652 93.6766 215.502C92.8949 226.289 92.1154 226.314 100.493 233.394C108.525 240.18 116.798 248.106 125.12 254.321C126.457 255.32 124.802 257.263 123.501 256.313C114.617 249.821 103.336 239.857 95.223 232.431C89.259 226.977 90.6158 221.848 91.1377 214.616C91.4827 209.839 93.2528 207.001 87.8426 205.214C84.4964 204.109 81.1096 203.133 77.7826 201.972C76.5536 201.689 75.4094 201.118 74.4441 200.306C73.4788 199.495 72.7198 198.466 72.2297 197.304Z"
      fill="#031425"
    />
  </svg>
);

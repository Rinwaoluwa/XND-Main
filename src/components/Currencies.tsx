import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

// Define the currency symbols used in the carousel
const currencies = [
    { symbol: <TCoin /> },
    { symbol: <Naira /> },
    { symbol: <TCoin /> },
    { symbol: <Naira /> },
];

export default function Currencies() {
    // `isMobile` checks if the screen width is below 992px using a custom hook
    const isMobile = useMediaQuery(992);

    // States to manage carousel width, center detection, and current centered element
    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null); // Ref to access the carousel container
    const x = useMotionValue(0); // Motion value for controlling horizontal scroll
    const controls = useAnimation(); // Controls for framer-motion animations
    const [containerCenter, setContainerCenter] = useState(0); // Stores the center of the carousel container
    const [currentCenteredElementIndex, setCurrentCenteredElementIndex] = useState<number | null>(null); // Tracks which element is centered

    // Effect to calculate carousel dimensions (scrollable width and center)
    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
            setContainerCenter(carouselRef.current.offsetWidth / 2); // Get the center of the carousel container
        }
    }, []);

    // Effect to animate the carousel scrolling infinitely when not on mobile
    useEffect(() => {
        const animateCarousel = async () => {
            await controls.start({
                x: -width, // Scroll from left to right
                transition: {
                    duration: 80, // Total duration of the scrolling animation
                    ease: "linear", // Smooth linear scrolling
                    repeat: Infinity, // Infinite scrolling
                },
            });
        };

        if (width > 0) {
            // Only animate if the width is greater than 0
            animateCarousel();
        }
    }, [controls, width, isMobile]);

    // Effect to detect if any currency symbol is centered
    useEffect(() => {
        const unsubscribe = x.on("change", () => {
            if (carouselRef.current) {
                const children = carouselRef.current.children;
                for (let i = 0; i < children.length; i++) {
                    const currencyDiv = children[i] as HTMLDivElement;
                    const rect = currencyDiv.getBoundingClientRect();
                    const symbolCenter = rect.left + rect.width / 2; // Calculate the center of the current symbol

                    // Check if the symbol's center is near the container's center (within 370px)
                    if (Math.abs(symbolCenter - containerCenter) < 370) {
                        setCurrentCenteredElementIndex(i); // Mark the element as centered
                    }
                }
            }
        });

        return () => unsubscribe(); // Clean up the subscription on component unmount
    }, [containerCenter, x]);

    return (
        <div className="w-1/2 rounded-2xl overflow-hidden">
            <div className="relative rounded-2xl">
                {/* Motion div representing the carousel with horizontal scrolling */}
                <motion.div
                    ref={carouselRef} // Reference to the div
                    className="flex" // Flexbox layout for horizontal arrangement of symbols
                    style={{ x }} // Horizontal scroll position
                    animate={controls}
                >
                    {/* Display each currency symbol twice to create the infinite scroll illusion */}
                    {[...currencies, ...currencies].map((currency, index) => (
                        <motion.div
                            key={`${index}`}
                            className="h-[300px] w-[200px] ml-2 flex-shrink-0" // Styling for each currency item
                            style={{
                                left: index * 50, // Offset each element to the right
                                zIndex: currencies.length - index, // Z-index for layering effects
                            }}
                            animate={{
                                y: currentCenteredElementIndex === index ? 250 : 0, // Drop down the centered element
                                opacity: currentCenteredElementIndex === index ? [1, 0.6, 0.2, 0] : 1, // Fade out the centered element
                            }}
                            transition={{
                                duration: 5, // Total duration for translate y animation
                                ease: "linear", // Linear easing for smoothness
                                opacity: {
                                    delay: 0.8 * (index + 1), // Stagger the fade animation
                                    duration: 3,
                                    ease: "linear",
                                },
                            }}
                        >
                            {currency.symbol} {/* Render the currency symbol */}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

// Naira symbol component
function Naira() {
    return (
        <svg width="300" height="300" viewBox="0 0 536 660" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6199_4312)">
                <rect width="536" height="660" rx="48" fill="#072F54" />
                <g clipPath="url(#clip1_6199_4312)">
                    <path
                        d="M268.5 476C349.41 476 415 410.41 415 329.5C415 248.59 349.41 183 268.5 183C187.59 183 122 248.59 122 329.5C122 410.41 187.59 476 268.5 476Z"
                        fill="white"
                    />
                    <path
                        d="M321.534 321.27V331.777H214.364V321.27H321.534ZM321.534 343.965V354.472H214.364V343.965H321.534ZM312.971 281.974V389.564H293.323L246.568 321.848H245.727V389.564H223.032V281.974H242.943L289.435 349.638H290.328V281.974H312.971Z"
                        fill="#072F54"
                    />
                </g>
                <circle cx="27" cy="623" r="121" fill="#0E3E6A" />
                <circle cx="519" cy="37" r="121" fill="#0E3E6A" />
            </g>
            <defs>
                <clipPath id="clip0_6199_4312">
                    <rect width="536" height="660" rx="48" fill="white" />
                </clipPath>
                <clipPath id="clip1_6199_4312">
                    <rect width="293" height="293" fill="white" transform="translate(122 183)" />
                </clipPath>
            </defs>
        </svg>
    );
}

// TCoin symbol component
function TCoin() {
    return (
        <svg width="300" height="300" viewBox="0 0 536 660" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="536" height="660" rx="48" fill="#26A17B" />
            <g clipPath="url(#clip0_6191_5459)">
                <path
                    d="M268.5 476C349.41 476 415 410.41 415 329.5C415 248.59 349.41 183 268.5 183C187.59 183 122 248.59 122 329.5C122 410.41 187.59 476 268.5 476Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M286.098 342.166V342.148C285.09 342.221 279.899 342.532 268.316 342.532C259.068 342.532 252.558 342.258 250.269 342.148V342.175C214.67 340.61 188.098 334.411 188.098 326.994C188.098 319.587 214.67 313.388 250.269 311.795V336.004C252.595 336.169 259.261 336.562 268.472 336.562C279.523 336.562 285.063 336.105 286.098 336.013V311.813C321.624 313.397 348.131 319.596 348.131 326.994C348.131 334.411 321.624 340.591 286.098 342.166ZM286.098 309.295V287.631H335.669V254.596H200.697V287.631H250.269V309.286C209.982 311.136 179.684 319.12 179.684 328.679C179.684 338.238 209.982 346.213 250.269 348.072V417.495H286.098V348.054C326.321 346.204 356.546 338.229 356.546 328.679C356.546 319.129 326.321 311.154 286.098 309.295Z"
                    fill="#26A17B"
                />
            </g>
            <defs>
                <clipPath id="clip0_6191_5459">
                    <rect width="293" height="293" fill="white" transform="translate(122 183)" />
                </clipPath>
            </defs>
        </svg>
    );
}

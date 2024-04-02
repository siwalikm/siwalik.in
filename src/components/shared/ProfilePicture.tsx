import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const TOTAL_IMAGES = 8;
const images = Array.from(
  { length: TOTAL_IMAGES },
  (_, i) => `/profile/profile${i}.avif`
);
const imageSize = 220;
const MIN_CLICK_COUNT_FOR_EASTER_EGG = 6;

export default function ProfilePicture() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const elementRef = useRef(null);

  const changeImage = useCallback(() => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount < MIN_CLICK_COUNT_FOR_EASTER_EGG - 1) return;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === currentImageIndex);
    setCurrentImageIndex(newIndex);
    localStorage.setItem("currentImageIndex", newIndex.toString());
  }, [clickCount, currentImageIndex]);

  const handleAnimationEnd = useCallback(() => {
    setAnimationClass("");
  }, []);

  useEffect(() => {
    const node = elementRef.current;

    if (node) {
      node.addEventListener("animationend", handleAnimationEnd);

      return () => {
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    }
  }, [handleAnimationEnd]);

  useEffect(() => {
    const savedIndex = localStorage.getItem("currentImageIndex");
    if (savedIndex) {
      setCurrentImageIndex(Number(savedIndex));
    } else {
      setCurrentImageIndex(0);
    }

    if (clickCount === 0) return;

    setAnimationClass(
      clickCount < MIN_CLICK_COUNT_FOR_EASTER_EGG
        ? "animate-animate-shake"
        : "animate-animate-pulse"
    );
  }, [clickCount]);

  const widthPercentage = useMemo(
    () => (clickCount / MIN_CLICK_COUNT_FOR_EASTER_EGG) * 100,
    [clickCount]
  );

  return (
    <>
      <div style={{ aspectRatio: 1, width: imageSize, height: imageSize }}>
        <img
          ref={elementRef}
          src={images[currentImageIndex]}
          className={`cursor-pointer self-center rounded ${animationClass}`}
          alt="Profile picture of the author, Siwalik Mukherjee"
          width={imageSize}
          height={imageSize}
          onClick={changeImage}
        />
        {clickCount >= 2 && clickCount <= MIN_CLICK_COUNT_FOR_EASTER_EGG && (
          <div className="my-2 h-2.5 w-full ">
            {clickCount === MIN_CLICK_COUNT_FOR_EASTER_EGG ? (
              <div className="h-2.5 ">
                <code>Wow, a prolific hacker!</code>
              </div>
            ) : (
              <div
                className="h-2.5 rounded-full bg-bg-primary"
                style={{ width: `${widthPercentage}%` }}
              ></div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

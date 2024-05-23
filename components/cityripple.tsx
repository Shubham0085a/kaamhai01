import React, { CSSProperties } from "react";

// Modify these
const MAIN_CIRCLE_SIZE = 160;
const MAIN_CIRCLE_OPACITY = 0.34;
const NUM_CIRCLES = 3;

const CityRipple = React.memo(() => {
  return (
    <div className="absolute left-1/2 top-28 h-full w-full overflow-visible">
      {Array.from({ length: NUM_CIRCLES }, (_, i) => (
        <div
          key={i}
          className={`absolute -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full bg-yellow-400`}
          style={
            {
              width: MAIN_CIRCLE_SIZE + i * 47,
              height: MAIN_CIRCLE_SIZE + i * 47,
              opacity: MAIN_CIRCLE_OPACITY - i * 0.03,
              animationDelay: `${i * 0.06}s`,
            } as CSSProperties
          }
        ></div>
      ))}
    </div>
  );
});

CityRipple.displayName = "Ripple";

export default CityRipple;

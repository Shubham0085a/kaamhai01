import React, { CSSProperties } from "react";

// Modify these
const MAIN_CIRCLE_SIZE = 350;
const MAIN_CIRCLE_OPACITY = 0.24;
const NUM_CIRCLES = 6;

const Ripple = React.memo(() => {
  return (
    <div className="absolute left-1/2 top-[105%] h-full w-full overflow-visible">
      {Array.from({ length: NUM_CIRCLES }, (_, i) => (
        <div
          key={i}
          className={`absolute -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full bg-neutral-400`}
          style={
            {
              width: MAIN_CIRCLE_SIZE + i * 110,
              height: MAIN_CIRCLE_SIZE + i * 110,
              opacity: MAIN_CIRCLE_OPACITY - i * 0.03,
              animationDelay: `${i * 0.06}s`,
            } as CSSProperties
          }
        ></div>
      ))}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;

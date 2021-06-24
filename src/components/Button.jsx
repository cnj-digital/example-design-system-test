import React from "react";
import cx from "classnames";

export default React.forwardRef(
  ({ title, description, className, onClick, disabled = false }, ref) => {
    return (
      <div className={className} onClick={disabled ? null : onClick}>
        <div
          className={cx(
            "text-center transition duration-300 cursor-pointer inline-flex rounded-full flex-col text-sm text-white shadow-argeta px-6 py-3",
            {
              "opacity-25": disabled,
            }
          )}
          style={{
            backgroundImage:
              "linear-gradient(123.13deg, #DD7700 13.91%, #DD5100 82.49%)",
          }}
        >
          <div className="font-bold tracking-widest uppercase">{title}</div>
          {description && (
            <div className="font-light text-opacity-70">{description}</div>
          )}
        </div>
      </div>
    );
  }
);

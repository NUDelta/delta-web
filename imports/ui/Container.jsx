import React from "react";

export default function Container({children, className, ...rest}) {
    return (
        <div className={`w-full max-w-6xl mx-auto px-4 ${className}`} {...rest}>
            {children}
        </div>
    );
}
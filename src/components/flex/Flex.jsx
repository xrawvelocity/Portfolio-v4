import React from "react";

export default function Flex({ children, direction = "row", ...rest }) {
    return (
        <div style={{ display: "flex", flexDirection: direction, ...rest }}>
            {children}
        </div>
    );
}

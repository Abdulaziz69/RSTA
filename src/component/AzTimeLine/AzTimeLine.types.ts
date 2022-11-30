import React from "react";
export interface AzTimeLineProps {
    observerTriger?: React.RefObject<HTMLElement>,
    observerMargin?: number[],
    from?: string,
    to?: string,
    duration?: number,
    skip?: boolean
}
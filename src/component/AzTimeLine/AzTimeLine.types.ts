import React from "react";
export interface AzTimeLineProps {
    observerTriger: React.RefObject<HTMLElement>,
    ObserverMargin: number[],
    from: string,
    to: string,
    duration: number
}
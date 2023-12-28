// eslint-disable-next-line
import React, { memo, useEffect } from "react";

const handleClickOutside = (event: MouseEvent, ref: React.MutableRefObject<HTMLInputElement | null>, set: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (ref?.current && !ref?.current?.contains(event?.target as Node)) {
        set(false);
    }
}

export function useRefCustom(ref: React.MutableRefObject<HTMLInputElement | null>, actions: React.Dispatch<React.SetStateAction<boolean>>) {
    useEffect(() => {
        document.addEventListener("click", (e) => handleClickOutside(e, ref, actions));
        return () => {
            document.removeEventListener("click", (e) => handleClickOutside(e, ref, actions));
        };
        // eslint-disable-next-line
    }, [ref]);
}
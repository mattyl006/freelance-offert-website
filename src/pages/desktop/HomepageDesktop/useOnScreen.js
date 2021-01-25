import React from "react";

function useOnScreen(options) {
    const [ref, setRef] = React.useState(null);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if (ref) {
            observer.observe(ref);
        }

        return() => {
            if(ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);

    return [setRef, visible];
}

export default useOnScreen;
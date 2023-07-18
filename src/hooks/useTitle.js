import { useEffect } from "react";

const useTitle = title => {

    useEffect(() => {
        document.title = `${title} - Miah Kitchen`;
    }, [title]);
};

export default useTitle;
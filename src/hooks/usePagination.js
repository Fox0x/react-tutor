const {useMemo} = require("react");

export const usePagination = (totalPages) => {

    const pagesArray = []
    return useMemo(() => {
        for (let i = 0; i < totalPages; i++) {
            pagesArray.push(i + 1)
        }
        return pagesArray
    }, [totalPages])
}
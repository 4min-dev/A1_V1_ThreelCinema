import { useMemo } from "react"

export const usePaginate = (totalPages,currPage,moviesData) => {
    const totalArr = []

    const result = useMemo(() => {
       for(
        let i = currPage;
        currPage < totalPages - 10 
         ? i <= currPage + 10 
         : i <= totalPages; 
        i++) {
        totalArr.push(i)
       }
        return totalArr
    },[totalPages,currPage,moviesData])
    return result
}
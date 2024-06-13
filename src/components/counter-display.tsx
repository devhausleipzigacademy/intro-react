import { useEffect } from "react";

type Props = {
    count: number
}

export function CounterDisplay({count}: Props) {
    useEffect(() => {
       localStorage.setItem("count", count.toString())
    }, [count])
    
    
    
    return (
        <span style={{ paddingInline: "10px" }}>{count}</span>
    )
}
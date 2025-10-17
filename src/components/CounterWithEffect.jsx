import { useEffect, useState } from "react";

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`el contador cambio a: ${count}`)
    }, [count]);

    return(
        <div className="">
            <p>El contador esta en: {count}</p>
            <button onClick={ () => setCount(count + 1)}> Incrementar contador</button>
        </div>
    )
}

export default CounterWithEffect;
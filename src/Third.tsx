import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { testActions } from './store/slices/testSlice'

type Props = {}

const Third = (props: Props) => {
    const dispatch = useDispatch()
    const test = useSelector((state: any) => state.test.value)

    return (
        <div>
            <h2>Third</h2>
            <hr />
            <button onClick={() => dispatch(testActions.decrementByAmount(10))}>-10</button>
            <button onClick={() => dispatch(testActions.decrement())}>-1</button>
            <button onClick={() => dispatch(testActions.increment())}>+1</button>
            <button onClick={() => dispatch(testActions.incrementByAmount(10))}>+10</button>
            <p>{test}</p>
        </div>
    )
}

export default Third
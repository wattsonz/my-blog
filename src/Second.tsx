import { Routes, Route, Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'

type Props = {}

const Second = (props: Props) => {
    return (
        <>
            <h1>Second</h1>
            <Link to="one">One</Link>
            <Link to="two">Two</Link>

            <Routes>
                <Route path="one" element={<h2>One</h2>} />
                <Route path="two" element={<h2>Two</h2>} />
                <Route path="/" element={<Navigate to="one" replace={true} />} />
            </Routes>
        </>

    )
}

export default Second
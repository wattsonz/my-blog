import { Routes, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Home from './Home'
import Page404 from './Page404'
import Second from './Second'
import Third from './Third'
import Post from './Post'

type Props = {}

const Div = styled.div`
  .app-header-item{
  color: rgb(34, 34, 34);
  font-weight: 600;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  }
  .app-header-item-active{
    background-color: skyblue;
  }
`

const App = (props: Props) => {

  // closures & stateless & recursion
  // useEffect(() => {
  //   const base = (a: number) => {
  //     return function power(b: number): number {
  //       if (b === 0) return 1
  //       if (b === 1) return a

  //       return power(b - 1) * a
  //     }
  //   }

  //   const baseTwo = base(2)
  //   console.log(baseTwo(3))
  // }, [])
  const getNavClass = (navLinkProps: any) => {
    let navClass = 'app-header-item';
    if (navLinkProps.isActive) navClass += ' app-header-item-active';

    return navClass;
  }

  return (
    <>
      <Div>
        <NavLink className={getNavClass} to="/" end>Home</NavLink>
        <NavLink className={getNavClass} to="second">Second</NavLink>
        <NavLink className={getNavClass} to="second">Third</NavLink>
      </Div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="second/*" element={<Second />} />
        <Route path="third" element={<Third />} />
        <Route path="post/:postId" element={<Post />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App

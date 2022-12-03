

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
    return (
        <>
            {props.children}
        </>
    )
}

export default Layout
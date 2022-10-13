import Header from "../components/Header";
const Wrapper = ({children, className = ""}) => {

    const css = `flex justify-center items-center relative z-50 ${className}`;

    return (
        <>
            <Header />
            <div className={css}>
                {children}
            </div>
        </>
    )
}

export default Wrapper;
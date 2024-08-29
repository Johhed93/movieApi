import "../ShowMovie.css"
const Button = ({func,classname, text})=>{
    return(
        <button onClick={func} className={classname}>{text}</button>
    )
}
export default Button
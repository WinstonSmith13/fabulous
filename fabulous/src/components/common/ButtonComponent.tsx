import '../../assets/styles/Layout.css';

export default function ButtonComponent(props) {
    return(
        <button className={props.className}  onClick={props.onClick}>
            <img src={props.img_src} alt="" className={props.img_className} />
            {props.value}
        </button>
    );
}
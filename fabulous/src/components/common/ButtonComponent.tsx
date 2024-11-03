import '../../assets/styles/Layout.css';

export default function ButtonComponent(props) {
    return(
        <button className={props.className}>
            <p>{props.value}</p>
        </button>
    );
}
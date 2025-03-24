import s from "./Message.module.scss";

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

export default Message;
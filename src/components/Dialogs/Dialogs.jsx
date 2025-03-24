import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props) => {

    console.log(props);

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} /> );

    const onNewMessageChange = (e) => {
        let newText = e.target.value;
        props.updateNewMessageBody(newText);
    };

    const onSendMessageClick = () => {
        props.addMessage();
    };

    return (
        <div className="dialogs">
            <div className="dialogsItem">
                { dialogsElements }
            </div>
            <div className="messages">
                { messagesElements }
            </div>
            <textarea value={state.newMessageBody} onChange={onNewMessageChange}></textarea>
            <div>
                <button onClick={onSendMessageClick}>Отправить</button>
            </div>
        </div>
    )
}



export default Dialogs;
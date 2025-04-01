import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { Field, reduxForm } from 'redux-form'
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormControls/FormControls";

const Dialogs = (props) => {

    console.log(props);

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} /> );

    const onSendMessageClick = (values) => {
       props.addMessage(values.newMessageText);
    };

    return (
        <div className="dialogs">
            <div className="dialogsItem">
                { dialogsElements }
            </div>
            <div className="messages">
                { messagesElements }
            </div>
            <AddMessageReduxForm onSubmit={onSendMessageClick} />
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder="Введите сообщение" name="newMessageText" component={Textarea} validate={[required, maxLengthCreator(10)]} />
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    // a unique name for the form
    form: 'dialogAddMessageForm'
})(AddMessageForm)


export default Dialogs;
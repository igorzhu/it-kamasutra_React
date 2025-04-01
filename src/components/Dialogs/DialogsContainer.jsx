import Dialogs from "./Dialogs"
import {sendMessageCreator} from '../../redux/dialogs-reducer.ts'
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage:  state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            let action = sendMessageCreator(newMessageBody);
            dispatch(action);
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
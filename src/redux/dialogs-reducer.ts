const SEND_MESSAGE = 'SEND-MESSAGE';

type initialStateType = typeof initialState

type dialogTipe = {
    id: number
    name: string
}

type messageTipe = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ] as Array<dialogTipe>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ] as  Array<messageTipe>
}

const dialogsReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {

        case SEND_MESSAGE:

            let newMessage = {
                id: 6,
                message: action.newMessageBody
            };

            return {...state,
                messages: [...state.messages, newMessage]
            };

        default:
            return state;
    }
}

type sendMessageCreatorType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody): sendMessageCreatorType => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;


import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        });

        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
        console.log(this.props);
        console.log(this.state);
        console.log(prevProps);
        console.log(prevState);

        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render(){
        return(
            <div>
                {  !this.state.editMode &&
                    <div className="user-status" onDoubleClick={this.activateEditMode}>{ this.props.status || "---------"}</div>
                }
                {
                    this.state.editMode &&
                    <input autoFocus={true} onChange={ this.onStatusChange } onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.state.status} />
                }

            </div>
        )

    }
}

export default ProfileStatus;
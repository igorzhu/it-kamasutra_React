import Preloader from '../../Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.profile.photos.large} />
            <div><b>{props.profile.fullName}</b></div>
            ava + description
            <ProfileStatus status={props.status} updateStatus = { props.updateStatus } />
        </div>
    )

}

export default ProfileInfo;
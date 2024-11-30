

const ProfilePage = ({params}) => {
    const {id}  = params

    return (
        <div>
        <h1>{id}</h1>
        </div>
    );
};

export default ProfilePage;

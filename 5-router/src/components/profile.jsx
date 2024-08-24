import { useNavigate, Navigate, useSearchParams } from "react-router-dom";

const Profile = () => {
    let navigate = useNavigate();
    const [searchParams] = useSearchParams();

    console.log(searchParams.get('profile'));

    return(
      <>
        <div>Profile</div>
        <button onClick={() => navigate('/')}>Back home</button>
        {/* <Navigate replace to='/'/> */}
      </>
    )
  }
  
  export default Profile;
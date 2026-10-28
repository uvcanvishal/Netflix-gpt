import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO } from '../utils/constants';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid, email, displayName,photoURL} = user;
          dispatch(addUser({uid, email, displayName, photoURL}));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
      return () => {
        unsubscribe();
      };
    },[]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  };

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO} alt='Netflix Logo' /> 
      {user && (
        <div className='flex p-2'>
          <img className='w-12 h-12' alt='usericon' src={user.photoURL || 'https://occ-0-6245-3647.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABWQLL7bT3pYDF0xKXID9tpW4PldTqv3UQKdTRZkA2-RWg7H8sxekkU5LOjLBZLmHSe5GoOaOjjokJgKpeEQQ-rS5VZsHg9Q.png?r=e6e'} />
          <button onClick={handleSignOut} className='text-white font-bold'>Sign Out</button>
        </div>
      )}
    </div>
  )
}

export default Header

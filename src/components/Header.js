import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
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
      <img className='w-44' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-10-13/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='Netflix Logo' /> 
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

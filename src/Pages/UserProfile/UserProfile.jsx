import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex justify-center my-32 " data-aos="fade-up">
      {user && (
        <div className="card w-96 border border-cyan-400 shadow-xl">
          <figure>
            <img
              data-aos="fade-left"
              className=""
              src={user.photoURL}
              alt="User"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {user.displayName}
              <div className="badge badge-primary">
                {' '}
                {user.emailVerified ? (
                  'Verified'
                ) : (
                  <p className=" text-rose-600">Not Verified</p>
                )}
              </div>
            </h2>
            <p>{user.email}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                {user.emailVerified ? 'Verified' : 'Not Verified'}
              </div>
              <div className="badge badge-outline">{user.providerId}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

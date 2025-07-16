import React from "react";

const UserData = ({ userData }) => {
  let { name, phone, image } = userData;
  return (
    <div className="border border-2 border-red-600 p-2 rounded-md">
      <h1 className="text-3xl">Name: {name}</h1>
      <h2 className="text-2xl">Phone: {phone}</h2>
      <img src={image} className="mt-1 mx-auto" alt={name} />
    </div>
  );
};

export default UserData;

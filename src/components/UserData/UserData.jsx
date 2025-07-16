import React from "react";

const UserData = ({ userData }) => {
  let { name, phone, website } = userData;
  return (
    <div className="border border-2 border-red-600 p-2 rounded-md">
      <h1 className="text-3xl">Name: {name}</h1>
      <h2 className="text-2xl">Phone: {phone}</h2>
      <h3>Website: {website}</h3>
    </div>
  );
};

export default UserData;

import React from "react";

const page = ({ params }: { params: { userId: string } }) => {
  const { userId } = params;
  if (!userId) return <div>No user found with that id</div>;
  return <div>userId: {userId}</div>;
};

export default page;

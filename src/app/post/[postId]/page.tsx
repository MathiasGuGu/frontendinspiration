"use client";
import { PostsService } from "@/app/_services/PostsService";
import React, { useEffect } from "react";

const page = ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const { getPostById, postByIdData } = PostsService();

  useEffect(() => {
    getPostById(parseInt(postId));
  }, []);

  if (!postId) return <div>No post found with that id</div>;
  if (!postByIdData) return <div>Loading...</div>;

  return <div>postid: {postId}</div>;
};

export default page;

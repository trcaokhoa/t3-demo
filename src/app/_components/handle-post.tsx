"use client";"use client";
import { useState } from "react";
import { api } from "~/trpc/react";

export function UpdatePost() {
  const [postId, setPostId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updatePost = api.post.updatePost.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updatePost.mutate({ id: postId, title, description });
    // Handle success/error cases if needed
    // Clear input fields or update state
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={postId} onChange={(e) => setPostId(e.target.value)} />
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
}

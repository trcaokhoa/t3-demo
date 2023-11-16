"use client"
import { useState } from "react";
import { api } from "~/trpc/react";

export function UpdatePost() {
  const [postId, setPostId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updatePost = api.post.updatePost.useMutation({
    onSuccess: () => {
      // Handle success - maybe clear input fields or update state
      setPostId("");
      setTitle("");
      setDescription("");
    },
    onError: (error) => {
      // Handle error case
      console.error("Error updating post:", error);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updatePost.mutate({ id: postId, title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input className="w-full rounded-full px-4 py-2 text-black" type="text" value={postId} onChange={(e) => setPostId(e.target.value)} />
      <input className="w-full rounded-full px-4 py-2 text-black" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className="w-full rounded-full px-4 py-2 text-black" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20" type="submit" disabled={updatePost.isLoading}>
        {updatePost.isLoading ? "Updating..." : "Update"}
      </button>
    </form>
  );
}

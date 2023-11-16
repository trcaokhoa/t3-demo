"use client";
import { useState } from "react";
import { api } from "~/trpc/react"; // Import the trpc instance

export function DeletePost() {
  const [postId, setPostId] = useState(""); // State for post ID

  // Mutate function to delete the post by its ID
  const deletePostMutation = api.post.deletePost.useMutation();

  const handleDelete = async () => {
    // Call the deletePost mutation with the provided post ID
    await deletePostMutation.mutate(postId);

    // After deletion, you can perform further actions like refreshing the list
    // or updating the UI as needed
    // Example: router.refresh();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleDelete();
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Post ID"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
      >
        Delete Post
      </button>
    </form>
  );
}

import Link from "next/link";
import React from "react";

import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="border border-violet-200 p-4 rounded-md shadow-md bg-white">
      <Link href={`/posts/${props.slug}`}>
        <p className="font-bold text-violet-600 hover:underline">{props.title}</p>
      </Link>
      <p className="text-sm text-slate-400">{props.subtitle}</p>
      <p className="text-slate-700">{props.date}</p>
    </div>
  );
};

export default PostPreview;

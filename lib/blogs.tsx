"use server";
import fs from "fs"; // file system
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

// process.cwd -> current working directory
const postsDirectory = path.join(process.cwd(), "blogposts");

export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8").toString();
  const { content, frontmatter } = await compileMDX<{
    title: string;
    date: string;
    tags: string[];
    publish: boolean;
  }>({
    source: fileContents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight
        ]
      }
    },
  });
  const id = fileName.replace(/\.mdx$/, "");
  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
      publish: frontmatter.publish,
    },
    content,
  };
  return blogPostObj;
}

export async function getBlogsMeta(): Promise<Meta[]> {
  // get file names under /blogposts
  const fileNames = fs.readdirSync(postsDirectory);
  const posts: Meta[] = [];
  await Promise.all(
    fileNames.map(async (fileName) => {
      const post = await getPostByName(fileName);
      if (post && post.meta.publish) {
        const { meta } = post;
        posts.push(meta);
      }
    })
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
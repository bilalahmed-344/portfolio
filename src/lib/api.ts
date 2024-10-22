import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const config = require('../../next.config')
const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  let { data, content } = matter(fileContents);

  // Replaces ${basePath} with next.config.js basePath
  const slugs = data;
  let itemStr = JSON.stringify(slugs)
  itemStr = itemStr.replaceAll(/\$\{basePath}/gi, config.basePath);
  data = JSON.parse(itemStr)

  return { ...data, slug: realSlug, content } as Post;
}


export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

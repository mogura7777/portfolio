/** @format */
import type { InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import type { Blog, Tag } from "src/models/blog";
import { client } from "src/libs/client";
import { formatDate } from "src/libs/util";
import { Pagination } from "src/components/Molecules/Pagination";
type Props = {
  blogs: Blog[];
  tags: Tag[];
  totalCount: number;
};
export const getStaticProps = async () => {
  const blog = await client.get({
    endpoint: "blog",
    queries: { offset: 0, limit: 10 },
  });
  const tag = await client.get({ endpoint: "tag" });
  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
      totalCount: blog.totalCount,
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  // tags,
  blogs,
  totalCount,
}: Props) => {
  return (
    <div>
      <h1 className="ttl">
        Blog<span className="ttl__read">ブログ</span>
      </h1>
      <ul className="Blog__list">
        {blogs.map((blog) => (
          <li className="Blog__item" key={blog.id}>
            <Link className="Blog__link" href={`/blog/${blog.id}`}>
              <div className="Blog__data">{formatDate(blog.publishedAt)}</div>
              <ul className="tag">
                {blog.tags.map((tag) => (
                  <li key={tag.id}>{tag.tag}</li>
                ))}
              </ul>
              <div className="Blog__sttl">{blog.title}</div>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={totalCount} />
    </div>
  );
};

export default Home;

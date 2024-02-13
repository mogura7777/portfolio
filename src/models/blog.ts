/** @format */

// src/types/blog.ts

export type Blog = {
  id: string | number;
  body: string;
  title: string;
  tags: Tag[];
  image: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Tag = {
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
export type Image = {
  url: string;
  height: number;
  width: number;
};
export type Book = {
  id: string;
  title: string;
  author: string;
  body: string;
  image: Image;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

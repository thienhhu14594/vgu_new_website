import { createDirectus, rest } from '@directus/sdk';

type Global = {
  slug: string;
  title: string;
  description: string;
};

type Author = {
  slug: string;
  name: string;
};

type Page = {
  slug: string;
  title: string;
  content: string;
};

type Post = {
  slug: string;
  image: string;
  title: string;
  content: string;
  author: Author;
  published_date: string;
};

type HeroSection = {
  slug: string;
  title: string;
  image: string;
};

type Test = {
  slug: string;
  stt: string;
};

type Schema = {
  global: Global;
  posts: Post[];
  pages: Page[];
  heroSection: HeroSection[];
  test: Test[];
};

const directus = createDirectus<Schema>('http://localhost:8055').with(rest());

export { directus, Global, Post, Page, HeroSection, Test }; //
//

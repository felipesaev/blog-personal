import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/allBlogs.mjs';


//TODO verificar este arquivo
async function generate() {
  const feed = new RSS({
    title: 'Felipe Costa',
    site_url: 'https://thatsallfolks.dev',
    feed_url: 'https://thatsallfolks.dev/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://thatsallfolks.dev/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();

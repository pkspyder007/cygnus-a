import { getAllPostPaths } from '@/utils/blog'
import { CATEGORIES } from '../constants'
import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: "http://localhost:5000",
    production: "https://praveeen.in",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync({
      development: 'pages',
      production: './',
    }[process.env.NODE_ENV])
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.jsx",
        "_error.jsx",
        "sitemap.xml.jsx",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    })
    .concat(getAllPostPaths().map(path => `${baseUrl}${path}`))
    .concat(Object.keys(CATEGORIES).map(path => `${baseUrl}/categories/${path}`));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url.replace('.jsx', '')}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
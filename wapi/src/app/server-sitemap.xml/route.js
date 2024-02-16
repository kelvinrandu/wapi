// app/sitemap.xml/route.js
import { items,categories } from "../../json/data";


const URL = "https://www.wapi.ke";

function generateSiteMap(_items,_categories) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!--Wapiii sitemap-->
     <url>
       <loc>${URL}</loc>
       
       <lastmod> ${new Date()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>1</priority>
     </url>
     <url>
       <loc>${URL}/products</loc>
       <lastmod> ${new Date()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     ${_items
        .map(({ id }) => {
          return `
            <url>
                <loc>${`${URL}/product/${id}`}</loc>
                <lastmod> ${new Date()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.8</priority>
            </url>
          `;
        })
        .join("")}
       ${_categories
        .map(({ id }) => {
          return `
            <url>
                <loc>${`${URL}/landing/${id}`}</loc>
                <lastmod> ${new Date()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.8</priority>
            </url>
          `;
        })
        .join("")}
        ${_categories
            .map(({ id }) => {
              return `
                <url>
                    <loc>${`${URL}/category/${id}`}</loc>
                    <lastmod> ${new Date()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>0.5</priority>
                </url>
              `;
            })
            .join("")}
   </urlset>
 `;
}

export function GET() {
//   const posts = getSortedPostsData();
  const body = generateSiteMap(items,categories);

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}

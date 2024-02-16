// app/sitemap.xml/route.js
import { items,categories } from "../../json/data";


const URL = "https://www.wapi.ke";

function generateSiteMap(_items,_categories) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!--Wapiii sitemap-->
     <url>
       <loc>${URL}</loc>
     </url>
     <url>
       <loc>${URL}/products</loc>
     </url>
     ${_items
        .map(({ id }) => {
          return `
            <url>
                <loc>${`${URL}/product/${id}`}</loc>
            </url>
          `;
        })
        .join("")}
       ${_categories
        .map(({ id }) => {
          return `
            <url>
                <loc>${`${URL}/landing/${id}`}</loc>
            </url>
          `;
        })
        .join("")}
        ${_categories
            .map(({ id }) => {
              return `
                <url>
                    <loc>${`${URL}/category/${id}`}</loc>
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

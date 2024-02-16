// app/sitemap.xml/route.js
import { items,categories } from "../../json/data";


const URL = "https://www.wapi.ke";

function generateSiteMap(_items,_categories) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${URL}</loc>
     </url>
     <url>
       <loc>${URL}/products</loc>
     </url>

       ${_categories
        .map(({ name }) => {
          return `
            <url>
                <loc>${`${URL}/landing/${name}`}</loc>
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

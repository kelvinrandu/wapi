import { getSortedPostsData } from "../lib/posts";
import { items,categories } from "../json/data";
 
const URL = "https://www.wapi.ke/";
 
function generateSiteMap(products,cat) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <url>
       <loc>${URL}</loc>
     </url>
     <url>
       <loc>${URL}/products</loc>
     </url>

     ${products
       .map(({ name }) => {
         return `
           <url>
               <loc>${`${URL}/product/${name}`}</loc>
           </url>
         `;
       })
        .join("")}
        .join("")}
        ${cat
         .map(({ name}) => {
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
 
export async function getServerSideProps({ res }) {
  const posts = getSortedPostsData();
 
  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(items,categories);
 
  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();
 
  return {
    props: {},
  };
}
 
export default function SiteMap() {}
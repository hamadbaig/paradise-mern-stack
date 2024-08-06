// "use client";
// import React from "react";
// // import { Link } from 'react-router-dom';
// import ProductTop from "@/component/products/ProductTop";
// import ProductMid from "@/component/ProductMid";
// import { useRouter, useSearchParams } from "next/navigation";

// const singleCategory = () => {

//   const searchParams = useSearchParams();
//   const search = searchParams.get("query");
//   return (
//     <>
//       <ProductTop />
//       <ProductMid 
//       find={search}/>
//     </>
//   );
// };

// export default singleCategory;
"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductTop from "@/component/products/ProductTop";
import ProductMid from "@/component/ProductMid";

// Wrap the component with Suspense
const CategorySearchContent = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  console.log(search, "query value");

  return (
    <>
      <ProductTop />
      <ProductMid find={search} />
    </>
  );
};

const CategorySearch = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategorySearchContent />
    </Suspense>
  );
};

export default CategorySearch;

// "use client";
// import React from "react";
// // import { Link } from 'react-router-dom';
// import ProductMid from "@/component/ProductCategory";
// import { useRouter, useSearchParams } from "next/navigation";
// import ProductCategory from "@/component/ProductCategory";

// const categorySearch = () => {

//   const searchParams = useSearchParams();
//   const search = searchParams.get("category");
//   console.log(search,"catttttt")
//   return (
//     <>
//       <ProductCategory 
//       find={search}/>
//     </>
//   );
// };

// export default categorySearch;
"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCategory from "@/component/ProductCategory";

// Wrap the component with Suspense
const CategorySearchContent = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  console.log(search, "catttttt");

  return (
    <ProductCategory find={search} />
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

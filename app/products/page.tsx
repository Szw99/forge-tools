import { Suspense } from "react";
import ProductsContent from "./ProductsContent";

export default function Products() {
  return <Suspense fallback={null}><ProductsContent /></Suspense>;
}

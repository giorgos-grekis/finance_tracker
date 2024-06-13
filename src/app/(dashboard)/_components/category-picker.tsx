'use client';
import type { TransactionType } from "@/lib/types";

type TypeCategoryPicker =  {
    type: TransactionType
}

const CategoryPicker = ({type}:TypeCategoryPicker ) => {
  return (
    <div>CategoryPicker</div>
  )
}

export default CategoryPicker
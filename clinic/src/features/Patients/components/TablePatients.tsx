"use client";
import DataTable from "@/shared/components/data-table/DataTable";
import { productColumns, products } from "../data/patients";
import DataTablePagination from "@/shared/components/data-table/DataTablePagination";

function TablePatients() {
  return (
    <div >
      <DataTable columns={productColumns} data={products} />

      <DataTablePagination page={1} totalPages={10}/>
    </div>
  );
}

export default TablePatients;

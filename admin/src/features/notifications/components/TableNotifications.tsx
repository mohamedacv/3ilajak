"use client";
import DataTable from "@/shared/components/data-table/DataTable";
import DataTablePagination from "@/shared/components/data-table/DataTablePagination";
import { notifications, notificationsColumns } from "../data/notifications";

function TableNotifications() {
  return (
    <div>
      <DataTable columns={notificationsColumns} data={notifications} />

       <div className="flex items-center justify-between border border-gray-300 px-6 py-4 bg-blue-100/50 rounded-b-xl" />
    </div>
  );
}

export default TableNotifications;

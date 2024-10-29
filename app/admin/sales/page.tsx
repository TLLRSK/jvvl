import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchAdminOrders } from "@/utils/actions";
import { formatCurrency, formatDate } from "@/utils/format";
import React from "react";

async function SalesPage() {
  const orders = await fetchAdminOrders();

  return (
    <Table>
      <TableCaption>Total orders</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Products</TableHead>
          <TableHead>Order total</TableHead>
          <TableHead>Shipping</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          return (
            <TableRow key={order.id}>
              <TableCell>{order.email}</TableCell>
              <TableCell>{order.products}</TableCell>
              <TableCell>{formatCurrency(order.orderTotal)}</TableCell>
              <TableCell>{formatCurrency(order.shipping)}</TableCell>
              <TableCell>{formatDate(order.createdAt)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default SalesPage;

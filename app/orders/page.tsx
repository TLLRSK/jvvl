import Container from "@/components/global/Container";
import SectionTitle from "@/components/global/SectionTitle";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchUserOrders } from "@/utils/actions";
import { formatCurrency, formatDate } from "@/utils/format";
import React from "react";

async function OrdersPage() {
  const orders = await fetchUserOrders();
  return (
    <section className="min-h-[calc(100dvh-68px)]">
      <SectionTitle text="Your Orders" />
      <Container>
        <Table>
          <TableCaption>Total Orders : {orders.length}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Products</TableHead>
              <TableHead>Order Total</TableHead>
              <TableHead>Shipping</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => {
              const { products, orderTotal, shipping, createdAt } = order;
              return (
                <TableRow key={order.id}>
                  <TableCell>{products}</TableCell>
                  <TableCell>{formatCurrency(orderTotal)}</TableCell>
                  <TableCell>{formatCurrency(shipping)}</TableCell>
                  <TableCell>{formatDate(createdAt)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </section>
  );
}

export default OrdersPage;

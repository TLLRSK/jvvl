import AdminSidebar from "@/components/admin/AdminSidebar";
import Container from "@/components/global/Container";
import SectionTitle from "@/components/global/SectionTitle";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SectionTitle text="dashboard" />
      <section>
        <Container className="grid lg:grid-cols-12 gap-12">
          <div className="col-span-2">
            <AdminSidebar />
          </div>
          <div className="col-span-10">{children}</div>
        </Container>
      </section>
    </>
  );
}

export default DashboardLayout;

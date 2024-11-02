import Container from "@/components/global/Container";
import SectionTitle from "@/components/global/SectionTitle";
import dynamic from "next/dynamic";
import React from "react";

const DynamicDashboard = dynamic(() => import("@/components/admin/AdminSidebar"),{
  loading: () => null,
})

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-[calc(100dvh-68px)]">

      <SectionTitle text="dashboard" />

      <Container className="grid lg:grid-cols-12 gap-12 py-16">
        <div className="mx-auto lg:col-span-2">
          <DynamicDashboard />
        </div>
        <div className="lg:col-span-10">{children}</div>
      </Container>
      
    </section>
  );
}

export default DashboardLayout;

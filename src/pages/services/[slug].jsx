import React from "react";
import { useRouter } from "next/router";
import ServiceDetailScreen from "@/components/screens/services/details/details";
import { SERVICES_DATA } from "@/constants/services";
import Head from "next/head";

const ServiceDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const data = SERVICES_DATA[slug];

  if (!data) return null; // Or a 404/Loading state

  return (
    <>
      <Head>
        <title>Amigos | {data.title}</title>
      </Head>
      <ServiceDetailScreen data={data} />
    </>
  );
};

export default ServiceDetailPage;

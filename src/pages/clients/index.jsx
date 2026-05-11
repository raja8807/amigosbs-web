import ClientsScreen from "@/components/screens/clients/clients";
import Head from "next/head";
import React from "react";

const ClientsPage = () => {
  return (
    <>
      <Head>
        <title>Amigos | Clients</title>
      </Head>
      <ClientsScreen />
    </>
  );
};

export default ClientsPage;

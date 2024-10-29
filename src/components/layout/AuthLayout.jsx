import React from "react";

import { Header, Layout, Sidebar } from "..";

const AuthLayout = ({ children }) => (
  <Layout className="flex-col">
    <Header />
    <div className="flex flex-row flex-1">
      <Sidebar />
      <div className="flex flex-col flex-1 p-4 min-w-1200">{children}</div>
    </div>
  </Layout>
);

export default AuthLayout;

import React from "react";

import { Header, Layout } from "..";

const AuthLayout = ({ children }) => (
  <Layout className="flex-col">
    <Header />
    <div className="flex flex-row flex-1">
      <div className="flex flex-col flex-1 p-4 overflow-x-auto">{children}</div>
    </div>
  </Layout>
);

export default AuthLayout;

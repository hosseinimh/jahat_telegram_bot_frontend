import React from "react";

import { Layout, Sidebar } from "..";

const AuthBlankLayout = ({ children }) => (
  <Layout className="flex-col">
    <div className="flex flex-row flex-1">
      <Sidebar />
      <div className="flex flex-col flex-1 justify-center items-center p-4">
        {children}
      </div>
    </div>
  </Layout>
);

export default AuthBlankLayout;

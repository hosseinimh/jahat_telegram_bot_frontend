import React from "react";

import { Layout } from "..";

const GuestBlankLayout = ({ children }) => (
  <Layout className="flex-row-reverse layout guest">
    <div className="sidebar guest w-48"></div>
    <div className="flex flex-col flex-1 justify-center items-center p-4">
      {children}
    </div>
  </Layout>
);

export default GuestBlankLayout;

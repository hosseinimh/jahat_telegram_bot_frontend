import React from "react";

import { Layout } from "..";
import {ENV} from "../../config";
import Utils from "../../utils";

const GuestLayout = ({ children, title }) => (
  <>
    <Layout className="flex-row-reverse layout guest relative">
      <div className="sidebar guest w-48"></div>
      <div className="flex flex-col flex-1 justify-center items-center p-4">
        <div className="logo w-32 h-32 rounded-full bg-no-repeat bg-cover mb-4"></div>
        <h2 className="text-label mb-4">{title}</h2>
        <div className="flex flex-col justify-center items-center bg-white p-4 rounded-lg w-96 box">
          <div className="w-full">{children}</div>
        </div>
        <h1 className={'absolute bottom-4'}>
          <div className='block text-xs text-subline mb-2'>
            ورژن {Utils.en2faDigits(ENV.appVersion)} - ساخته شده توسط همسا.
          </div>
        </h1>
      </div>

    </Layout>
  </>
);

export default GuestLayout;

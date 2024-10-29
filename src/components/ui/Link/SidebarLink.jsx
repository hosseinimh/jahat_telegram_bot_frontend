import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "../../../store";

const SidebarLink = ({ item, link, p, children, fill = false }) => {
  const {
    state: { pageState },
  } = useAppContext();
  const [page, setPage] = useState(null);

  useEffect(() => {
    if (!pageState?.page) {
      return;
    }

    setPage(pageState.page);
  }, [pageState?.page]);

  if (item) {
    return (
      <li>
        <Link
          to={link}
          className={`flex flex-row items-center gap-4 menu-item menu-link !rounded ${
            fill ? "[&_*]:hover:fill-primary" : ""
          } ${page === p ? "selected" : ""}`}
        >
          {children}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <div
        to={link}
        className={`flex flex-row items-center gap-4 menu-item menu-link !rounded ${
          fill ? "[&_*]:hover:fill-primary" : ""
        } ${page === p ? "selected" : ""}`}
      >
        {children}
      </div>
    </li>
  );
};

export default SidebarLink;

import React, { FC, memo } from "react";
import { useData } from "./data";
import { SalonListView as MainComponent } from "./salon-list";

export const SalonListView: FC = memo(
  () => {
    const props = useData();
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MainComponent {...props} />;
  },
  () => true,
);

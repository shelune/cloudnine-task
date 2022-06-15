import { ComponentProps } from "react";
import { SalonListView } from "./salon-list";
import type { SalonItem } from "./salon-row/types";

import salons from "../../assets/data/MOCK_DATA.json";

const MOCK_SALONS: SalonItem[] = salons.slice(0, 100);

// use an external data provider so we can swap out this mock data
// with an actual data source later easier, also better for testing purpose
export const useData = (): ComponentProps<typeof SalonListView> => ({
  salons: MOCK_SALONS,
});

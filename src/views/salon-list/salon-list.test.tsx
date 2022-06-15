import React, { ReactNode } from "react";
import { act, fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { SalonListView } from "./salon-list";
import salons from "../../assets/data/MOCK_DATA.json";

const mockSalons = salons.slice(0, 10);

function renderWithRouter(children: ReactNode) {
  const history = createMemoryHistory();
  return render(
    <Router location={history.location} navigator={history}>
      {children}
    </Router>,
  );
}

describe("GamesView", () => {
  it("should render", () => {
    const { container } = renderWithRouter(
      <SalonListView salons={mockSalons} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should filter out salons based on price", () => {
    const { getByTestId, getAllByTestId } = renderWithRouter(
      <SalonListView salons={mockSalons} />,
    );
    const minPriceInput = getByTestId("min-price");
    const maxPriceInput = getByTestId("max-price");

    act(() => {
      fireEvent.change(minPriceInput, {
        target: { value: 60 },
      });
      fireEvent.change(maxPriceInput, {
        target: { value: 80 },
      });
    });
    expect(getAllByTestId("salon-row")).toHaveLength(6);
  });

  it("should render empty state when necessary", () => {
    const { container } = renderWithRouter(<SalonListView salons={[]} />);
    expect(container).toMatchSnapshot();
  });
});

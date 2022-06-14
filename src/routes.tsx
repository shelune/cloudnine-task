import React, { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./views/layout/layout";
import { SalonListView } from "./views/salon-list/salon-list";
import { SalonView } from "./views/salon/salon";
import { HomeView } from "./views/home/home";

export const RoutesProvider: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/salons/" element={<SalonListView />} />
        <Route path="/salons/:salonId" element={<SalonView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

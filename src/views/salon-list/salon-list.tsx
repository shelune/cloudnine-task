import classNames from "classnames";
import React, { FC, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron-left.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/filters.svg";
import salons from "../../assets/data/MOCK_DATA.json";

import css from "./salon-list.module.scss";
import { SalonRow } from "./salon-item/salon-item";
import type { SalonItem } from "./salon-item/types";

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 100;
const MOCK_SALONS: SalonItem[] = salons.slice(0, 100);

export const SalonListView: FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);

  const filteredSalons = useMemo(
    () =>
      MOCK_SALONS.filter(
        (salon) => salon.price >= minPrice && salon.price <= maxPrice,
      ),
    [maxPrice, minPrice],
  );

  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.headerLeft}>
          <Link to="/">
            <ChevronIcon className={css.navIcon} />
          </Link>
        </div>
        <div className={css.headerCenter}>
          <h1 className={css.title}>Hår</h1>
        </div>
        <div className={css.headerRight}>
          <SettingsIcon className={css.settingsIcon} />
        </div>
      </div>
      <div className={css.filterBar}>
        <div className={css.filterBarHeader}>
          <div className={css.filterBarLeft}>
            <span>{`Price $${minPrice} - $${maxPrice}`}</span>
          </div>
          <div className={css.filterBarRight}>
            <span
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              onClick={() => {
                setShowFilters(!showFilters);
              }}
              className={classNames(css.filterBarToggle, {
                [css.isOpen]: showFilters,
              })}
            >
              <ChevronIcon />
            </span>
          </div>
        </div>
        <div
          className={classNames(css.filterBarBody, {
            [css.isOpen]: showFilters,
          })}
        >
          <div className={css.filterBarText}>
            Searching for salons with price between $
          </div>
          <div className={css.minPrice}>
            <input
              className={css.priceInput}
              type="number"
              id="min-price"
              placeholder={`${minPrice}`}
              value={minPrice}
              onChange={(e) => setMinPrice(parseInt(e.target.value, 10))}
            />
          </div>
          <div className={css.filterBarText}>and $ </div>
          <div className={css.maxPrice}>
            <input
              className={css.priceInput}
              type="number"
              id="max-price"
              placeholder={`${maxPrice}`}
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
            />
          </div>
        </div>
      </div>
      <div className={css.salonList}>
        {filteredSalons.length ? (
          filteredSalons.map((salon) => (
            <SalonRow key={salon.id} salon={salon} />
          ))
        ) : (
          <div className={css.salonListEmpty}>
            Sorry no matching salon found.
          </div>
        )}
      </div>
    </div>
  );
};

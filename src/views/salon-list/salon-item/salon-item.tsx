import React, { FC } from "react";
import type { SalonItem } from "./types";

import { ReactComponent as ChevronIcon } from "../../../assets/icons/chevron-left.svg";
import { ReactComponent as StarEmptyIcon } from "../../../assets/icons/star-empty.svg";
import { ReactComponent as StarFilledIcon } from "../../../assets/icons/star-filled.svg";

import css from "./salon-item.module.scss";

type SalonItemProps = {
  salon: SalonItem;
};

export const SalonRow: FC<SalonItemProps> = ({ salon }) => (
  <div className={css.container}>
    <div className={css.rowContent}>
      <div className={css.rowLeft}>
        <span>{salon.time}</span>
      </div>
      <div className={css.rowCenter}>
        <h2 className={css.salonName}>{salon.name}</h2>
        <div className={css.salonRating}>
          <div className={css.salonStars}>
            {[1, 2, 3, 4, 5].map((idx) => (
              <span className={css.star}>
                {idx > salon.rating ? <StarEmptyIcon /> : <StarFilledIcon />}
              </span>
            ))}
          </div>
          <div className={css.salonFeedbackCount}>
            {`(${salon.feedbackCount})`}
          </div>
        </div>
        <div className={css.salonAddress}>{salon.address}</div>
      </div>
      <div className={css.rowRight}>
        <div className={css.salonPrice}>{`$${salon.price}`}</div>
        <div className={css.salonDuration}>{`${salon.duration} min`}</div>
      </div>
    </div>
    <div className={css.rowNav}>
      <ChevronIcon className={css.rowNavIcon} />
    </div>
  </div>
);

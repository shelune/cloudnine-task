import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron-left.svg";

import css from "./salon.module.scss";

export const SalonView: FC = () => {
  const [tab, setTab] = useState<"info" | "schedule">("info");

  console.log("salon view");
  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.navBar}>
          <div className={css.navBarLeft}>
            <Link to="/salons">
              <ChevronIcon className={css.navIcon} />
            </Link>
          </div>
          <div className={css.navBarRight}>
            <ChevronIcon className={css.navIcon} />
          </div>
        </div>
        <div className={css.overview}>
          <h1 className={css.salonName}>Lorem, ipsum dolor.</h1>
          <div className={css.salonRating}>rating goes here</div>
        </div>
      </div>
      <div className={css.contentNav}>
        <div
          className={css.navInfo}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
          onClick={() => setTab("info")}
        >
          Info
        </div>
        <div
          className={css.navSchedule}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
          onClick={() => setTab("schedule")}
        >
          Schedule
        </div>
      </div>
      <div className={css.content}>
        {tab === "info" ? (
          <>
            <div className={css.contentRow}>
              <span className={css.rowIcon}>
                <ChevronIcon />
              </span>
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
            <div className={css.contentRow}>
              <span className={css.rowIcon}>
                <ChevronIcon />
              </span>
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
            <div className={css.contentRow}>
              <span className={css.rowIcon}>
                <ChevronIcon />
              </span>
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
            <div className={css.contentRow}>
              <span className={css.rowIcon}>
                <ChevronIcon />
                <span>Lorem ipsum dolor sit amet.</span>
              </span>
            </div>
            <div className={css.salonIntro}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita laboriosam earum voluptas libero porro. Ex modi
                recusandae mollitia minima laudantium?
              </p>
            </div>
          </>
        ) : (
          <>
            <div className={css.salonIntro}>
              <p>Schedule goes here</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

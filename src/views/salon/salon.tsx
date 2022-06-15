import classNames from "classnames";
import React, { FC, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron-left.svg";
import { ReactComponent as StarEmptyIcon } from "../../assets/icons/star-empty.svg";
import { ReactComponent as StarFilledIcon } from "../../assets/icons/star-filled.svg";
import { ReactComponent as AddressIcon } from "../../assets/icons/address.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as WebsiteIcon } from "../../assets/icons/website.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import salonImage from "../../assets/images/salon-1.jpeg";
import salons from "../../assets/data/MOCK_DATA.json";

import css from "./salon.module.scss";
import type { SalonItem } from "../salon-list/salon-row/types";

const MOCK_SALONS: SalonItem[] = salons.slice(0, 100);

export const SalonView: FC = () => {
  const [tab, setTab] = useState<"info" | "schedule">("info");
  const { salonId } = useParams();
  const salon = useMemo(
    () =>
      salonId !== undefined
        ? MOCK_SALONS.find((item) => item.id === parseInt(salonId, 10))
        : null,
    [salonId],
  );

  if (!salon) {
    return (
      <div className={css.container}>
        <div className={css.contentEmpty}>
          Sorry, we have trouble getting data for this salon. Please come back
          later!
        </div>
      </div>
    );
  }
  return (
    <div className={css.container}>
      <div
        className={css.header}
        style={{
          backgroundImage: `url(${salonImage})`,
        }}
      >
        <div className={css.navBar}>
          <div className={css.navBarLeft}>
            <Link to="/salons">
              <ChevronIcon className={css.navIcon} />
            </Link>
          </div>
          <div className={css.navBarRight}>
            <HeartIcon className={css.favoriteIcon} />
          </div>
        </div>
        <div className={css.overview}>
          <h1 className={css.salonName}>{salon.name}</h1>
          <div className={css.salonRating}>
            <div className={css.salonStars}>
              {[1, 2, 3, 4, 5].map((idx) => (
                <span key={idx} className={css.star}>
                  {idx > salon.rating ? <StarEmptyIcon /> : <StarFilledIcon />}
                </span>
              ))}
            </div>
            <div className={css.salonFeedbackCount}>
              {`(${salon.feedbackCount})`}
            </div>
          </div>
        </div>
      </div>
      <div className={css.contentNav}>
        <div
          className={classNames(css.navItem, {
            [css.isActive]: tab === "info",
          })}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
          onClick={() => setTab("info")}
        >
          Info
        </div>
        <div
          className={classNames(css.navItem, {
            [css.isActive]: tab === "schedule",
          })}
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
              <div className={css.rowWrapper}>
                <span className={css.rowIcon}>
                  <AddressIcon />
                </span>
                <span>{salon.address}</span>
              </div>
            </div>
            <div className={css.contentRow}>
              <div className={css.rowWrapper}>
                <span className={css.rowIcon}>
                  <ClockIcon />
                </span>
                <span>Open until 19.00 today</span>
                <span className={css.dropdownIcon}>
                  <ChevronIcon />
                </span>
              </div>
            </div>
            <div className={css.contentRow}>
              <div className={css.rowWrapper}>
                <span className={css.rowIcon}>
                  <PhoneIcon />
                </span>
                <span>08-522 389 20</span>
              </div>
            </div>
            <div className={css.contentRow}>
              <div className={css.rowWrapper}>
                <span className={css.rowIcon}>
                  <WebsiteIcon />
                </span>
                <span>https://www.awesome-hair.se</span>
              </div>
            </div>
            <div className={css.salonIntro}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                praesentium. Sed consectetur numquam perferendis quae fugit
                consequuntur, quibusdam laudantium aut minus nam vitae ipsam
                distinctio dolore quia dolorum pariatur, alias ex modi, omnis
                autem sint deleniti aliquam eum necessitatibus. Exercitationem?
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

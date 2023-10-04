import React from "react";
import { useTranslation } from "react-i18next";
import "./GeneralStyle.css";
export default function Introduction() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="general-body">
      <h1 className="header">{t("introduction.title")}</h1>

      <h4>{t("introduction.subTitle")}</h4>
      <h4>{t("introduction.mainOverview")}</h4>
      <h6>{t("introduction.mainOverviewP1")}</h6>
      <section>
        <h2 className="section-header">{t("introduction.subTitle2")}</h2>
        <h4>{t("introduction.deviceUseTitle")}</h4>
        <h6>{t("introduction.deviceUseP1")}</h6>
        <h4>{t("introduction.statisticsTitle")}</h4>
        <h6>{t("introduction.statisticsP1")}</h6>
        <h4>{t("introduction.documentationTitle")}</h4>
        <h6>{t("introduction.documentationP1")}</h6>
      </section>
      <section>
        <h2 className="section-header">{t("introduction.mainOverview2")}</h2>
        <h6>{t("introduction.mainOverview2P1")}</h6>
        <h4>{t("introduction.userHomeTitle")}</h4>
        <h6>{t("introduction.userHomeP1")}</h6>
        <h4>{t("introduction.clientTitle")}</h4>
        <h6>{t("introduction.clientP1")}</h6>
        <h4>{t("introduction.testsTitle")}</h4>
        <h6>{t("introduction.testsP1")}</h6>
        <h4>{t("introduction.userStatisticsTitle")}</h4>
        <h6>{t("introduction.userStatisticsP1")}</h6>
      </section>
    </div>
  );
}

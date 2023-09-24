import React from "react";
import { useTranslation } from "react-i18next";
export default function Introduction() {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <h1>{t("introduction.title")}</h1>
      <h2>{t("introduction.subTitle")}</h2>
      <h3>{t("introduction.mainOverview")}</h3>
      <h4>{t("introduction.mainOverviewP1")}</h4>
      <h2>{t("introduction.subTitle2")}</h2>
      <h3>{t("introduction.deviceUseTitle")}</h3>
      <h4>{t("introduction.deviceUseP1")}</h4>
      <h3>{t("introduction.statisticsTitle")}</h3>
      <h4>{t("introduction.statisticsP1")}</h4>
      <h3>{t("introduction.documentationTitle")}</h3>
      <h4>{t("introduction.documentationP1")}</h4>
      <h2>{t("introduction.mainOverview2")}</h2>
      <h4>{t("introduction.mainOverview2P1")}</h4>
      <h3>{t("introduction.userHomeTitle")}</h3>
      <h4>{t("introduction.userHomeP1")}</h4>
      <h3>{t("introduction.clientTitle")}</h3>
      <h4>{t("introduction.clientP1")}</h4>
      <h3>{t("introduction.testsTitle")}</h3>
      <h4>{t("introduction.testsP1")}</h4>
      <h3>{t("introduction.userStatisticsTitle")}</h3>
      <h4>{t("introduction.userStatisticsP1")}</h4>
    </div>
  );
}

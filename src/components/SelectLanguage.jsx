import React from "react";
import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Select from "react-select";

const SelectLanguage = () => {
  const options = [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
  ];
  const [t, i18n] = useTranslation("global");
  return (
    <div className="mx-5">
      <Select
        options={options}
        placeholder={t("landing.nav.language")}
        onChange={(e) => i18n.changeLanguage(e.value)}
        className="col-md "
      />
    </div>
  );
};

export default SelectLanguage;

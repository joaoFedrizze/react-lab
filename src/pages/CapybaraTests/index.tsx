import React, { useState } from "react";
import useQuery from "../../hooks/useQuery";
import CapybaraDiferenceOfSelectors from "./CapybaraDiferenceOfsSlectors";
import CapybaraFaker from "./CapybaraFaker";
import CapybaraHelloWorld from "./CapybaraHelloWorld";
import CapybaraMultipleSelector from "./CapybaraMultipleSelector";
import CapybaraPreWrap from "./CapybaraPreWrap";
import CapybaraUploadFile from "./Capybarauploadfile";
import { useEffect } from "react";
import CapybaraMultipleElements from "./CapybaraMultipleElements";

const CapybaraTests: React.FC = () => {
  const query = useQuery();

  const page = query.get("page");

  return (
    <>
      {page === "helloWorld" ? (
        <CapybaraHelloWorld />
      ) : page === "faker" ? (
        <CapybaraFaker />
      ) : page === "uploadfile" ? (
        <CapybaraUploadFile />
      ) : page === "prewrap" ? (
        <CapybaraPreWrap />
      ) : page === "multipleselector" ? (
        <CapybaraMultipleSelector />
      ) : page === "diferenceofselectors" ? (
        <CapybaraDiferenceOfSelectors />
      ) : page === "multipleelements" ? (
        <CapybaraMultipleElements />
      ) : (
        <CapybaraHelloWorld />
      )}
    </>
  );
};

export default CapybaraTests;

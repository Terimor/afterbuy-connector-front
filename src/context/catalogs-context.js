import React from "react";
import {getDefaultCatalogs} from "../constants/catalogs.const";

export const CatalogsContext = React.createContext(getDefaultCatalogs());
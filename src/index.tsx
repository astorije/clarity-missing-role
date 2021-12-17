import { render } from "react-dom";

import { App } from "./App";

import "normalize.css/normalize.css"; // css reset
import "@cds/core/global.min.css"; // clarity global styles
import "@cds/core/styles/module.shims.min.css"; // non-evergreen browser shims
import "@cds/city/css/bundles/default.min.css"; // load base font

const rootElement = document.getElementById("root");
render(<App />, rootElement);

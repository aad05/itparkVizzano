import Flow from "../components/FlowByParams";
import FlowSection from "../components/FlowSections";
import Home from "../components/Home";
import Store from "../components/Store";

const navigationData = [
  { id: 0, path: "/", Element: Home },
  { id: 1, path: "/flow/:flowID", Element: Flow },
  { id: 2, path: "/flow/:flowID/:flowSection/:flowDate", Element: FlowSection },
  { id: 3, path: "/store", Element: Store },
];

export { navigationData };

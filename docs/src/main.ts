import { initModals } from "./ts/modals";
import { initTabs } from "./ts/tabs";
import { initColorPicker } from "./ts/color-picker";
import { showCode } from "./ts/show-code";
import { initToasts } from "./ts/toasts";

window.onload = () => {
  initModals();
  initToasts();
  initTabs();
  initColorPicker();
  showCode();
};

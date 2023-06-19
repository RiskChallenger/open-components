import { initColorPicker } from "./ts/color-picker";
import { initModals } from "./ts/modals";
import { showCode } from "./ts/show-code";
import { initTabs } from "./ts/tabs";
import { initThemeSwitcher } from "./ts/theme-switcher";
import { initToasts } from "./ts/toasts";

window.onload = () => {
  initModals();
  initToasts();
  initTabs();
  initColorPicker();
  showCode();
  initThemeSwitcher();
};

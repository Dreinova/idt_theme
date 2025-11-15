(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.idtTheme = {
    attach: function (context, settings) {
      const topNav = context.querySelector(".top-nav");
      const toggleButton = context.querySelector(".top-nav__toggle");
      const mobileMenu = context.querySelector("#mobile-quick-nav");
      const toggleText = context.querySelector(".top-nav__toggle-text");

      if (topNav && toggleButton && mobileMenu) {
        const labels = {
          open: "Cerrar menú principal",
          closed: "Abrir menú principal",
        };

        const setState = (isOpen) => {
          toggleButton.setAttribute("aria-expanded", String(isOpen));
          toggleButton.setAttribute(
            "aria-label",
            isOpen ? labels.open : labels.closed
          );
          if (toggleText) {
            toggleText.textContent = isOpen ? labels.open : labels.closed;
          }
          topNav.classList.toggle("top-nav--menu-open", isOpen);
          mobileMenu.setAttribute("aria-hidden", isOpen ? "false" : "true");
        };

        setState(false);

        toggleButton.addEventListener("click", () => {
          const nextState =
            toggleButton.getAttribute("aria-expanded") !== "true";
          setState(nextState);
        });

        toggleButton.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            setState(false);
            toggleButton.blur();
          }
        });
      }
    },
  };
})(jQuery, Drupal, drupalSettings);

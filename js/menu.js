const hamburgerButton = document.querySelector("#hamburger-menu");
const navLinks = document.getElementById("nav-links");
hamburgerButton.addEventListener("click", () => {
  const isHidden = navLinks.classList.contains("hidden");
  if (isHidden) {
    hamburgerButton.innerHTML = "&times;";
    navLinks.classList.add(
      "flex-col",
      "absolute",
      "flex",
      "items-center",
      "w-full",
      "top-full",
      "bg-gray-800",
      "space-y-8",
      "py-6",
      "left-0",
      "md:flex",
      "z-50",
      "h-screen"
    );
    navLinks.classList.remove("hidden");
  } else {
    hamburgerButton.innerHTML = "&#9776;";
    navLinks.classList.remove(
      "flex-col",
      "absolute",
      "flex",
      "items-center",
      "w-full",
      "top-full",
      "bg-gray-800",
      "space-y-8",
      "py-6",
      "left-0",
      "md:flex",
      "z-50",
      "h-screen"
    );
    navLinks.classList.add("hidden");
  }
});

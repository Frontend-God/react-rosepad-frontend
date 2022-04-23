import { useState } from "react";

const useNav = (initialNavbarOpen: boolean) => {
  const [navbarOpen, setNavbarOpen] = useState(initialNavbarOpen);

  return [navbarOpen, setNavbarOpen] as const;
};

export default useNav;

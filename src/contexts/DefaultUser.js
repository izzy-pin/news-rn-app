import { createContext, useState } from "react";

export const DefaultUserContext = createContext();
export const ProvidedUser = ({ children }) => {
  const [user, setUser] = useState({
    username: "tickle122",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
    name: "Tom Tickle",
  });

  return (
    <DefaultUserContext.Provider value={{ user, setUser }}>
      {children}
    </DefaultUserContext.Provider>
  );
};

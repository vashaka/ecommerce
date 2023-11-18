"use client";

import { Clothe } from "@/interface";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }: any) => {
  const [clothes, setClothes] = useState([]);
  const [allClothes, setAllClothes] = useState<Clothe[]>([]);
  const [cartItems, setCartItems] = useState<Clothe[]>([]);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/clothes")
      .then((resp) => {
        setAllClothes(resp.data.allClothes);
        setClothes(resp.data.allClothes);
      })
      .catch((err) => console.log(err));

    const localData: any = localStorage.getItem("user");
    const localStorageUserData: any = JSON.parse(localData);
    setUserData(localStorageUserData);

    let localStorageItems: Clothe[] = JSON.parse(localStorage.getItem("cart"));
    if (localStorageItems) {
      setCartItems(localStorageItems);
    }

    const cartIsOpened = localStorage.getItem("open");
    if (cartIsOpened) {
      setIsCartOpen(true);
    } else {
      setIsCartOpen(false);
    }
  }, []);

  const onAddItem = (item: Clothe) => {
    setCartItems([...cartItems, item]);
    const addedItem = [...cartItems, item];
    localStorage.setItem("cart", JSON.stringify(addedItem));
  };

  const removeItem = (item: Clothe) => {
    const filteredItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    localStorage.setItem("cart", JSON.stringify(filteredItems));
  };

  // const allCookies = document.cookie;
  // console.log(allCookies);

  // useEffect(() => {
  //   if (!allCookies) {
  //     localStorage.removeItem("user");
  //   }
  // }, [allCookies]);

  return (
    <ThemeContext.Provider
      value={{
        userData,
        setUserData,
        setToken,
        onAddItem,
        cartItems,
        removeItem,
        isCartOpen,
        setIsCartOpen,
        allClothes,
        setAllClothes,
        clothes,
        setClothes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

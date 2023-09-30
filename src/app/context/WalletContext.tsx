"use client";
import { useContext, createContext, useState, useEffect } from "react";

const WalletContext = createContext({});

export const useWallet: any = () => useContext(WalletContext);

export const WalletProvider = ({ children }: any) => {
  const [currentAccount, setCurrentAccount] = useState(null);

  const connectWalletHandler = async () => {
    const { ethereum } = window as Window & { ethereum?: any };

    if (!ethereum) alert("Please install Metamask!");

    try {
      setAccount(ethereum);
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
      } else {
        setCurrentAccount(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const setAccount = async (ethereum: any) => {
    const account = await ethereum.selectedAddress;
    if (account) {
      setCurrentAccount(account);
    } else {
      setCurrentAccount(null);
    }
  };

  useEffect(() => {
    const { ethereum } = window as Window & { ethereum?: any };
    if (ethereum) {
      setAccount(ethereum);
    }
  }, []);

  const value = {
    currentAccount,
    connectWalletHandler,
  };
  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

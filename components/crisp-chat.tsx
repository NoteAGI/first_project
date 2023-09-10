"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("82b14ed3-8c6a-4886-b02e-4a282b6dc45e");
  }, []);

  return null;
};
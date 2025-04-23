import { createContext, useState, useContext } from "react";


interface ToastContextType {
    message: string,
    setMessage: (message: string) => void
}

const toastContext = createContext<ToastContextType | undefined>(undefined)
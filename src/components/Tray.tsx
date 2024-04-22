"use client";

import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";

interface TrayProps {
  setTrayOpen: (_: boolean) => void;
}

const Tray: React.FC<TrayProps> = ({ setTrayOpen }) => {
  const [content, setContent] = useState("options");

  const trayContent: Record<string, ReactNode> = {
    options: <OptionsMenu setContent={setContent} />,
    privateKey: <PrivateKey setContent={setContent} />,
    recovery: <RecoveryPhrase setContent={setContent} />,
    remove: <RemoveWallet setContent={setContent} />,
  };

  return (
    <>
      <motion.div
        className="absolute inset-0 bg-black/20"
        onClick={() => setTrayOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        className="absolute bottom-4 inset-x-0 mx-auto w-80 min-h-10 bg-yellow-400 rounded-2xl p-8 overflow-hidden"
        initial={{ y: 336 }}
        animate={{ y: 0 }}
        exit={{ y: 336 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        layout
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={content}
          layout="position"
        >
          {trayContent[content]}
        </motion.div>
      </motion.div>
    </>
  );
};

interface ContentProps {
  setContent: (_: string) => void;
}

const OptionsMenu: React.FC<ContentProps> = ({ setContent }) => {
  return (
    <div>
      <h1>Options</h1>
      <button onClick={() => setContent("privateKey")}>View Private Key</button>
      <button onClick={() => setContent("recovery")}>
        View Recovery Phrase
      </button>
      <button onClick={() => setContent("remove")}>Remove Wallet</button>
    </div>
  );
};

const PrivateKey: React.FC<ContentProps> = ({ setContent }) => {
  return (
    <div className="h-40">
      <h1>Private Key</h1>
      <button onClick={() => setContent("options")}>Cancel</button>
    </div>
  );
};

const RecoveryPhrase: React.FC<ContentProps> = ({ setContent }) => {
  return (
    <div className="h-40">
      <h1>Secret Recovery Phrase</h1>
      <button onClick={() => setContent("options")}>Cancel</button>
    </div>
  );
};

const RemoveWallet: React.FC<ContentProps> = ({ setContent }) => {
  return (
    <div className="h-28">
      <h1>Remove Wallet</h1>
      <button onClick={() => setContent("options")}>Cancel</button>
    </div>
  );
};

export default Tray;

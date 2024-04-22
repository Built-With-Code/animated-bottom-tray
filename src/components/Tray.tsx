"use client";

import { motion, useDragControls, useMotionValue } from "framer-motion";
import React, { ReactNode, useState } from "react";
import {
  OptionsMenu,
  PrivateKey,
  RecoveryPhrase,
  RemoveWallet,
} from "./tray-content";

interface TrayProps {
  closeTray: () => void;
}

const Tray: React.FC<TrayProps> = ({ closeTray }) => {
  const [content, setContent] = useState("options");

  const trayContent: Record<string, ReactNode> = {
    options: <OptionsMenu setContent={setContent} closeTray={closeTray} />,
    privateKey: <PrivateKey setContent={setContent} closeTray={closeTray} />,
    recovery: <RecoveryPhrase setContent={setContent} closeTray={closeTray} />,
    remove: <RemoveWallet setContent={setContent} closeTray={closeTray} />,
  };

  const controls = useDragControls();
  const dragY = useMotionValue(0);

  return (
    <>
      <motion.div
        className="absolute inset-0 bg-black/20"
        onClick={closeTray}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        className="absolute bottom-4 inset-x-0 mx-auto w-[22rem] min-h-10 bg-neutral-50 px-8 pb-6 overflow-hidden"
        initial={{ y: 336 }}
        animate={{ y: 0 }}
        exit={{ y: 500 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        style={{ borderRadius: 28, y: dragY }}
        layout
        drag="y"
        dragControls={controls}
        dragListener={false}
        dragConstraints={{
          top: 0,
          bottom: 0,
        }}
        dragElastic={{
          top: 0,
          bottom: 0.5,
        }}
        onDragEnd={() => {
          if (dragY.get() >= 100) {
            closeTray();
          }
        }}
      >
        <button className="my-3 mx-auto flex justify-center">
          <motion.div
            className="h-2 w-14 cursor-grab touch-none bg-gray-200 active:cursor-grabbing"
            style={{ borderRadius: 100 }}
            onPointerDown={(e) => {
              controls.start(e);
            }}
            key="drag-bar"
            layout
          />
        </button>
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

export default Tray;

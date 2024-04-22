"use client";

import Tray from "@/components/Tray";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [trayOpen, setTrayOpen] = useState(false);

  return (
    <main className="min-h-screen flex justify-center items-center">
      <Button onClick={() => setTrayOpen(true)}>Open tray</Button>
      <AnimatePresence>
        {trayOpen && <Tray closeTray={() => setTrayOpen(false)} />}
      </AnimatePresence>
    </main>
  );
}

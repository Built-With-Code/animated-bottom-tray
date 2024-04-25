import {
  Lock,
  TriangleAlert,
  FileText,
  X,
  ScanFace,
  ShieldCheck,
  Ban,
  MessageSquareText,
  Eye,
  CircleAlert,
} from "lucide-react";

import WideButton from "../WideButton";

interface ContentProps {
  setContent: (_: string) => void;
  closeTray: () => void;
}

export const OptionsMenu = ({ setContent, closeTray }: ContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center pb-6 border-b-[1px] border-neutral-100">
        <h1 className="font-medium text-lg">Options</h1>
        <button className="bg-gray-100 p-1 rounded-full" onClick={closeTray}>
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <WideButton
          variant="secondary"
          onClick={() => setContent("privateKey")}
        >
          <Lock className="h-4 w-4" /> View Private Key
        </WideButton>
        <WideButton variant="secondary" onClick={() => setContent("recovery")}>
          <FileText className="h-4 w-4" />
          View Recovery Phrase
        </WideButton>
        <WideButton variant="destructive" onClick={() => setContent("remove")}>
          <TriangleAlert className="h-4 w-4" />
          Remove Wallet
        </WideButton>
      </div>
    </div>
  );
};

export const PrivateKey = ({ setContent, closeTray }: ContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 pb-6 border-b-[1px] border-neutral-100">
        <div className="flex justify-between items-start ">
          <Eye className="h-8 w-8 text-neutral-500" />
          <button className="bg-gray-100 p-1 rounded-full" onClick={closeTray}>
            <X className="h-4 w-4" />
          </button>
        </div>
        <h1 className="font-medium text-xl">Private Key</h1>
        <p className="text-neutral-500">
          Your Private Key is the key used to back up your wallet. Keep it
          secret and secure at all times.
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex items-center gap-4 text-neutral-500 text-sm">
            <ShieldCheck className="h-5 w-5" />
            <p className="font-medium">Keep your private key safe</p>
          </div>
          <div className="flex items-center gap-4 text-neutral-500 text-sm">
            <MessageSquareText className="h-5 w-5" />
            <p className="font-medium">Don't share it with anyone else</p>
          </div>
          <div className="flex items-center gap-4 text-neutral-500 text-sm">
            <Ban className="h-5 w-5" />
            <p className="font-medium">If you lose it, we can't recover it</p>
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <WideButton
            cta
            variant="secondary"
            onClick={() => setContent("options")}
          >
            Cancel
          </WideButton>
          <WideButton cta onClick={() => setContent("options")}>
            <ScanFace className="h-4 w-4" />
            Reveal
          </WideButton>
        </div>
      </div>
    </div>
  );
};

export const RecoveryPhrase = ({ setContent, closeTray }: ContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 pb-6 border-b-[1px] border-neutral-100">
        <div className="flex justify-between items-start ">
          <Eye className="h-8 w-8 text-neutral-500" />
          <button className="bg-gray-100 p-1 rounded-full" onClick={closeTray}>
            <X className="h-4 w-4" />
          </button>
        </div>
        <h1 className="font-medium text-xl">Secret Recovery Phrase</h1>
        <p className="text-neutral-500">
          Your Secrete Recovery Phrase is used to gain access to your wallet in
          case you lose your key. Keep it secret and secure at all times.
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex items-center gap-4 text-neutral-500 text-sm">
            <ShieldCheck className="h-5 w-5" />
            <p className="font-medium">Keep your Secret Phrase safe</p>
          </div>
          <div className="flex items-center gap-4 text-neutral-500 text-sm">
            <MessageSquareText className="h-5 w-5" />
            <p className="font-medium">Don't share it with anyone else</p>
          </div>
          <div className="flex items-center gap-4 text-neutral-500 text-sm">
            <Ban className="h-5 w-5" />
            <p className="font-medium">If you lose it, we can't recover it</p>
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <WideButton
            cta
            variant="secondary"
            onClick={() => setContent("options")}
          >
            Cancel
          </WideButton>
          <WideButton cta onClick={() => setContent("options")}>
            <ScanFace className="h-4 w-4" />
            Reveal
          </WideButton>
        </div>
      </div>
    </div>
  );
};

export const RemoveWallet = ({ setContent, closeTray }: ContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start ">
          <CircleAlert className="h-8 w-8 text-red-500" />
          <button className="bg-gray-100 p-1 rounded-full" onClick={closeTray}>
            <X className="h-4 w-4" />
          </button>
        </div>
        <h1 className="font-medium text-xl">Are you sure?</h1>
        <p className="text-neutral-500">
          You haven't backed up your wallet yet. If you remove it, you could
          lose access forever. We suggest tapping and backing up your wallet
          first with a valid recovery method.
        </p>
      </div>
      <div>
        <div className="flex gap-4 w-full">
          <WideButton
            cta
            variant="secondary"
            onClick={() => setContent("options")}
          >
            Cancel
          </WideButton>
          <WideButton
            cta
            variant="destructive"
            onClick={() => setContent("options")}
          >
            Continue
          </WideButton>
        </div>
      </div>
    </div>
  );
};

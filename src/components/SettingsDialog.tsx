import React from "react";
import Button from "./Button";
import { FaKey, FaMicrochip } from "react-icons/fa";
import Dialog from "./Dialog";
import Input from "./Input";

export default function SettingsDialog({
  show,
  close,
  customApiKey,
  setCustomApiKey,
  customModelName,
  setCustomModelName,
}: {
  show: boolean;
  close: () => void;
  customApiKey: string;
  setCustomApiKey: (key: string) => void;
  customModelName: string;
  setCustomModelName: (key: string) => void;
}) {
  const [key, setKey] = React.useState<string>(customApiKey);

  const handleClose = () => {
    setKey(customApiKey);
    close();
  };

  const handleSave = () => {
    setCustomApiKey(key);
    close();
  };

  return (
    <Dialog
      header="设置 ⚙"
      isShown={show}
      close={handleClose}
      footerButton={<Button onClick={handleSave}>保存</Button>}
    >
      
      <div className="text-md relative flex-auto p-2 leading-relaxed">
        <Input
          left={
            <>
              <FaMicrochip />
              <span className="ml-2">模型类型:</span>
            </>
          }
          placeholder={"gpt-3.5-turbo"}
          value={customModelName}
          onChange={(e) => setCustomModelName(e.target.value)}
        />
        <br />
        <Input
          left={
            <>
              <FaKey />
              <span className="ml-2">Key: </span>
            </>
          }
          placeholder={"sk-..."}
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
       
      </div>
    </Dialog>
  );
}

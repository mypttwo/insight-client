import React from "react";
import EtherscanApiKeyForm from "../del/etherscanApiKeyForm";

const Settings = () => {
  return (
    <div className="container">
      <div className="h3">Settings</div>

      <EtherscanApiKeyForm></EtherscanApiKeyForm>
    </div>
  );
};

export default Settings;

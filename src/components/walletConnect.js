import React from "react";
import { connectWallet, addWalletListener } from "../utilities/metamask2";
import { getMaskedAddress } from "../utilities/shorten";
import { name } from "../utilities/chain";

class WallectConnect extends React.Component {
  state = {
    status: "",
    address: "",
    chainId: "",
  };
  componentDidMount() {
    this.connectWalletPressed();
  }
  connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    console.log(walletResponse);
    this.setWalletResponse(walletResponse);
  };

  setWalletResponse = (walletResponse) => {
    if (!walletResponse.status.includes("Error")) {
      addWalletListener(this.accountsChanged, this.chainChanged);
    }
    this.setState({
      status: walletResponse.status,
      address: walletResponse.address,
      chainId: walletResponse.chainId,
    });
  };

  accountsChanged = (address, status) => {
    this.setState({
      status: status,
      address: address,
    });
  };

  chainChanged = (chainId) => {
    this.setState({
      chainId: chainId,
    });
  };

  connectJSX = () => {
    if (this.state.address) {
      return (
        <div>
          <div className="wallet-address text-truncate btn-link">
            {getMaskedAddress(this.state.address)}
          </div>
          <div className="chainId  btn-link">{name(this.state.chainId)}</div>
        </div>
      );
    }
    return (
      <button
        type="button"
        className="btn btn-outline-info metamask"
        onClick={this.connectWalletPressed}
      >
        Connect
      </button>
    );
  };

  render() {
    return <>{this.connectJSX()}</>;
  }
}

export default WallectConnect;

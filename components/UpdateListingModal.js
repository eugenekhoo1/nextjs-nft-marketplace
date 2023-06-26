import { Modal, Input, useNotification } from "@web3uikit/core";
import { useState } from "react";
import { useWeb3Contract } from "react-moralis";
import nftMarketplaceAbi from "../constants/NftMarketplace.json";
import { ethers } from "ethers";

const UpdateListingModal = ({
  nftAddress,
  tokenId,
  isVisible,
  marketplaceAddress,
  onClose,
}) => {
  const dispatch = useNotification();

  const [priceToUpdateListingWith, setPriceToUpdateListingWith] = useState(0);

  const handleUpdateListingSuccess = async function (tx) {
    await tx.wait(1);
    dispatch({
      type: "success",
      message: "listing updated",
      title: "Listing updated - please refresh",
      position: "topR",
    });
    onClose && onClose();
    setPriceToUpdateListingWith90;
  };

  const { runContractFunction: updateListing } = useWeb3Contract({
    abi: nftMarketplaceAbi,
    contractAddress: marketplaceAddress,
    functionName: "updateListing",
    params: {
      nftAddress: nftAddress,
      tokenId: tokenId,
      newPrice: ethers.utils.parseEther(priceToUpdateListingWith || "0"),
    },
  });

  return (
    <Modal
      isVisible={isVisible}
      onCancel={onClose}
      onCloseButtonPressed={onClose}
      onOk={() => {
        updateListing({
          onError: (error) => {
            console.log(error);
          },
          onSuccess: handleUpdateListingSuccess,
        });
      }}
    >
      <Input
        label="Update listing price in ETH"
        name="New listing price"
        type="number"
        onChange={(event) => {
          setPriceToUpdateListingWith(event.target.value);
        }}
      ></Input>
    </Modal>
  );
};

export default UpdateListingModal;

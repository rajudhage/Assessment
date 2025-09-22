import React, { useState } from "react";
import { View, Button, Alert } from "react-native";
import CommonFields from "./CommonFields";

const DomesticTransferForm: React.FC = () => {
  const [recipient, setRecipient] = useState<string>("");
  const [account, setAccount] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleSend = () => {
    console.log("Domestic Transfer:", { recipient, account, amount });
    Alert.alert("Domestic Transfer Initiated!");
  };

  return (
    <View>
      <CommonFields
        recipient={recipient}
        setRecipient={setRecipient}
        account={account}
        setAccount={setAccount}
        amount={amount}
        setAmount={setAmount}
      />
      <Button title="Send Payment" onPress={handleSend} />
    </View>
  );
};

export default DomesticTransferForm;


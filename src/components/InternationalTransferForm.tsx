// components/InternationalTransferForm.tsx
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import CommonFields from "./CommonFields";

const InternationalTransferForm: React.FC = () => {
  const [recipient, setRecipient] = useState<string>("");
  const [account, setAccount] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [iban, setIban] = useState<string>("");
  const [swift, setSwift] = useState<string>("");

  const handleSend = () => {
    console.log("International Transfer:", {
      recipient,
      account,
      amount,
      iban,
      swift,
    });
    Alert.alert("International Transfer Initiated!");
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
      <TextInput
        placeholder="IBAN"
        style={styles.input}
        value={iban}
        onChangeText={setIban}
      />
      <TextInput
        placeholder="SWIFT Code"
        style={styles.input}
        value={swift}
        onChangeText={setSwift}
      />
      <Button title="Send Payment" onPress={handleSend} />
    </View>
  );
};

export default InternationalTransferForm;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
});

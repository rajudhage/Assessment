import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

type CommonFieldsProps = {
  recipient: string;
  setRecipient: (value: string) => void;
  account: string;
  setAccount: (value: string) => void;
  amount: string;
  setAmount: (value: string) => void;
};

const CommonFields: React.FC<CommonFieldsProps> = ({
  recipient,
  setRecipient,
  account,
  setAccount,
  amount,
  setAmount,
}) => {
  return (
    <View>
      <TextInput
        placeholder="Recipient Name"
        style={styles.input}
        value={recipient}
        onChangeText={setRecipient}
      />
      <TextInput
        placeholder="Account Number"
        style={styles.input}
        value={account}
        onChangeText={setAccount}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Amount"
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
    </View>
  );
};

export default CommonFields;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
});

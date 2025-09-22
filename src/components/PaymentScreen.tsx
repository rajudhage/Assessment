import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DomesticTransferForm from "./DomasticTransferForm";
import InternationalTransferForm from "./InternationalTransferForm";

type PaymentScreenProps = {
  transferType: "domestic" | "international";
};

const PaymentScreen: React.FC<PaymentScreenProps> = ({ transferType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {transferType === "domestic" ? "Domestic Transfer" : "International Transfer"}
      </Text>

      {transferType === "domestic" ? (
        <DomesticTransferForm />
      ) : (
        <InternationalTransferForm />
      )}
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
});

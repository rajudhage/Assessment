import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import PaymentScreen from "./src/components/PaymentScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <PaymentScreen transferType="domestic" />
        {/* <PaymentScreen transferType="international" /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

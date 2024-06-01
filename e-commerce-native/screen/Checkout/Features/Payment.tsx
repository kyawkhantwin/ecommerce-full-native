import React, { useState } from "react";
import { VStack, Text, Button, ButtonText, HStack } from "@gluestack-ui/themed";
import PaymentDiallog from "./PaymentDiallog";

const Payment: React.FC = () => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handlePayment = () => {
    setTimeout(() => {
      setIsPaymentSuccessful(true);
      setShowAlertDialog(true);
    }, 2000);
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <VStack space="md">
      <VStack space="md">
        <Text>Select Payment Method:</Text>
        <HStack space="md" alignSelf="center">
          <Button
            variant={paymentMethod === "credit" ? "solid" : "outline"}
            onPress={() => handlePaymentMethodChange("credit")}
          >
            <ButtonText>Credit Card</ButtonText>
          </Button>
          <Button
            variant={paymentMethod === "paypal" ? "solid" : "outline"}
            onPress={() => handlePaymentMethodChange("paypal")}
          >
            <ButtonText>PayPal</ButtonText>
          </Button>
        </HStack>
      </VStack>

      <Button onPress={handlePayment} isDisabled={paymentMethod === ""}>
        <ButtonText>{isPaymentSuccessful ? "Done" : "Pay Now"}</ButtonText>
      </Button>

      {/* Pass props to PaymentDiallog component */}
      <PaymentDiallog
        showAlertDialog={showAlertDialog}
        setShowAlertDialog={setShowAlertDialog}
        isPaymentSuccessful={isPaymentSuccessful}
        setIsPaymentSuccessful={setIsPaymentSuccessful}
      />
    </VStack>
  );
};

export default Payment;

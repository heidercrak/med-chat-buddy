
import React from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { getWarningMessage } from '../data/medicationsDB';

const DisclaimerBanner: React.FC = () => {
  return (
    <Alert className="bg-medicalBlue-light border-warning mb-4">
      <AlertCircle className="h-4 w-4 text-warning" />
      <AlertDescription className="text-sm text-gray-700">
        {getWarningMessage()}
      </AlertDescription>
    </Alert>
  );
};

export default DisclaimerBanner;

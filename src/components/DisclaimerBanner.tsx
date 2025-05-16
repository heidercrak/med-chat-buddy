
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
        <div className="mt-1 text-xs text-gray-500">
          Información basada en fuentes médicas como MedlinePlus, FDA, CDC y OMS.
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default DisclaimerBanner;

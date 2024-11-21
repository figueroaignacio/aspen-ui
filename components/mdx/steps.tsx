import React from "react";

interface StepperProps {
  children: React.ReactNode;
}

export const Steps: React.FC<StepperProps> = ({ children }) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};

interface StepProps {
  children: React.ReactNode;
  stepNumber: number;
  isLastStep?: boolean;
}

export const Step: React.FC<StepProps> = ({
  children,
  stepNumber,
  isLastStep,
}) => {
  return (
    <div className="relative flex items-start">
      <div className="flex-shrink-0 w-8 h-8 bg-primary-foreground rounded-md rounded-full flex items-center justify-center font-bold">
        {stepNumber}
      </div>
      {!isLastStep && (
        <div className="absolute top-8 left-4 w-px h-full bg-border"></div>
      )}
      <div className="ml-4 w-full">{children}</div>
    </div>
  );
};

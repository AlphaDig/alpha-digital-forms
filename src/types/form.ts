export interface ServiceReportFormData {
  customer: string;
  address: string;
  contactPerson: string;
  email: string;
  telephone: string;
  faultComplaint: string;
  serviceTrainingReport: string;
  serviceType: string[];
  serviceStatus: string[];
  serviceCharge: string;
  remarks: string;
  signature: string;
  coordinates: string;
  personInCharge: string;
}

export interface FileUploadProps {
  onFilesChange?: (files: File[]) => void;
}

export interface SignaturePadProps {
  onSave: (signature: string) => void;
}

export interface LocationCoordinatesProps {
  onCoordinatesChange: (coordinates: string) => void;
}
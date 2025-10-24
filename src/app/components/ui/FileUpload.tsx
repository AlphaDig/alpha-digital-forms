'use client';

import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { Upload } from 'lucide-react';
import { FileUploadProps } from '@/types/form';

export default function FileUpload({ onFilesChange }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (selectedFiles: FileList | File[]) => {
    const newFiles = Array.from(selectedFiles);
    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      handleFileChange(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFileChange(e.target.files);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded p-4">
      <div
        className={`text-center ${isDragging ? 'bg-blue-50' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <Upload className="mx-auto h-8 w-8 text-gray-400" />
        <p className="mt-1 text-sm text-gray-600">
          Drop files here to upload
        </p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleInputChange}
          className="hidden"
        />
        <div className="mt-2 text-xs text-gray-500">
          No file chosen
        </div>
      </div>
    </div>
  );
}
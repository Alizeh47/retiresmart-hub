'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Aldrich, Roboto_Flex, Newsreader, Playfair_Display, Indie_Flower, Lora } from 'next/font/google';
import { 
  CloudArrowUpIcon, 
  DocumentIcon, 
  PhotoIcon, 
  TableCellsIcon, 
  DocumentTextIcon,
  TrashIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  DocumentDuplicateIcon,
  PlusIcon
} from '@heroicons/react/24/outline';

const aldrich = Aldrich({
  weight: '400',
  subsets: ['latin'],
});

const robotoFlex = Roboto_Flex({
  weight: '300',
  subsets: ['latin'],
});

const newsreaderItalic = Newsreader({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

// Sample file types
const allowedFileTypes = [
  { type: 'PDF Documents', extensions: '.pdf', icon: <DocumentIcon className="w-8 h-8 text-[#40A69F]" /> },
  { type: 'Images', extensions: '.jpg, .png, .gif', icon: <PhotoIcon className="w-8 h-8 text-[#40A69F]" /> },
  { type: 'Spreadsheets', extensions: '.xlsx, .csv', icon: <TableCellsIcon className="w-8 h-8 text-[#40A69F]" /> },
  { type: 'Text Documents', extensions: '.docx, .txt', icon: <DocumentTextIcon className="w-8 h-8 text-[#40A69F]" /> },
];

export default function UploadFilesPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              SECURE
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>Document Upload</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              PORTAL
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className={`${playfair.className} text-7xl font-semibold tracking-tight text-gray-900 mb-6`}>
              Upload Your
              <span className="block text-[#40A69F]">Documents Securely</span>
            </h1>
            <p className={`${robotoFlex.className} text-xl text-gray-600 max-w-3xl mx-auto mb-4`}>
              Share sensitive financial documents with our team through our encrypted portal.
            </p>
            <p className={`${newsreaderItalic.className} text-2xl text-gray-500 max-w-2xl mx-auto`}>
              "Your security is our priority. All files are encrypted and transmitted securely."
            </p>
          </div>

          {/* Upload Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div 
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
                isDragging ? 'border-[#40A69F] bg-[#E8F4F1]' : 'border-gray-300 hover:border-[#40A69F]'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={triggerFileInput}
            >
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              
              <div className="mb-6">
                <CloudArrowUpIcon className="w-20 h-20 mx-auto text-gray-400" />
              </div>
              
              <h3 className={`${lora.className} text-xl font-semibold text-gray-700 mb-2`}>
                Drag and drop files here
              </h3>
              <p className={`${robotoFlex.className} text-gray-500 mb-4`}>
                or <span className="text-[#40A69F] font-medium cursor-pointer">browse your computer</span>
              </p>
              <p className={`${robotoFlex.className} text-sm text-gray-400`}>
                Maximum file size: 25MB
              </p>
            </div>

            {/* Allowed File Types */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h4 className={`${lora.className} text-lg font-medium text-gray-700 mb-4`}>
                Accepted File Types
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allowedFileTypes.map((fileType, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
                    <div className="flex-shrink-0">
                      {fileType.icon}
                    </div>
                    <div>
                      <p className={`${robotoFlex.className} font-medium text-gray-700`}>{fileType.type}</p>
                      <p className={`${robotoFlex.className} text-sm text-gray-500`}>{fileType.extensions}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Files List */}
          {files.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <h3 className={`${lora.className} text-2xl font-semibold text-gray-800 mb-6`}>
                Uploaded Files ({files.length})
              </h3>
              
              <div className="space-y-4 mb-8">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#E8F4F1] flex items-center justify-center">
                        <DocumentDuplicateIcon className="w-5 h-5 text-[#40A69F]" />
                      </div>
                      <div>
                        <p className={`${robotoFlex.className} font-medium text-gray-800 truncate max-w-xs`}>{file.name}</p>
                        <p className={`${robotoFlex.className} text-sm text-gray-500`}>{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(index);
                      }}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <button 
                  onClick={triggerFileInput}
                  className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <PlusIcon className="w-5 h-5" />
                  <span className={`${robotoFlex.className} font-medium`}>Add More Files</span>
                </button>
                
                <button className="px-6 py-3 bg-[#40A69F] rounded-lg text-white hover:bg-[#2C7A75] transition-colors flex items-center space-x-2">
                  <CloudArrowUpIcon className="w-5 h-5" />
                  <span className={`${robotoFlex.className} font-medium`}>Upload Files</span>
                </button>
              </div>
            </div>
          )}

          {/* Security Information */}
          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-[#E8F4F1] to-white rounded-xl p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <LockClosedIcon className="w-12 h-12 text-[#40A69F]" />
              </div>
              <div>
                <h3 className={`${lora.className} text-xl font-semibold text-gray-800 mb-2`}>
                  Your Files Are Secure
                </h3>
                <p className={`${robotoFlex.className} text-gray-600 mb-4`}>
                  All files are encrypted using AES-256 encryption and transmitted over a secure SSL connection. Your documents are only accessible to your designated financial advisor.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <ShieldCheckIcon className="w-5 h-5 text-[#40A69F]" />
                    <span className={`${robotoFlex.className} text-sm text-gray-600`}>End-to-end encryption</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ShieldCheckIcon className="w-5 h-5 text-[#40A69F]" />
                    <span className={`${robotoFlex.className} text-sm text-gray-600`}>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ShieldCheckIcon className="w-5 h-5 text-[#40A69F]" />
                    <span className={`${robotoFlex.className} text-sm text-gray-600`}>Automatic file deletion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(64, 166, 159, 0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Animated Circles */}
            <circle cx="10%" cy="20%" r="5" fill="#40A69F" opacity="0.2" className="animate-pulse-slow">
            </circle>
            <circle cx="90%" cy="60%" r="8" fill="#40A69F" opacity="0.2" className="animate-pulse-medium">
            </circle>
            
            {/* Decorative Lines */}
            <path
              d="M0,100 Q300,150 600,100 T1200,100"
              fill="none"
              stroke="#40A69F"
              strokeWidth="1"
              opacity="0.1"
              className="chart-line"
            >
            </path>
            
            {/* Document Icons */}
            <g transform="translate(100, 300)" opacity="0.1" fill="#40A69F" className="animate-float-slow">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v5a2 2 0 0 0 2 2h5v9H6z"/>
            </g>
            <g transform="translate(1000, 200)" opacity="0.1" fill="#40A69F" className="animate-float-medium">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v5a2 2 0 0 0 2 2h5v9H6z"/>
            </g>
            <g transform="translate(200, 600)" opacity="0.1" fill="#40A69F" className="animate-float-fast">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v5a2 2 0 0 0 2 2h5v9H6z"/>
            </g>
          </svg>
        </div>
      </section>
    </main>
  );
} 
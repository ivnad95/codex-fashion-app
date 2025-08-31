import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ImageContextType = {
  modelImage: string | null;
  clothingImage: string | null;
  setModelImage: (uri: string | null) => void;
  setClothingImage: (uri: string | null) => void;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export function ImageProvider({ children }: { children: ReactNode }) {
  const [modelImage, setModelImage] = useState<string | null>(null);
  const [clothingImage, setClothingImage] = useState<string | null>(null);

  return (
    <ImageContext.Provider value={{ modelImage, setModelImage, clothingImage, setClothingImage }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImageContext() {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
}

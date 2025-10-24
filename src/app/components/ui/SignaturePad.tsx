"use client";

import { useRef, useState, useEffect } from "react";
import { SignaturePadProps } from "@/types/form";

export default function SimpleSignaturePad({ onSave }: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Set styles
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const getMousePos = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const startDrawing = (e: React.MouseEvent) => {
    const pos = getMousePos(e);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      setIsDrawing(true);
    }
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return;

    const pos = getMousePos(e);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (ctx) {
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (canvas) {
      const dataURL = canvas.toDataURL();
      console.log("Signature captured:", {
        length: dataURL.length,
        isValid: dataURL.startsWith('data:image/')
      });
      onSave(dataURL);
    }
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (canvas && ctx) {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      onSave("");
    }
  };

  return (
    <div className="space-y-3">
      <div className="border-2 border-gray-300 rounded-lg bg-white p-1">
        <canvas
          ref={canvasRef}
          className="block w-full h-[150px] cursor-crosshair rounded bg-white"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={clearSignature}
          className="px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600"
        >
          Clear Signature
        </button>
        
        <span className="text-xs text-gray-500">
          Click and drag to sign
        </span>
      </div>
    </div>
  );
}
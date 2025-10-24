export default function IkanBakarPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Restaurant Structure Image */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <img 
            src="/placeholder-ikan-bakar-structure.png" 
            alt="Ikan Bakar Restaurant Structure"
            className="mx-auto max-w-full h-auto"
          />
        </div>
      </div>

      {/* Specialties Image */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="text-center">
          <img 
            src="/placeholder-specialize.png" 
            alt="Ikan Bakar Specialties"
            className="mx-auto max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
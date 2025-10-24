// In your src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Alpha Digital Company
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <Link
            href="/forms/service-report"
            className="inline-block bg-blue-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Create Service Report
          </Link>
          
          <Link
            href="/forms/pos-system"
            className="inline-block bg-green-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            View POS Systems
          </Link>

          <Link
            href="/forms/enquiry"
            className="inline-block bg-purple-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Make an Enquiry
          </Link>

          <Link
            href="/forms/turnstile-system"
            className="inline-block bg-orange-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Turnstile Systems
          </Link>
          <Link
            href="/forms/adpos-enquiry"
            className="inline-block bg-orange-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            adpos enquiry
          </Link>
          <Link
            href="/forms/form"
            className="inline-block bg-orange-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            form
          </Link>
          <Link
            href="/forms/ikan-bakar-form"
            className="inline-block bg-orange-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            ikan bakar form
          </Link>
          <Link
            href="/forms/alphadigital-form"
            className="inline-block bg-orange-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            alpha digitalform
          </Link>
        </div>
      </div>
    </div>
  );
}
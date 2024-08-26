import Head from 'next/head';
import SpreadsheetGrid from '../components/SpreadsheetGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <Head>
        <title>Spreadsheet App</title>
      </Head>
      <main className="container mx-auto">
        <h1 className="text-2xl font-bold mb-5">Spreadsheet App</h1>
        <SpreadsheetGrid />
      </main>
    </div>
  );
}

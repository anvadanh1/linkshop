'use client';

import { useState } from 'react';
import VideoUploader from '@/components/VideoUploader';
import VideoSearch from '@/components/VideoSearch';
import DownloadHistory from '@/components/DownloadHistory';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'upload' | 'search' | 'history'>('upload');

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            🎬 TikTok Video Downloader
          </h1>
          <p className="text-xl text-gray-600">
            Download your TikTok videos in HD without watermark
          </p>
          <div className="mt-4 text-sm text-red-600 bg-red-50 p-4 rounded-lg inline-block max-w-2xl">
            ⚠️ <strong>Disclaimer:</strong> Only download videos you own or have permission to download.
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'upload'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            📤 Upload Videos
          </button>
          <button
            onClick={() => setActiveTab('search')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'search'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            🔍 Search TikTok
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'history'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            📋 History
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          {activeTab === 'upload' && <VideoUploader />}
          {activeTab === 'search' && <VideoSearch />}
          {activeTab === 'history' && <DownloadHistory />}
        </div>
      </div>
    </main>
  );
}
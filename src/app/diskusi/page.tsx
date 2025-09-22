"use client";
import { useState } from "react";
import { Header } from "./components/header";
import { DiscussionList } from "./components/discussion-list";
import { Sidebar } from "./components/sidebar";

export default function HomePage() {
  const [search, setSearch] = useState("");
  return (
    <div className="min-h-screen bg-gray-50">
      <Header search={search} setSearch={setSearch} />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <DiscussionList search={search} />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}


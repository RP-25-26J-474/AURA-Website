import { Routes, Route, Navigate } from "react-router-dom";
import DocsSidebar from "./DocsSidebar";
import DocsContent from "./DocsContent";

export default function DocsLayout() {
  return (
    <div className="min-h-screen flex bg-base-100">
      <DocsSidebar />
      <div className="flex-1 min-w-0 py-10 px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl mx-auto">
          <Routes>
            <Route path="" element={<Navigate to="getting-started" replace />} />
            <Route path="*" element={<DocsContent />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

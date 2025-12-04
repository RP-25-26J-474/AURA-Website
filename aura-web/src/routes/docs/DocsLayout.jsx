import { Routes, Route, Navigate } from "react-router-dom";
import DocsSidebar from "./DocsSidebar";
import DocsContent from "./DocsContent";

export default function DocsLayout() {
  return (
    <div className="min-h-screen flex">
      <DocsSidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="" element={<Navigate to="getting-started" replace />} />
          <Route path=":slug" element={<DocsContent />} />
        </Routes>
      </div>
    </div>
  );
}

import { useState } from "react";
import UploadDocumentCard from "./components/UploadDocumentCard";
import DiagramCard from "./components/DiagramCard";

export default function MyDocuments() {
  const [documents, setDocuments] = useState([
    { id: 1, title: "Cahier de charge", name: "Fouad", fileData: null },
    { id: 2, title: "Rapport d’analyse", name: "Fouad", fileData: null },
    { id: 3, title: "Rapport d’architecture", name: "Fouad", fileData: null },
  ]);

  const handleUpload = (id, file) => {
    setDocuments((prevDocs) =>
      prevDocs.map((doc) =>
        doc.id === id
          ? {
              ...doc,
              fileData: {
                name: file.name,
                size: `${(file.size / 1024).toFixed(2)} KB`,
                rawFile: file,
              },
            }
          : doc
      )
    );
  };

  const handleDelete = (id) => {
    setDocuments((prevDocs) =>
      prevDocs.map((doc) => (doc.id === id ? { ...doc, fileData: null } : doc))
    );
  };

  const handleDownload = (file) => {
    alert(`Downloading ${file.name}...`);
  };

  const handleRead = (file) => {
    alert(`Reading ${file.name} content...`);
  };

  return (
    <div className="flex flex-col gap-6 p-12 font-roboto">
      <h2 className="text-3xl font-semibold">My Documents</h2>
      <p className="text-lg">Place each document in its designated location</p>

      <section className="mb-8">
        <h3 className="text-[#0A7477] text-xl font-bold mb-8">
          Analyse documents
        </h3>
        <div className="ml-8 flex gap-8 flex-wrap">
          {documents.map((doc) => (
            <UploadDocumentCard
              key={doc.id}
              id={doc.id}
              title={doc.title}
              name={doc.name}
              fileData={doc.fileData}
              onUpload={handleUpload}
              onDelete={handleDelete}
              onDownload={handleDownload}
              onRead={handleRead}
            />
          ))}
        </div>
      </section>
      <section className="mb-8">
          <h3 className="text-[#0A7477] text-xl font-bold mb-8">Diagrams</h3>
        <div className="ml-8 flex gap-8 flex-wrap">
          <DiagramCard
            title="Use Case Diagram"
            filesNumber={3}
            lastUpdate="2 days"
          />
          <DiagramCard
            title="Class Diagram"
            filesNumber={2}
            lastUpdate="1 day"
          />
          <DiagramCard
            title="Sequence Diagram"
            filesNumber={1}
            lastUpdate="3 days"
          />
        </div>
      </section>

      <section className="mb-8">
          <h3 className="text-[#0A7477] text-xl font-bold mb-8">interfaces</h3>
        <div className="ml-8 flex gap-8 flex-wrap">
          <DiagramCard
            title="Use Case Diagram"
            filesNumber={3}
            lastUpdate="2 days"
          />
          <DiagramCard
            title="Class Diagram"
            filesNumber={2}
            lastUpdate="1 day"
          />
          <DiagramCard
            title="Sequence Diagram"
            filesNumber={1}
            lastUpdate="3 days"
          />
        </div>
      </section>
    
    </div>
  );
}

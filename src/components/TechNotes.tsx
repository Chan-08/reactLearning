import React from "react";

type TechNotesProps = {
  title: string;
  react: string[];
  details?: string | string[];
  docsLink?: string;
  defaultOpen?: boolean;
};

export default function TechNotes({ title, react, details, docsLink, defaultOpen = false }: TechNotesProps) {
  const [open, setOpen] = React.useState<boolean>(defaultOpen);

  const detailsArray = typeof details === 'string' ? [details] : (details || []);

  return (
    <div style={{ padding: 12, border: '1px solid #ddd', borderRadius: 8, marginTop: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <strong>{title}</strong>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {detailsArray.length > 0 && (
            <button onClick={() => setOpen(o => !o)} style={{ padding: '4px 8px', border: '1px solid #ccc', borderRadius: 6, background: open ? '#f3f4f6' : '#fff', cursor: 'pointer' }}>
              {open ? 'Hide details' : 'How it works'}
            </button>
          )}
          {docsLink && (
            <a href={docsLink} target="_blank" rel="noreferrer" style={{ fontSize: 12 }}>Docs</a>
          )}
        </div>
      </div>
      <div><em>React</em>: {react.join(', ')}</div>
      {open && detailsArray.length > 0 && (
        <div style={{ marginTop: 8, lineHeight: 1.5 }}>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {detailsArray.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}



"use client";

import { useEffect } from "react";

export function PipedriveContactForm() {
  useEffect(() => {
    // Load the Pipedrive webforms script
    const script = document.createElement("script");
    script.src = "https://webforms.pipedrive.com/f/loader";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="pipedriveWebForms"
      data-pd-webforms="https://webforms.pipedrive.com/f/c531OInjeInGQFqqA55PfWd93uey0MBqWkiDtCzavRbp9CGDxQxEpIKOP7W0YGLztV"
    />
  );
}

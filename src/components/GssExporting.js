import React from 'react';
import useGoogleSheets from 'use-google-sheets';

export default function GssExporting() {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  const arrayGssData = Array.from(data);

  return arrayGssData;
}

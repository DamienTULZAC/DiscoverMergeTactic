import "./style/Loader.css";
import React from 'react';

export default function Loader() {
    return (
      <div className="loader-container">
        <div className="spinner" />
        <p className="text-light mt-2">Chargement...</p>
      </div>
    );
}
  
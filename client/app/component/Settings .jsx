'use client'
import React, { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    theme: "Light",
    notifications: true,
    language: "English",
  });

  return (
    <div id="settings" className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="mb-4">
        <label className="block font-medium mb-1">Theme:</label>
        <select
          className="w-full border border-gray-300 rounded-md p-2"
          value={settings.theme}
          onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
        >
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Notifications:</label>
        <input
          type="checkbox"
          checked={settings.notifications}
          onChange={() =>
            setSettings({ ...settings, notifications: !settings.notifications })
          }
          className="h-4 w-4"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Language:</label>
        <select
          className="w-full border border-gray-300 rounded-md p-2"
          value={settings.language}
          onChange={(e) =>
            setSettings({ ...settings, language: e.target.value })
          }
        >
          <option value="English">English</option>
          <option value="Bangla">Bangla</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;

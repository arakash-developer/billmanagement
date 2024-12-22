'use client';
import React, { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    theme: "Light",
    notifications: true,
    language: "English",
  });

  const resetSettings = () => {
    setSettings({
      theme: "Light",
      notifications: true,
      language: "English",
    });
  };

  return (
    <div
      id="settings"
      className="w-full bg-white p-6 rounded-lg shadow-lg mt-10"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Settings
      </h2>

      {/* Theme Selection */}
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">
          Theme:
          <span
            className="ml-2 text-gray-400 text-sm"
            title="Select a light or dark theme for the app"
          >
            (Choose your preference)
          </span>
        </label>
        <select
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
          value={settings.theme}
          onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
        >
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>

      {/* Language Selection */}
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">
          Language:
          <span
            className="ml-2 text-gray-400 text-sm"
            title="Select your preferred language"
          >
            (Available options)
          </span>
        </label>
        <select
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
          value={settings.language}
          onChange={(e) =>
            setSettings({ ...settings, language: e.target.value })
          }
        >
          <option value="English">English</option>
          <option value="Bangla">Bangla</option>
        </select>
      </div>

      {/* Notifications Toggle */}
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">
          Notifications:
        </label>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={() =>
              setSettings({
                ...settings,
                notifications: !settings.notifications,
              })
            }
            className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-400"
          />
          <span className="ml-3 text-gray-600">
            {settings.notifications
              ? "Enabled (You'll receive notifications)"
              : "Disabled (No notifications)"}
          </span>
        </div>
      </div>

      {/* Privacy Policy Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Privacy & Policy
        </h3>
        <p className="text-base text-gray-700">
          We respect your privacy and will never share your information with
          third parties.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          By using our service, you agree to our{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline"
            aria-label="Read our Terms of Service"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline"
            aria-label="Read our Privacy Policy"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>

      {/* Reset Button */}
      <div className="mt-6 ">
        <button
          onClick={resetSettings}
          className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 focus:ring-2 focus:ring-red-300 transition"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
};

export default Settings;

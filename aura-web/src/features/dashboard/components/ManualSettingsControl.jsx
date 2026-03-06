import React, { useState } from 'react';
import { FiSettings, FiCpu, FiEye, FiSun, FiMoon } from 'react-icons/fi';
import { useSettings } from '../contexts/SettingsContext';
import { submitFeedback, updateManualSettings } from '../services/api';

function ManualSettingsControl({ userId, onSettingChange }) {
  const { settings, updateSetting, isPreviewEnabled, setIsPreviewEnabled } = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleManualChange = async (parameter, newValue) => {
    const oldValue = settings[parameter];

    if (oldValue === newValue) {
      console.log('[ManualSettings] No change detected');
      return;
    }

    setIsSaving(true);

    try {
      // Update UI immediately
      updateSetting(parameter, newValue);

      const nextSettings = {
        ...settings,
        [parameter]: newValue
      };

      await updateManualSettings(userId, {
        enabled: true,
        font_size: nextSettings.font_size,
        line_height: nextSettings.line_height,
        contrast_mode: nextSettings.contrast_mode,
        element_spacing: nextSettings.element_spacing,
        target_size: nextSettings.target_size,
        theme: nextSettings.theme,
        reduced_motion: nextSettings.reduced_motion ?? false,
        tooltip_assist: nextSettings.tooltip_assist ?? false,
        layout_simplification: nextSettings.layout_simplification ?? false,
        primary_color: nextSettings.primary_color,
        secondary_color: nextSettings.secondary_color,
        accent_color: nextSettings.accent_color
      });

      // Send to backend as implicit positive feedback
      // User manually chose this value = they want it = positive feedback
      const feedbackData = {
        parameter: parameter,
        currentValue: oldValue,
        feedback: {
          type: 'positive',
          rating: 5, // Manual selection = strong positive signal
          comment: `User manually changed ${parameter} from ${oldValue} to ${newValue}`,
          accepted: true,
          responseTime: 0,
          isManualSelection: true // Flag to indicate this was a manual choice
        },
        context: {
          deviceType: getDeviceType(),
          timeOfDay: getTimeOfDay(),
          sessionDuration: 60000,
          interactionCount: 1,
          pageUrl: window.location.href,
          source: 'manual_control'
        },
        optimization: {
          parameter: parameter,
          oldValue: oldValue,
          newValue: newValue,
          suggestedBy: 'user_manual'
        }
      };

      console.log('[ManualSettings] Sending manual change as positive feedback to RL:', feedbackData);
      const result = await submitFeedback(userId, feedbackData);
      console.log('[ManualSettings] RL model learned from manual change:', result);

      if (onSettingChange) {
        onSettingChange({ parameter, oldValue, newValue });
      }
    } catch (error) {
      console.error('[ManualSettings] Error sending manual change to RL:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const getDeviceType = () => {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  };

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 6) return 'night';
    if (hour < 12) return 'morning';
    if (hour < 18) return 'afternoon';
    if (hour < 22) return 'evening';
    return 'night';
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-secondary gap-2"
      >
        <FiSettings /> Manual Settings
      </button>

      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box max-w-3xl">
            <h3 className="font-bold text-2xl mb-4 flex items-center gap-2"><FiSettings /> Manual Settings Control</h3>
            <p className="text-sm opacity-70 mb-6">
              Your manual changes help train the RL model. Each selection teaches the AI your preferences.
            </p>

            {/* Global Preview Toggle */}
            <div className="form-control mb-6 bg-base-200 p-4 rounded-lg">
              <label className="label cursor-pointer">
                <div className="flex flex-col">
                  <span className="label-text font-bold text-lg flex items-center gap-2"><FiEye /> Preview on Dashboard</span>
                  <span className="label-text-alt text-xs mt-1">If disabled, changes connect to client but won't affect this dashboard</span>
                </div>
                <input
                  type="checkbox"
                  className="toggle toggle-success toggle-lg"
                  checked={isPreviewEnabled}
                  onChange={(e) => setIsPreviewEnabled(e.target.checked)}
                />
              </label>
            </div>

            <div className="space-y-6">
              {/* Font Size */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Font Size</span>
                  <span className="label-text-alt">Current: {settings.font_size}</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  value={settings.font_size}
                  onChange={(e) => handleManualChange('font_size', e.target.value)}
                  disabled={isSaving}
                >
                  <option value={14}>Small (14px)</option>
                  <option value={16}>Medium (16px)</option>
                  <option value={18}>Large (18px)</option>
                  <option value={20}>X-Large (20px)</option>
                </select>
              </div>

              {/* Target Size */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Button Size</span>
                  <span className="label-text-alt">Current: {settings.target_size}px</span>
                </label>
                <input
                  type="range"
                  min="24"
                  max="48"
                  step="4"
                  value={settings.target_size}
                  onChange={(e) => handleManualChange('target_size', Number(e.target.value))}
                  className="range range-primary"
                  disabled={isSaving}
                />
                <div className="w-full flex justify-between text-xs px-2 mt-2">
                  <span>24px</span>
                  <span>32px</span>
                  <span>40px</span>
                  <span>48px</span>
                </div>
              </div>

              {/* Line Height */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Line Height</span>
                  <span className="label-text-alt">Current: {settings.line_height}</span>
                </label>
                <input
                  type="range"
                  min="1.2"
                  max="2.0"
                  step="0.1"
                  value={settings.line_height}
                  onChange={(e) => handleManualChange('line_height', Number(e.target.value))}
                  className="range range-primary"
                  disabled={isSaving}
                />
                <div className="w-full flex justify-between text-xs px-2 mt-2">
                  <span>1.2</span>
                  <span>1.5</span>
                  <span>1.8</span>
                  <span>2.0</span>
                </div>
              </div>

              {/* Theme */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Theme</span>
                  <span className="label-text-alt">Current: {settings.theme}</span>
                </label>
                <div className="join w-full">
                  <button
                    className={`btn join-item flex-1 ${settings.theme === 'light' ? 'btn-active' : 'btn-outline'}`}
                    onClick={() => handleManualChange('theme', 'light')}
                    disabled={isSaving}
                  >
                    <FiSun /> Light
                  </button>
                  <button
                    className={`btn join-item flex-1 ${settings.theme === 'dark' ? 'btn-active' : 'btn-outline'}`}
                    onClick={() => handleManualChange('theme', 'dark')}
                    disabled={isSaving}
                  >
                    <FiMoon /> Dark
                  </button>
                </div>
              </div>

              {/* Contrast Mode */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Contrast Mode</span>
                  <span className="label-text-alt">Current: {settings.contrast_mode}</span>
                </label>
                <div className="join w-full">
                  <button
                    className={`btn join-item flex-1 ${settings.contrast_mode === 'normal' ? 'btn-active' : 'btn-outline'}`}
                    onClick={() => handleManualChange('contrast_mode', 'normal')}
                    disabled={isSaving}
                  >
                    Normal
                  </button>
                  <button
                    className={`btn join-item flex-1 ${settings.contrast_mode === 'high' ? 'btn-active' : 'btn-outline'}`}
                    onClick={() => handleManualChange('contrast_mode', 'high')}
                    disabled={isSaving}
                  >
                    High
                  </button>
                </div>
              </div>

              {/* Element Spacing */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Element Spacing</span>
                  <span className="label-text-alt">Current: {settings.element_spacing}</span>
                </label>
                <div className="join w-full">
                  <button
                    className={`btn join-item flex-1 ${settings.element_spacing === 'compact' ? 'btn-active' : 'btn-outline'}`}
                    onClick={() => handleManualChange('element_spacing', 'compact')}
                    disabled={isSaving}
                  >
                    Compact
                  </button>
                  <button
                    className={`btn join-item flex-1 ${settings.element_spacing === 'normal' ? 'btn-active' : 'btn-outline'}`}
                    onClick={() => handleManualChange('element_spacing', 'normal')}
                    disabled={isSaving}
                  >
                    Normal
                  </button>
                  <button
                    className={`btn join-item flex-1 ${settings.element_spacing === 'spacious' ? 'btn-active' : 'btn-outline'}`}
                    onClick={() => handleManualChange('element_spacing', 'spacious')}
                    disabled={isSaving}
                  >
                    Spacious
                  </button>
                </div>
              </div>

              {/* Accessibility Section */}
              <div className="divider text-sm font-bold opacity-50">ACCESSIBILITY</div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text font-semibold">Reduced Motion</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    checked={settings.reduced_motion || false}
                    onChange={(e) => handleManualChange('reduced_motion', e.target.checked)}
                    disabled={isSaving}
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text font-semibold">Tooltip Assist</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    checked={settings.tooltip_assist || false}
                    onChange={(e) => handleManualChange('tooltip_assist', e.target.checked)}
                    disabled={isSaving}
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text font-semibold">Layout Simplification</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    checked={settings.layout_simplification || false}
                    onChange={(e) => handleManualChange('layout_simplification', e.target.checked)}
                    disabled={isSaving}
                  />
                </label>
              </div>

              {/* Branding Section */}
              <div className="divider text-sm font-bold opacity-50">BRANDING COLORS</div>

              <div className="grid grid-cols-3 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xs">Primary</span>
                  </label>
                  <input
                    type="color"
                    className="h-10 w-full cursor-pointer rounded-lg border border-base-300"
                    value={settings.primary_color || '#007bff'}
                    onChange={(e) => handleManualChange('primary_color', e.target.value)}
                    disabled={isSaving}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xs">Secondary</span>
                  </label>
                  <input
                    type="color"
                    className="h-10 w-full cursor-pointer rounded-lg border border-base-300"
                    value={settings.secondary_color || '#6c757d'}
                    onChange={(e) => handleManualChange('secondary_color', e.target.value)}
                    disabled={isSaving}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xs">Accent</span>
                  </label>
                  <input
                    type="color"
                    className="h-10 w-full cursor-pointer rounded-lg border border-base-300"
                    value={settings.accent_color || '#28a745'}
                    onChange={(e) => handleManualChange('accent_color', e.target.value)}
                    disabled={isSaving}
                  />
                </div>
              </div>

              {/* Info Alert */}
              <div className="alert alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="flex items-center gap-2"><FiCpu /> The RL model learns from your manual choices as strong positive feedback.</span>
              </div>
            </div>

            <div className="modal-action">
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-primary"
                disabled={isSaving}
              >
                {isSaving ? 'Saving...' : 'Done'}
              </button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => !isSaving && setIsOpen(false)}></div>
        </div>
      )}
    </>
  );
}

export default ManualSettingsControl;

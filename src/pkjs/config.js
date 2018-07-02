module.exports = [
  {
    "type": "heading",
    "defaultValue": "Miami Nights Extended Config"
  },
  {
    "type": "text",
    "defaultValue": "made with <3"
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Bluetooth"
      },
      {
        "type": "toggle",
        "messageKey": "Bluetooth",
        "defaultValue": true,
        "label": "Connection Notification",
        "description" : "Vibrate when bluetooth connects (long pulse) or disconnects (double pulse)."
      },
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Hours Display"
      },
      {
        "type": "toggle",
        "messageKey": "LeadingZero",
        "defaultValue": true,
        "label": "Show Leading Zero",
        "description" : "Show the leading zero for hours with single digits."
      },
      {
        "type": "toggle",
        "messageKey": "LeftAlign",
        "defaultValue": false,
        "label": "Left Align Hour",
        "description" : "Left align single digit hours."
      },
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Battery Display"
      },
      {
        "type": "toggle",
        "messageKey": "ShowBattery",
        "defaultValue": true,
        "label": "Show Battery percentage",
        "description" : "Show the current battery percentage (~~~ if charging)."
      },
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Date Format"
      },
      {
        "type": "radiogroup",
        "messageKey": "DateFormat",
        "defaultValue": "MMDD",
        "label": "Date Format",
        "options": [
          {
            "label":"MMDD",
            "value":"MMDD",
          },
          {
            "label":"MM/DD",
            "value":"MMDDS",
          },
          {
            "label":"DDMM",
            "value":"DDMM",
          },
          {
            "label":"DD/MM",
            "value":"DDMMS",
          },
          {
            "label":"Disabled",
            "value":"OFF",
          },
        ]
      },
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Colors"
      },
      {
        "type": "color",
        "messageKey": "HoursColor",
        "defaultValue": "00FFFF",
        "label": "Hours"
      },
      {
        "type": "color",
        "messageKey": "MinutesColor",
        "defaultValue": "FF00FF",
        "label": "Minutes"
      },
      {
        "type": "color",
        "messageKey": "DayColor",
        "defaultValue": "00FF55",
        "label": "Day Name"
      },
      {
        "type": "color",
        "messageKey": "DateColor",
        "defaultValue": "00FF55",
        "label": "Date"
      },
      {
        "type": "color",
        "messageKey": "BackgroundColor",
        "defaultValue": "000000",
        "label": "Background"
      },
      {
        "type": "button",
        "primary": true,
        "defaultValue": "Reset Colors",
        "id": "reset-colors-button"
      },
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];
# -Automated-Inventory-Tracker-with-Email-Alerts-Google-Sheets-Apps-Script-

This project is a smart inventory tracking system built using **Google Sheets** and **Google Apps Script**. It enables automatic monitoring of inventory levels and sends email alerts for **critical stock levels** every 12 hours.

---

## 🚀 Features

- **Inventory Management in Google Sheets** with the following columns:
  - `Item ID`
  - `Item Name`
  - `Category`
  - `Unit Cost`
  - `Quantity In`
  - `Quantity Out`
  - `Current Stock`
  - `Reorder Level`
  - `Reorder Qty`
  - `Status` (`OK`, `LOW`, `CRITICAL`)
  - `Last Updated`

- **Auto Timestamp Update**:  
  When `Quantity In` or `Quantity Out` is changed, the `Last Updated` column is automatically updated with the current date and time using a Google Apps Script `onEdit(e)` trigger.

- **Dynamic Stock Status Logic**:
  - If current stock > reorder level → `OK`
  - If current stock ≤ reorder level → `LOW`
  - If current stock ≤ 50% of reorder level → `CRITICAL`

- **Automated Email Alerts**:
  - A scheduled script (`sendCriticalStockAlerts`) runs every 12 hours
  - Sends an email to the inventory stakeholder listing products where `Status = CRITICAL`, including:
    - Product Name
    - Stock Level
    - Reorder Quantity

- **Email Format**:
  Plain-text, clean, tabulated format for easy readability on mobile and desktop email clients.

---

## 📧 Sample Email Output
![Sample_Email_Alert](https://github.com/user-attachments/assets/20f2d5f8-4b8b-48f5-9ad4-88ea6f4925c4)



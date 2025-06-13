# Spool ERP

A comprehensive inventory management system for 3D printing filament spools, built for small to medium manufacturing companies. This system tracks 3D printing spool inventory, usage, and provides barcode-based identification for efficient material management.

## Features

- **Inventory Management**: Track spool quantity, weight, material type, brand, and color
- **Barcode System**: Auto-generated QR codes for physical spool identification
- **Usage Tracking**: Monitor material consumption per project with weight-based calculations
- **Role-Based Access**: Admin, Manager, and Viewer permission levels
- **Search & Filter**: Find spools by material, brand, color, status, or custom criteria
- **Audit Trail**: Complete history of all inventory changes

## Tech Stack

- **Backend**: NestJS, GraphQL, Prisma ORM
- **Frontend**: Next.js, React, TypeScript
- **Database**: SQLite
- **Monorepo**: Turborepo for workspace management

### Core Tables

- **Users**: Authentication and role management
- **Spools**: Main inventory tracking
- **Materials**: PLA, ABS, PETG, TPU, etc.
- **Brands**: Filament manufacturers
- **Colors**: Available color options
- **Categories**: Standard, Premium, Engineering Grade
- **Usage History**: Weight tracking and project association
- **Audit Logs**: Change tracking

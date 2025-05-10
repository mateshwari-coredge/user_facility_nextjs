export type LayoutProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  headerActions?: React.ReactNode;
  showSidebar?: boolean;
};

export type Metric = {
  title: string;
  value: string;
  description: string;
};

export type Shipment = {
  sno: number;
  drugName: string;
  sscc: string;
  batchId: string;
  qty: string;
  date: string;
};

export type NavItem = {
  name: string;
  href: string;
  icon: string;
  active?: boolean;
};

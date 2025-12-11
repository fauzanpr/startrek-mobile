import { Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";

export const MENUS: {
    label: string;
    icon: ReactNode;
    url: string;
    description: string;
    is_section: boolean; // Tipe data is_section telah ditambahkan
}[] = [
        {
            label: "Dashboard",
            icon: <Ionicons name="grid-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Overview of key business metrics.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Sales",
            icon: <Ionicons name="stats-chart-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Manage and track sales transactions.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Organizations",
            description: "",
            icon: <></>,
            url: "",
            is_section: true
        },
        {
            label: "Company",
            icon: <Ionicons name="business-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Manage company structure and details.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Location",
            icon: <Ionicons name="location-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Manage operational areas.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Store",
            icon: <Ionicons name="storefront-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Manage store details and inventory.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Store Transfer Verification",
            icon: <Ionicons name="swap-horizontal-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Verify inter-store inventory transfers.",
            is_section: false, // Ditambahkan
        },
        {
            label: "User",
            icon: <Ionicons name="person-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Manage user accounts and access roles.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Product Master Data",
            description: "",
            icon: <></>,
            url: "",
            is_section: true
        },
        {
            label: "Product",
            icon: <Ionicons name="cube-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Manage product catalog and inventory.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Pasar Polis",
            icon: <Ionicons name="briefcase-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Manage insurance policy product offerings.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Plan",
            icon: <Ionicons name="color-palette-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Manage service packages and schemes.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Subscription Duration",
            icon: <Ionicons name="time-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Manage subscription duration options.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Device Amount",
            icon: <Ionicons name="albums-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Manage device usage limits per customer.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Export, Import, and Print",
            description: "",
            icon: <></>,
            url: "",
            is_section: true
        },
        {
            label: "Import Product",
            icon: <Ionicons name="cloud-upload-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Upload bulk product data.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Export Sales",
            icon: <Ionicons name="cloud-download-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Download sales reports and transaction data.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Export Product",
            icon: <Ionicons name="cloud-download-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Download product catalog lists.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Print Product",
            icon: <Ionicons name="print-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Print product labels or information.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Reward",
            description: "",
            icon: <></>,
            url: "",
            is_section: true
        },
        {
            label: "Reward Management",
            icon: <Ionicons name="gift-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Manage rewards programs and points.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Reward Verification",
            icon: <Ionicons name="checkmark-done-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Verify and approve reward redemptions.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Wallet",
            description: "",
            icon: <></>,
            url: "",
            is_section: true
        },
        {
            label: "Wallet Management",
            icon: <Ionicons name="wallet-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Manage user digital wallet balances.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Wallet Change Verification",
            icon: <Ionicons name="checkmark-circle-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Verify adjustments to user wallet balances.",
            is_section: false, // Ditambahkan
        },
        {
            label: "CRM",
            description: "",
            icon: <></>,
            url: "",
            is_section: true
        },
        {
            label: "Customers",
            icon: <Ionicons name="people-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Manage customer list and details.",
            is_section: false, // Ditambahkan
        },
        {
            label: "Customers Expiring Soon",
            icon: <Ionicons name="hourglass-outline" size={42} color={"#2563eb"} />,
            url: "",
            description: "Track customers with expiring subscriptions",
            is_section: false, // Ditambahkan
        }
    ];
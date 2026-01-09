"use client"
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample Data for finance applications
const financeApps = [
    {
        id: "APP-2024-001",
        name: "John Smith",
        email: "john.smith@example.com",
        phone: "+1 555 123 4567",
        plan: "Business Power",
        amount: "$250,000",
        rate: "3.99%",
        status: "Pending",
        date: "2024-01-05",
        location: "New York, USA",
        creditScore: 720,
        businessType: "Manufacturing"
    },
    {
        id: "APP-2024-002",
        name: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        phone: "+1 555 987 6543",
        plan: "Solar Starter",
        amount: "$150,000",
        rate: "4.50%",
        status: "Approved",
        date: "2024-01-10",
        location: "Los Angeles, USA",
        creditScore: 780,
        businessType: "Residential"
    },
    {
        id: "APP-2024-003",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1 555 111 2222",
        plan: "Enterprise Scale",
        amount: "$1,200,000",
        rate: "3.99%",
        status: "under_review",
        date: "2024-01-15",
        location: "London, UK",
        creditScore: 750,
        businessType: "Retail"
    },
    {
        id: "APP-2024-004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1 555 444 5555",
        plan: "Solar Starter",
        amount: "$250,000",
        rate: "4.99%",
        status: "Approved",
        date: "2024-01-20",
        location: "Chicago, USA",
        creditScore: 650,
        businessType: "Residential"
    },
    {
        id: "APP-2024-005",
        name: "David Wilson",
        email: "david.wilson@example.com",
        phone: "+1 555 666 7777",
        plan: "Business Power",
        amount: "$250,000",
        rate: "3.99%",
        status: "Rejected",
        date: "2024-01-25",
        location: "Lagos, Nigeria",
        creditScore: 650,
        businessType: "Retail"
    },
    {
        id: "APP-2024-006",
        name: "Lisa Anderson",
        email: "lisa.anderson@example.com",
        phone: "+1 555 987 6543",
        plan: "Business Power",
        amount: "$350,000",
        rate: "4.50%",
        status: "Pending",
        date: "2024-01-10",
        location: "Miami, USA",
        creditScore: 780,
        businessType: "Hospitality"
    },
    {
        id: "APP-2024-007",
        name: "James Martinez",
        email: "james.martinez@example.com",
        phone: "+1 555 444 5555",
        plan: "Enterprise Scale",
        amount: "$1,200,000",
        rate: "3.99%",
        status: "under_review",
        date: "2024-01-20",
        location: "Houston, USA",
        creditScore: 765,
        businessType: "Agriculture"
    },
    {
        id: "APP-2024-008",
        name: "Amanda Taylor",
        email: "amanda.taylor@example.com",
        phone: "+1 555 987 6543",
        plan: "Solar Starter",
        amount: "$50,000",
        rate: "4.50%",
        status: "Approved",
        date: "2024-01-10",
        location: "Las Vegas, USA",
        creditScore: 810,
        businessType: "Residential"
    }
];

interface SideBarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
}

const SideBar = ({ activeTab, setActiveTab, isSidebarOpen, setIsSidebarOpen }: SideBarProps) => {
    const menuItems = [
        {
            id: "dashboard",
            label: "Finance Applications",
            icon: "💰"
        },
        {
            id: "appointments",
            label: "Appointments",
            icon: "📅"
        },
        {
            id: "contacts",
            label: "Contact Messages",
            icon: "✉️"
        },
        {
            id: "customers",
            label: "Customers",
            icon: "👥"
        },
        {
            id: "products",
            label: "Products",
            icon: "📦"
        },
        {
            id: "analytics",
            label: "Analytics",
            icon: "📊"
        },
        {
            id: "settings",
            label: "Settings",
            icon: "⚙️"
        }
    ];

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                initial={{ x: -300 }}
                animate={{ x: isSidebarOpen ? 0 : -300 }}
                className="fixed top-0 left-0 h-full w-64 bg-slate-900 text-white z-50 shrink-0 lg:!transform-none lg:static"
            >
                <div className="w-full flex items-center justify-center py-6 mb-2">
                    <a href="/" className="block hover:opacity-80 transition-opacity">
                        <img
                            src="/NOK-Inc-Company-LogoFinal-02-1.webp"
                            alt="NOC Energy Logo"
                            className="w-54 h-auto object-contain"
                        />
                    </a>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setActiveTab(item.id);
                                setIsSidebarOpen(false);
                            }}
                            className={`flex items-center w-full gap-3 px-4 py-3 rounded-lg text-left text-sm font-medium transition-all duration-300 ease-in-out transition-colors mb-1 ${activeTab === item.id
                                ? 'bg-emerald-600 text-white shadow-lg'
                                : 'text-slate-400 hover:bg-slate-800 hover:text-white hover:shadow-lg'
                                }`}
                        >
                            <span className="mr-3 text-xl">{item.icon}</span>
                            <span className="font-medium">{item.label}</span>
                        </button>
                    ))}
                </nav>

                {/* User Profile */}
                <div className="p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800">
                        <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                            A
                        </div>
                        <div className="text-sm font-semibold text-white truncate">Admin User</div>
                        <div className="text-xs text-slate-400 truncate">admin@nokinc.com</div>
                    </div>
                </div>
            </motion.aside>
        </>
    );

};

interface HeaderProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
    activeTab: string;
}

const Header = ({ isSidebarOpen, setIsSidebarOpen, activeTab }: HeaderProps) => {
    const headerContent: Record<string, { title: string; description: string }> = {
        dashboard: { title: "Finance Applications", description: "Manage and review finance requests" },
        appointments: { title: "Appointments", description: "View and manage scheduled appointments" },
        messages: { title: "Contact Messages", description: "Review inquiries and support requests" },
        customers: { title: "Customers", description: "Manage customer accounts and details" },
        products: { title: "Products & Services", description: "Manage inventory and service offerings" },
        analytics: { title: "Analytics Overview", description: "Performance metrics and growth stats" },
        settings: { title: "Settings", description: "Manage your account and preferences" }
    };

    const currentContent = headerContent[activeTab] || { title: "Admin Dashboard", description: "Welcome back" };

    return (
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div>
                        <h1 className="text-xl font-bold text-slate-900 leading-tight">{currentContent.title}</h1>
                        <p className="text-sm text-slate-600 hidden sm:block">{currentContent.description}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                    <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <span className="text-xl">🔔</span>
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <span className="text-xl">⚙️</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

interface StatusBadgeProps {
    status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
    const statusConfig: Record<string, { bg: string; text: string; label: string }> = {
        pending: { bg: "bg-yellow-100", text: "text-yellow-800", label: "Pending" },
        approved: { bg: "bg-emerald-100", text: "text-emerald-800", label: "Approved" },
        rejected: { bg: "bg-red-100", text: "text-red-800", label: "Rejected" },
        under_review: { bg: "bg-blue-100", text: "text-blue-800", label: "Under Review" }
    };

    const config = statusConfig[status] || statusConfig.pending;

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}>{config.label}</span>
    );
};

interface Application {
    id: string;
    name: string;
    email: string;
    phone: string;
    plan: string;
    amount: string;
    rate: string;
    status: string;
    date: string;
    location: string;
    creditScore: number;
    businessType: string;
}

interface ApplicationDetailModalProps {
    application: Application | null;
    isOpen: boolean;
    onClose: () => void;
}

const ApplicationDetailModal = ({ application, isOpen, onClose }: ApplicationDetailModalProps) => {
    if (!application) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.5 }}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden pointer-events-auto"
                        >
                            {/* Modal Header */}
                            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-6">
                                <div className="flex items-center justify-between text-white">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">Application Details</h3>
                                        <p className="text-emerald-100 text-sm">
                                            {application.id}
                                        </p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-xl transition-colors"
                                    >✕</button>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Applicant Information */}
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-200">
                                            <span>👤</span>
                                            Applicant Information
                                        </h4>
                                        <div className="space-y-3">
                                            <div>
                                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500"> Full Name</label>
                                                <p className="text-sm font-medium text-slate-900">{application.name}</p>
                                            </div>
                                            <div>
                                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500"> Email</label>
                                                <p className="text-sm text-slate-900">{application.email}</p>
                                            </div>
                                            <div>
                                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500"> Phone</label>
                                                <p className="text-sm text-slate-900">{application.phone}</p>
                                            </div>
                                            <div>
                                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Location</label>
                                                <p className="text-sm text-slate-900">{application.location}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Financial Details */}
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-200">
                                            <span>💰</span>
                                            Financial Details
                                        </h4>
                                        <div className="space-y-3">
                                            <div>
                                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Plan Type</label>
                                                <p className="text-sm text-slate-900">{application.plan}</p>
                                            </div>
                                            <div>
                                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Loan Amount</label>
                                                <p className="text-sm text-slate-900">{application.amount}</p>
                                            </div>
                                            <div>
                                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Interest Rate</label>
                                                <p className="text-sm text-slate-900">{application.rate} APR</p>
                                            </div>
                                            <div>
                                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Credit Score</label>
                                                <p className="text-sm text-slate-900">{application.creditScore}</p>
                                            </div>
                                            <div>
                                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Business Type</label>
                                                <p className="text-sm text-slate-900">{application.businessType}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Status and Actions */}
                                    <div className="md:col-span-2 space-y-4 pt-6 border-t border-slate-200">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">Current Status</label>
                                                <StatusBadge status={application.status} />
                                            </div>
                                            <div>
                                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Application Date</label>
                                                <p className="text-sm text-slate-900">{application.date}</p>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-3 pt-4">
                                            <button
                                                className="flex-1 min-w-[150px] px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
                                            > ✅ Approve</button>
                                            <button
                                                className="flex-1 min-w-[150px] px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
                                            > ❌ Reject</button>
                                            <button
                                                className="flex-1 min-w-[150px] px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                                            > 📝 Request More Info</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

const FinanceApplications = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [planFilter, setPlanFilter] = useState("all");
    const [sortBy, setSortBy] = useState("date");
    const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewDetails = (application: Application) => {
        setSelectedApplication(application);
        setIsModalOpen(true);
    };

    // Filter and sort applications
    const filteredApplications = financeApps.filter((app) => {
        const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) || app.id.toLowerCase().includes(searchTerm.toLowerCase()) || app.email.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === "all" || app.status === statusFilter;
        const matchesPlan = planFilter === "all" || app.plan === planFilter;

        return matchesSearch && matchesStatus && matchesPlan;
    })
        .sort((a, b) => {
            if (sortBy === "date") return new Date(b.date).getTime() - new Date(a.date).getTime();
            if (sortBy === "amount") return parseFloat(b.amount.replace(/[$,]/g, "")) - parseFloat(a.amount.replace(/[$,]/g, ''));
            if (sortBy === "name") return a.name.localeCompare(b.name);
            return 0;
        });

    // Statistics
    const stats = {
        total: financeApps.length,
        pending: financeApps.filter((app) => app.status === "pending").length,
        rejected: financeApps.filter((app) => app.status === "rejected").length,
        underReview: financeApps.filter((app) => app.status === "under_review").length,
        approved: financeApps.filter((app) => app.status === "approved").length,
    };

    return (
        <div className="space-y-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">📊</span>
                        <span className="text-xs font-semibold text-slate-900">Total</span>
                        <p className="text-3xl font-bold text-slate-900">{stats.total}</p>
                        <p className="text-sm text-slate-600 mt-1">Applications</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 shadow-md border border-yellow-200">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">⏳</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-yellow-700">Pending</span>
                    </div>
                    <p className="text-3xl font-bold text-yellow-900">{stats.pending}</p>
                    <p className="text-sm text-yellow-700 mt-1">Awaiting Reviews</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 shadow-md border border-emerald-200">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">✅</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Approved</span>
                    </div>
                    <p className="text-3xl font-bold text-emerald-900">{stats.approved}</p>
                    <p className="text-sm text-emerald-700 mt-1">Successfully Approved</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-md border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">🔍</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">Under Review</span>
                    </div>
                    <p className="text-3xl font-bold text-blue-900">{stats.underReview}</p>
                    <p className="text-sm text-blue-700 mt-1">Awaiting Reviews</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 shadow-md border border-red-200">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">❌</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-red-700">Rejected</span>
                    </div>
                    <p className="text-3xl font-bold text-red-900">{stats.rejected}</p>
                    <p className="text-sm text-red-700 mt-1">Not Approved</p>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Search */}
                    <div className="lg:col-span-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2 block">
                            Search Applications
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by name, ID, or Email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-sm text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition"
                            />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-lg">🔍</span>
                        </div>
                    </div>

                    {/* Status Filter */}
                    <div>
                        <label className="text-sm font-semibold uppercase tracking-wider text-slate-600 mb-2 block">
                            Status
                        </label>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-sm text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition cursor-pointer"
                        >
                            <option value="all">All</option>
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="under_review">Under Review</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>

                    {/* Plan Filter */}
                    <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2 block">
                            Plan Type
                        </label>
                        <select
                            value={planFilter}
                            onChange={(e) => setPlanFilter(e.target.value)}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-sm text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition cursor-pointer"
                        >
                            <option value="all">All</option>
                            <option value="Solar Starter">Solar Starter</option>
                            <option value="Business Power">Business Power</option>
                            <option value="Enterprise Scale">Enterprise Scale</option>
                        </select>
                    </div>
                </div>

                {/* Sort and Results Count */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 pt-4 border-t border-slate-200 gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 whitespace-nowrap">Sort By</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border border-slate-200 rounded-xl bg-slate-50 text-sm text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition cursor-pointer"
                        >
                            <option value="date">Date (Newest)</option>
                            <option value="amount">Amount (Highest)</option>
                            <option value="name">Name (A-Z)</option>
                        </select>
                    </div>
                    <p className="text-sm text-slate-600 text-center sm:text-right">
                        Showing <span className="font-semibold text-slate-900">{filteredApplications.length}</span> of{" "}
                        <span className="font-semibold text-slate-900">{financeApps.length}</span> applications
                    </p>
                </div>
            </div>

            {/* Application Table */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-600">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                                    Application ID
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Applicant</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Plan Type</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Amount</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Date</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {filteredApplications.map((app) => (
                                <motion.tr
                                    key={app.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="hover:bg-slate-50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <span className="font-mono text-sm text-slate-900 font-medium">
                                            {app.id}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="text-sm font-medium text-slate-900">
                                                {app.name}
                                            </p>
                                            <p className="text-sm text-slate-500">
                                                {app.email}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-slate-900">
                                            {app.plan}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-semibold text-emerald-600">
                                            {app.amount}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-slate-600">
                                            {app.date}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleViewDetails(app)}
                                            className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-semibold hover:bg-emerald-200 transition-colors"
                                        >View Details</button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {filteredApplications.length === 0 && (
                    <div className="py-16 text-center">
                        <span className="text-6xl mb-4 block">🔍</span>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">No applications found</h3>
                        <p className="text-slate-600">Try adjusting your search filters or search terms.</p>
                    </div>
                )}
            </div>

            {/* Application Detail Modal */}
            <ApplicationDetailModal
                application={selectedApplication}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div >
    );
};

// --- Appointments Component ---

const appointmentsData = [
    {
        id: "APT-001",
        clientName: "Sarah Connor",
        service: "Solar Consultation",
        date: "2024-03-15",
        time: "10:00 AM",
        status: "Scheduled",
        contact: "sarah@example.com",
    },
    {
        id: "APT-002",
        clientName: "Kyle Reese",
        service: "Site Inspection",
        date: "2024-03-16",
        time: "02:00 PM",
        status: "Completed",
        contact: "kyle@example.com",
    },
    {
        id: "APT-003",
        clientName: "T-800 Model",
        service: "Maintenance Check",
        date: "2024-03-20",
        time: "09:00 AM",
        status: "Pending",
        contact: "arnold@example.com",
    },
    {
        id: "APT-004",
        clientName: "John Connor",
        service: "System Upgrade",
        date: "2024-03-22",
        time: "11:30 AM",
        status: "Scheduled",
        contact: "john@example.com",
    },
    {
        id: "APT-005",
        clientName: "Miles Dyson",
        service: "Tech Support",
        date: "2024-03-25",
        time: "03:00 PM",
        status: "Cancelled",
        contact: "miles@example.com",
    }
];

const Appointments = () => {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                            <span className="text-2xl">📅</span>
                        </div>
                        <div>
                            <p className="text-sm text-slate-600 font-medium">Total Appointments</p>
                            <h3 className="text-2xl font-bold text-slate-900">{appointmentsData.length}</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                            <span className="text-2xl">✅</span>
                        </div>
                        <div>
                            <p className="text-sm text-slate-600 font-medium">Completed</p>
                            <h3 className="text-2xl font-bold text-slate-900">
                                {appointmentsData.filter(a => a.status === "Completed").length}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-yellow-100 text-yellow-600 rounded-xl">
                            <span className="text-2xl">⏳</span>
                        </div>
                        <div>
                            <p className="text-sm text-slate-600 font-medium">Upcoming</p>
                            <h3 className="text-2xl font-bold text-slate-900">
                                {appointmentsData.filter(a => a.status === "Scheduled" || a.status === "Pending").length}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Table */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">ID</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Client</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Service</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Date & Time</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {appointmentsData.map((app) => (
                                <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">{app.id}</td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-slate-900">{app.clientName}</p>
                                            <p className="text-xs text-slate-500">{app.contact}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">{app.service}</td>
                                    <td className="px-6 py-4">
                                        <div className="text-slate-900">{app.date}</div>
                                        <div className="text-xs text-slate-500">{app.time}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                                            ${app.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                                                app.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                                                    app.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                                                        'bg-yellow-100 text-yellow-800'
                                            }
                                        `}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-emerald-600 hover:text-emerald-900 text-sm font-medium">View Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
// --- Contact Messages Component ---
const messagesData = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", subject: "Inquiry about Solar", status: "New", date: "2024-03-24" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", subject: "Support Request", status: "Read", date: "2024-03-23" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", subject: "Partnership Opportunity", status: "New", date: "2024-03-22" },
];

const ContactMessages = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-slate-600">Sender</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Subject</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Status</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Date</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {messagesData.map((msg) => (
                            <tr key={msg.id} className="hover:bg-slate-50 transition">
                                <td className="px-6 py-4">
                                    <div className="font-medium text-slate-900">{msg.name}</div>
                                    <div className="text-xs text-slate-500">{msg.email}</div>
                                </td>
                                <td className="px-6 py-4 text-slate-700">{msg.subject}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${msg.status === 'New' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'}`}>
                                        {msg.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-slate-600">{msg.date}</td>
                                <td className="px-6 py-4">
                                    <button className="text-red-600 hover:text-red-800 text-sm font-medium">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// --- Customers Component ---
const customersData = [
    { id: "CUST-001", name: "Green Earth Co.", email: "contact@greenearth.com", type: "Business", status: "Active" },
    { id: "CUST-002", name: "Jane Doe", email: "jane@example.com", type: "Individual", status: "Active" },
    { id: "CUST-003", name: "Tech Solutions Ltd", email: "info@techsolutions.com", type: "Business", status: "Inactive" },
];

const Customers = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-slate-600">Name</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Type</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Status</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {customersData.map((cust) => (
                            <tr key={cust.id} className="hover:bg-slate-50 transition">
                                <td className="px-6 py-4">
                                    <div className="font-medium text-slate-900">{cust.name}</div>
                                    <div className="text-xs text-slate-500">{cust.email}</div>
                                </td>
                                <td className="px-6 py-4 text-slate-700">{cust.type}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${cust.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                                        {cust.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-emerald-600 hover:text-emerald-800 text-sm font-medium">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// --- Products Component ---
const productsData = [
    { id: "P-101", name: "Solar Panel X500", category: "Hardware", stock: 120, price: "$299.00", status: "In Stock" },
    { id: "P-102", name: "Inverter Pro", category: "Hardware", stock: 45, price: "$1,200.00", status: "Low Stock" },
    { id: "P-103", name: "Installation Service", category: "Service", stock: "N/A", price: "$500.00", status: "Active" },
];

const Products = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-slate-600">Product Name</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Category</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Price</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Stock Status</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {productsData.map((prod) => (
                            <tr key={prod.id} className="hover:bg-slate-50 transition">
                                <td className="px-6 py-4 font-medium text-slate-900">{prod.name}</td>
                                <td className="px-6 py-4 text-slate-700">{prod.category}</td>
                                <td className="px-6 py-4 text-slate-700">{prod.price}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${prod.status === 'In Stock' || prod.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                        {prod.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


// --- Analytics Component ---
const Analytics = () => {
    return (
        <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: "Total Revenue", value: "$124,500", change: "+12%", color: "emerald" },
                    { label: "Active Users", value: "1,240", change: "+5%", color: "blue" },
                    { label: "New Leads", value: "86", change: "+24%", color: "purple" },
                    { label: "Bounce Rate", value: "42%", change: "-2%", color: "yellow" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                        <div className="mt-2 flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                            <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-red-500'}`}>
                                {stat.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mock Charts Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-80 flex flex-col justify-center items-center text-slate-400">
                    <span className="text-4xl mb-2">📊</span>
                    <p>Revenue Chart Placeholder</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-80 flex flex-col justify-center items-center text-slate-400">
                    <span className="text-4xl mb-2">📈</span>
                    <p>User Growth Chart Placeholder</p>
                </div>
            </div>
        </div>
    );
};

// --- Settings Component ---
const Settings = () => {
    return (
        <div className="max-w-4xl space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-8">
                {/* Profile Section */}
                <section className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Full Name</label>
                            <input type="text" defaultValue="Admin User" className="w-full px-4 py-2 border rounded-lg bg-slate-50" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Email Address</label>
                            <input type="email" defaultValue="admin@noc.com" className="w-full px-4 py-2 border rounded-lg bg-slate-50" />
                        </div>
                    </div>
                </section>

                {/* Notifications Section */}
                <section className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Notifications</h3>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3">
                            <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-600 rounded" />
                            <span className="text-slate-700">Email me about new applications</span>
                        </label>
                        <label className="flex items-center gap-3">
                            <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-600 rounded" />
                            <span className="text-slate-700">Email me about system updates</span>
                        </label>
                    </div>
                </section>

                <div className="pt-4">
                    <button className="px-6 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="fixed inset-0 flex overflow-hidden bg-[#f3faf6]">
            {/* Sidebar */}
            <SideBar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <Header
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    activeTab={activeTab}
                />

                {/* Page Content */}
                <main className="flex-1 p-4 lg:p-8 overflow-y-auto bg-[#f3faf6]">
                    {activeTab === "dashboard" && <FinanceApplications />}
                    {activeTab === "appointments" && <Appointments />}
                    {activeTab === "messages" && <ContactMessages />}
                    {activeTab === "customers" && <Customers />}
                    {activeTab === "products" && <Products />}
                    {activeTab === "analytics" && <Analytics />}
                    {activeTab === "settings" && <Settings />}
                    {activeTab !== "dashboard" &&
                        activeTab !== "appointments" &&
                        activeTab !== "messages" &&
                        activeTab !== "customers" &&
                        activeTab !== "products" &&
                        activeTab !== "analytics" &&
                        activeTab !== "settings" && (
                            <div className="text-center py-20">
                                <span className="text-6xl mb-4 block">🚧</span>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-2">Under Development</h2>
                                <p className="text-slate-600">This section is coming soon</p>
                            </div>
                        )}
                </main>
            </div>
        </div>
    );
}


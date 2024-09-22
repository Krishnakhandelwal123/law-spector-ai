import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analyze = () => {
    const data = [
        { name: 'Jan', sales: 4000, users: 2400 },
        { name: 'Feb', sales: 3000, users: 1398 },
        { name: 'Mar', sales: 2000, users: 9800 },
        { name: 'Apr', sales: 2780, users: 3908 },
    ];

    const insights = [
        { id: 1, message: 'Increase stock for Product A due to rising demand.' },
        { id: 2, message: 'Users are abandoning carts at the payment stage.' },
    ];

    const [reports, setReports] = useState([
        { id: 1, name: 'Monthly Sales Report', date: '2024-08-01' },
        { id: 2, name: 'User Activity Report', date: '2024-09-01' },
    ]);

    const liveData = {
        activeUsers: 122,
        revenue: '$10,342',
        conversionRate: '4.8%',
    };

    const downloadReport = (id) => {
        console.log(`Downloading report with id: ${id}`);
    };

    return (
        <div className="min-h-screen p-8 text-white bg-gray-900">
            <h1 className="mb-6 text-3xl font-bold">Analyze Dashboard</h1>
            {/* Real-Time Data Widget */}
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="mb-4 text-xl font-semibold">Real-Time Data</h3>
                    <p className="text-gray-300">Active Users: {liveData.activeUsers}</p>
                    <p className="text-gray-300">Revenue: {liveData.revenue}</p>
                    <p className="text-gray-300">Conversion Rate: {liveData.conversionRate}</p>
                </div>

                {/* Insights Panel */}
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="mb-4 text-xl font-semibold">AI-Powered Insights</h3>
                    <ul className="ml-5 list-disc">
                        {insights.map((insight) => (
                            <li key={insight.id} className="text-gray-300">{insight.message}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="mb-4 text-xl font-semibold">Sales Trends</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <XAxis dataKey="name" stroke="#ddd" />
                            <YAxis stroke="#ddd" />
                            <CartesianGrid stroke="#555" strokeDasharray="5 5" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                            <Line type="monotone" dataKey="users" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="mb-4 text-xl font-semibold">User Behavior</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <XAxis dataKey="name" stroke="#ddd" />
                            <YAxis stroke="#ddd" />
                            <CartesianGrid stroke="#555" strokeDasharray="5 5" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                            <Line type="monotone" dataKey="users" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Custom Reports Section */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <h3 className="mb-4 text-xl font-semibold">Custom Reports</h3>
                <ul className="ml-5 list-disc">
                    {reports.map((report) => (
                        <li key={report.id} className="flex items-center justify-between mb-2 text-gray-300">
                            {report.name} - {report.date}
                            <button
                                onClick={() => downloadReport(report.id)}
                                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                            >
                                Download
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const InventoryManagement = () => {
    const inventoryData = [
        { id: 1, product: 'Product A', stock: 20, status: 'Low' },
        { id: 2, product: 'Product B', stock: 150, status: 'Sufficient' },
        { id: 3, product: 'Product C', stock: 0, status: 'Out of Stock' },
    ];

    return (
        <div className="min-h-screen p-8 text-white bg-gray-900">
            <h1 className="mb-6 text-3xl font-bold">Inventory Management</h1>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <h3 className="mb-4 text-xl font-semibold">Current Stock Levels</h3>
                <table className="w-full text-left table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Product</th>
                            <th className="px-4 py-2">Stock</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryData.map((item) => (
                            <tr key={item.id} className="border-t border-gray-700">
                                <td className="px-4 py-2">{item.product}</td>
                                <td className="px-4 py-2">{item.stock}</td>
                                <td className={`px-4 py-2 ${item.status === 'Low' ? 'text-red-500' : 'text-green-500'}`}>
                                    {item.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const App = () => {
    const [activePage, setActivePage] = useState('analyze');

    const renderPage = () => {
        if (activePage === 'analyze') {
            return <Analyze />;
        } else if (activePage === 'inventory') {
            return <InventoryManagement />;
        }
    };

    return (
        <div className="min-h-screen text-white bg-gray-900">
            <div className="p-4 bg-gray-800 shadow-lg">
                <nav className="flex justify-around">
                    <button
                        onClick={() => setActivePage('analyze')}
                        className={`px-4 py-2 ${activePage === 'analyze' ? 'text-blue-400 underline' : 'text-white'}`}
                    >
                        Analyze Dashboard
                    </button>
                    <button
                        onClick={() => setActivePage('inventory')}
                        className={`px-4 py-2 ${activePage === 'inventory' ? 'text-blue-400 underline' : 'text-white'}`}
                    >
                        Inventory Management
                    </button>
                </nav>
            </div>

            {renderPage()}
        </div>
    );
};
export default App;

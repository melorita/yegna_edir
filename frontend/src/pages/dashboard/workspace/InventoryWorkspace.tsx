import React, { useState } from 'react';
import { Package, CheckCircle, Clock, AlertTriangle, Plus, Search, Edit, Trash2, Eye } from 'lucide-react';

export const InventoryWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'all-items' | 'available' | 'borrowed' | 'maintenance'>('overview');
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const [showBorrowForm, setShowBorrowForm] = useState(false);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">Inventory Management</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Manage Edir equipment, tents, chairs, and other shared resources.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="rounded-3xl bg-card border border-[var(--border)] p-2">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'overview'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <Package className="w-4 h-4 inline mr-2" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('all-items')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'all-items'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setActiveTab('available')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'available'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Available
          </button>
          <button
            onClick={() => setActiveTab('borrowed')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'borrowed'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <Clock className="w-4 h-4 inline mr-2" />
            Borrowed
          </button>
          <button
            onClick={() => setActiveTab('maintenance')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'maintenance'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <AlertTriangle className="w-4 h-4 inline mr-2" />
            Maintenance
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Total Items
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <Package className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">187</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">In inventory</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Available
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">165</div>
              <div className="text-xs text-emerald-700 mt-1">Ready to use</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Borrowed
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">18</div>
              <div className="text-xs text-amber-700 mt-1">Currently in use</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Maintenance
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">4</div>
              <div className="text-xs text-rose-700 mt-1">Needs attention</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                onClick={() => {
                  setActiveTab('all-items');
                  setShowAddItemForm(true);
                }}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <Plus className="w-4 h-4 inline mr-2" />
                  Add New Item
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">Register new inventory item</p>
              </button>
              <button 
                onClick={() => {
                  setActiveTab('borrowed');
                  setShowBorrowForm(true);
                }}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Record Borrow
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">Log borrowed items</p>
              </button>
              <button 
                onClick={() => setActiveTab('available')}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <CheckCircle className="w-4 h-4 inline mr-2" />
                  View Available
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">See ready-to-use items</p>
              </button>
              <button 
                onClick={() => setActiveTab('maintenance')}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <AlertTriangle className="w-4 h-4 inline mr-2" />
                  Maintenance Log
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">Track repairs and damage</p>
              </button>
            </div>
          </div>

          {/* Inventory Categories */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
              Inventory by Category
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { name: 'Chairs', count: 120, icon: '🪑' },
                { name: 'Tents', count: 8, icon: '⛺' },
                { name: 'Tables', count: 25, icon: '🪑' },
                { name: 'Cooking', count: 18, icon: '🍳' },
                { name: 'Sound', count: 6, icon: '🔊' },
                { name: 'Other', count: 10, icon: '📦' },
              ].map((category, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] text-center"
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                    {category.name}
                  </h4>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    {category.count} items
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'all-items' && (
        <div className="space-y-6">
          {/* Header with Add Button */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                All Inventory Items
              </h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Manage all Edir property and equipment
              </p>
            </div>
            <button
              onClick={() => setShowAddItemForm(!showAddItemForm)}
              className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all"
            >
              <Plus className="w-4 h-4 inline mr-2" />
              Add Item
            </button>
          </div>

          {/* Add Item Form */}
          {showAddItemForm && (
            <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
              <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
                Add New Inventory Item
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Item Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Plastic Chair"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Category *
                  </label>
                  <select className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                    <option>🪑 Chairs</option>
                    <option>⛺ Tents</option>
                    <option>🪑 Tables</option>
                    <option>🍳 Cooking Equipment</option>
                    <option>🔊 Sound Systems</option>
                    <option>📦 Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Quantity *
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Condition *
                  </label>
                  <select className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                    <option>Needs Repair</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Additional information about the item..."
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button className="px-5 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all">
                  Add to Inventory
                </button>
                <button
                  onClick={() => setShowAddItemForm(false)}
                  className="px-5 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Items List */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-serif font-semibold text-[var(--foreground)]">
                All Items
              </h4>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
                <input
                  type="text"
                  placeholder="Search items..."
                  className="pl-10 pr-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
            </div>

            <div className="space-y-3">
              {[
                { name: 'Plastic Chairs (White)', category: '🪑 Chairs', quantity: 120, available: 110, condition: 'Good' },
                { name: 'Large Event Tent', category: '⛺ Tents', quantity: 8, available: 6, condition: 'Excellent' },
                { name: 'Folding Tables', category: '🪑 Tables', quantity: 25, available: 20, condition: 'Good' },
                { name: 'Gas Stove (Large)', category: '🍳 Cooking', quantity: 4, available: 3, condition: 'Good' },
                { name: 'PA Sound System', category: '🔊 Sound', quantity: 2, available: 2, condition: 'Excellent' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center text-2xl">
                      {item.category.split(' ')[0]}
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-sm mb-1">
                        {item.name}
                      </h5>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {item.category} • Total: {item.quantity} • Available: {item.available}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                      {item.condition}
                    </span>
                    <button className="p-2 rounded-lg hover:bg-secondary/40 transition-all">
                      <Eye className="w-4 h-4 text-[var(--muted-foreground)]" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-secondary/40 transition-all">
                      <Edit className="w-4 h-4 text-[var(--muted-foreground)]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'available' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
              Available Items
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Items ready to use and available for borrowing
            </p>
          </div>

          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <div className="space-y-3">
              {[
                { name: 'Plastic Chairs (White)', available: 110, total: 120, category: '🪑' },
                { name: 'Large Event Tent', available: 6, total: 8, category: '⛺' },
                { name: 'Folding Tables', available: 20, total: 25, category: '🪑' },
                { name: 'Gas Stove (Large)', available: 3, total: 4, category: '🍳' },
                { name: 'PA Sound System', available: 2, total: 2, category: '🔊' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center text-2xl">
                      {item.category}
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-base mb-1">
                        {item.name}
                      </h5>
                      <p className="text-sm text-emerald-700 font-medium">
                        {item.available} available out of {item.total}
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all">
                    Lend Item
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'borrowed' && (
        <div className="space-y-6">
          {/* Header with Record Button */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Borrowed Items
              </h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Track items currently in use by members
              </p>
            </div>
            <button
              onClick={() => setShowBorrowForm(!showBorrowForm)}
              className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all"
            >
              <Plus className="w-4 h-4 inline mr-2" />
              Record Borrow
            </button>
          </div>

          {/* Record Borrow Form */}
          {showBorrowForm && (
            <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
              <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
                Record Borrowed Item
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Item *
                  </label>
                  <select className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                    <option>Plastic Chairs (White) - 110 available</option>
                    <option>Large Event Tent - 6 available</option>
                    <option>Folding Tables - 20 available</option>
                    <option>Gas Stove (Large) - 3 available</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Quantity *
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Borrowed By *
                  </label>
                  <input
                    type="text"
                    placeholder="Member name or ID"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Expected Return Date *
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Purpose
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Family gathering, Funeral ceremony"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button className="px-5 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all">
                  Record Borrow
                </button>
                <button
                  onClick={() => setShowBorrowForm(false)}
                  className="px-5 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Currently Borrowed Items */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
              Currently Borrowed
            </h4>
            <div className="space-y-3">
              {[
                { item: 'Plastic Chairs (White)', qty: 10, borrower: 'Melat Tesfaye', purpose: 'Family gathering', borrowed: 'Sept 1', returnBy: 'Sept 5', status: 'Active' },
                { item: 'Large Event Tent', qty: 2, borrower: 'Abebe Kebede', purpose: 'Wedding ceremony', borrowed: 'Aug 30', returnBy: 'Sept 8', status: 'Active' },
                { item: 'Gas Stove (Large)', qty: 1, borrower: 'Tigist Alemayehu', purpose: 'Community event', borrowed: 'Sept 2', returnBy: 'Sept 4', status: 'Overdue' },
              ].map((borrow, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h5 className="font-medium text-[var(--foreground)] text-sm mb-1">
                        {borrow.item} × {borrow.qty}
                      </h5>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        👤 {borrow.borrower} • {borrow.purpose}
                      </p>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        📅 Borrowed: {borrow.borrowed} • Return by: {borrow.returnBy}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      borrow.status === 'Overdue' 
                        ? 'bg-rose-100 text-rose-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {borrow.status}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 text-sm font-medium hover:bg-emerald-200 transition-all">
                      Mark Returned
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                      Extend Date
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'maintenance' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
              Maintenance & Repairs
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Track damaged items and maintenance needs
            </p>
          </div>

          {/* Items Needing Attention */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
              Items Needing Attention
            </h4>
            <div className="space-y-3">
              {[
                { item: 'Plastic Chairs (White)', issue: 'Broken legs', qty: 3, reported: 'Sept 1, 2026', priority: 'Medium' },
                { item: 'Large Event Tent', issue: 'Torn fabric', qty: 1, reported: 'Aug 28, 2026', priority: 'High' },
              ].map((maintenance, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-medium text-[var(--foreground)] text-base mb-1">
                          {maintenance.item}
                        </h5>
                        <p className="text-sm text-[var(--muted-foreground)] mb-1">
                          Issue: {maintenance.issue}
                        </p>
                        <p className="text-xs text-[var(--muted-foreground)]">
                          Quantity: {maintenance.qty} • Reported: {maintenance.reported}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      maintenance.priority === 'High' 
                        ? 'bg-rose-100 text-rose-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {maintenance.priority} Priority
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all">
                      Schedule Repair
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-rose-100 text-rose-800 text-sm font-medium hover:bg-rose-200 transition-all">
                      Mark as Damaged
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance History */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
              Recent Maintenance History
            </h4>
            <div className="space-y-3">
              {[
                { item: 'Folding Tables', action: 'Repaired', qty: 2, date: 'Aug 20, 2026', cost: '500 ETB' },
                { item: 'Gas Stove', action: 'Serviced', qty: 1, date: 'Aug 15, 2026', cost: '800 ETB' },
                { item: 'PA Sound System', action: 'Replaced parts', qty: 1, date: 'July 28, 2026', cost: '1,200 ETB' },
              ].map((history, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-sm mb-1">
                        {history.item} - {history.action}
                      </h5>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        Qty: {history.qty} • {history.date} • Cost: {history.cost}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-secondary/40 transition-all">
                    <Eye className="w-4 h-4 text-[var(--muted-foreground)]" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

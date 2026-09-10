import React, { useState } from 'react';
import {
  ClipboardList,
  UserPlus,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Filter,
  Eye,
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield
} from 'lucide-react';

interface Registration {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  dateApplied: string;
  status: 'pending' | 'approved' | 'rejected';
  faydaVerified: boolean;
  faydaScore: number;
  notes?: string;
}

export const RegistrationManagement: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegistration, setSelectedRegistration] = useState<Registration | null>(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState('');

  // Mock registration data
  const allRegistrations: Registration[] = [
    {
      id: 'REG-001',
      name: 'Sara Gebre',
      email: 'sara.gebre@email.com',
      phone: '+251 911 567890',
      address: 'Bole, Addis Ababa',
      dateApplied: '2026-09-01',
      status: 'pending',
      faydaVerified: true,
      faydaScore: 92,
      notes: 'Lives in the neighborhood, verified by Fayda'
    },
    {
      id: 'REG-002',
      name: 'Tesfaye Mengistu',
      email: 'tesfaye.m@email.com',
      phone: '+251 911 678901',
      address: 'Bole, Addis Ababa',
      dateApplied: '2026-09-02',
      status: 'pending',
      faydaVerified: true,
      faydaScore: 88
    },
    {
      id: 'REG-003',
      name: 'Hanna Getachew',
      email: 'hanna.g@email.com',
      phone: '+251 911 789012',
      address: 'Bole, Addis Ababa',
      dateApplied: '2026-09-03',
      status: 'pending',
      faydaVerified: false,
      faydaScore: 0,
      notes: 'Pending Fayda verification'
    },
    {
      id: 'REG-004',
      name: 'Meseret Abebe',
      email: 'meseret.a@email.com',
      phone: '+251 911 890123',
      address: 'Bole, Addis Ababa',
      dateApplied: '2026-08-28',
      status: 'approved',
      faydaVerified: true,
      faydaScore: 95
    },
    {
      id: 'REG-005',
      name: 'Kebede Tadesse',
      email: 'kebede.t@email.com',
      phone: '+251 911 901234',
      address: 'Outside neighborhood',
      dateApplied: '2026-08-25',
      status: 'rejected',
      faydaVerified: false,
      faydaScore: 0,
      notes: 'Does not reside in the neighborhood'
    }
  ];

  const filteredRegistrations = allRegistrations.filter((reg) => {
    const matchesSearch =
      reg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || reg.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const pendingCount = allRegistrations.filter((r) => r.status === 'pending').length;
  const approvedCount = allRegistrations.filter((r) => r.status === 'approved').length;
  const rejectedCount = allRegistrations.filter((r) => r.status === 'rejected').length;
  const faydaVerifiedCount = allRegistrations.filter((r) => r.faydaVerified).length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'approved':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'rejected':
        return 'bg-rose-100 text-rose-700 border-rose-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleApprove = (registration: Registration) => {
    console.log('Approving:', registration.id);
    setSelectedRegistration(null);
  };

  const handleReject = () => {
    console.log('Rejecting:', selectedRegistration?.id, 'Reason:', rejectReason);
    setShowRejectModal(false);
    setSelectedRegistration(null);
    setRejectReason('');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-serif font-bold text-[var(--foreground)]">Registration Management</h1>
        <p className="text-sm text-[var(--muted-foreground)] mt-1">
          Review and manage membership registration requests
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">{pendingCount}</div>
          <div className="text-xs text-[var(--muted-foreground)]">Pending Review</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">{approvedCount}</div>
          <div className="text-xs text-[var(--muted-foreground)]">Approved</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
              <XCircle className="w-5 h-5 text-rose-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">{rejectedCount}</div>
          <div className="text-xs text-[var(--muted-foreground)]">Rejected</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">{faydaVerifiedCount}</div>
          <div className="text-xs text-[var(--muted-foreground)]">Fayda Verified</div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
            <input
              type="text"
              placeholder="Search by name, ID, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            />
          </div>

          {/* Status Filter */}
          <div className="flex gap-2">
            {(['all', 'pending', 'approved', 'rejected'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  statusFilter === status
                    ? 'bg-[var(--primary)] text-white'
                    : 'border border-[var(--border)] bg-card text-[var(--foreground)] hover:bg-[#f5f0e8]'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Registrations List */}
      <div className="space-y-4">
        {filteredRegistrations.map((registration) => (
          <div
            key={registration.id}
            className="rounded-2xl bg-card border border-[var(--border)] p-6 hover:shadow-md transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Left: User Info */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {registration.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-[var(--foreground)]">{registration.name}</h3>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${getStatusBadge(registration.status)}`}>
                      {registration.status.charAt(0).toUpperCase() + registration.status.slice(1)}
                    </span>
                    {registration.faydaVerified && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">
                        <Shield className="w-3 h-3" />
                        Fayda {registration.faydaScore}%
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                      <Mail className="w-4 h-4" />
                      {registration.email}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                      <Phone className="w-4 h-4" />
                      {registration.phone}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                      <MapPin className="w-4 h-4" />
                      {registration.address}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                      <Calendar className="w-4 h-4" />
                      Applied: {registration.dateApplied}
                    </div>
                  </div>
                  {registration.notes && (
                    <div className="mt-2 p-2 rounded-lg bg-[#f5f0e8] text-xs text-[var(--foreground)]">
                      {registration.notes}
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 lg:flex-col">
                <button
                  onClick={() => setSelectedRegistration(registration)}
                  className="flex-1 lg:flex-none lg:w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-card hover:bg-[#f5f0e8] transition-all text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
                {registration.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleApprove(registration)}
                      className="flex-1 lg:flex-none lg:w-full px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Approve
                    </button>
                    <button
                      onClick={() => {
                        setSelectedRegistration(registration);
                        setShowRejectModal(true);
                      }}
                      className="flex-1 lg:flex-none lg:w-full px-4 py-2 rounded-xl bg-rose-600 text-white hover:bg-rose-700 transition-all text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <XCircle className="w-4 h-4" />
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRegistrations.length === 0 && (
        <div className="rounded-2xl bg-card border border-[var(--border)] p-12 text-center">
          <ClipboardList className="w-12 h-12 text-[var(--muted-foreground)] mx-auto mb-3" />
          <p className="text-[var(--muted-foreground)]">No registrations found</p>
        </div>
      )}

      {/* View Details Modal */}
      {selectedRegistration && !showRejectModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl border border-[var(--border)] max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-serif font-bold text-[var(--foreground)]">
                Registration Details
              </h3>
              <button
                onClick={() => setSelectedRegistration(null)}
                className="p-2 rounded-lg hover:bg-[#f5f0e8] transition-colors"
              >
                <X className="w-5 h-5 text-[var(--muted-foreground)]" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Applicant Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center font-bold text-xl">
                    {selectedRegistration.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[var(--foreground)]">{selectedRegistration.name}</h4>
                    <p className="text-sm text-[var(--muted-foreground)]">{selectedRegistration.id}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
                    <p className="text-xs text-[var(--muted-foreground)] mb-1">Email</p>
                    <p className="text-sm font-medium text-[var(--foreground)]">{selectedRegistration.email}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
                    <p className="text-xs text-[var(--muted-foreground)] mb-1">Phone</p>
                    <p className="text-sm font-medium text-[var(--foreground)]">{selectedRegistration.phone}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
                    <p className="text-xs text-[var(--muted-foreground)] mb-1">Address</p>
                    <p className="text-sm font-medium text-[var(--foreground)]">{selectedRegistration.address}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
                    <p className="text-xs text-[var(--muted-foreground)] mb-1">Date Applied</p>
                    <p className="text-sm font-medium text-[var(--foreground)]">{selectedRegistration.dateApplied}</p>
                  </div>
                </div>
              </div>

              {/* Fayda Verification */}
              <div className="p-4 rounded-xl border border-[var(--border)] bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-900">Fayda Verification</h4>
                </div>
                {selectedRegistration.faydaVerified ? (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-blue-900">Verification Score</span>
                      <span className="text-lg font-bold text-blue-900">{selectedRegistration.faydaScore}%</span>
                    </div>
                    <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${selectedRegistration.faydaScore}%` }}
                      />
                    </div>
                    <p className="text-xs text-blue-700 mt-2">✓ Identity and residency verified by Fayda</p>
                  </div>
                ) : (
                  <p className="text-sm text-blue-700">Pending Fayda verification</p>
                )}
              </div>

              {/* Notes */}
              {selectedRegistration.notes && (
                <div>
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">Notes</h4>
                  <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
                    <p className="text-sm text-[var(--foreground)]">{selectedRegistration.notes}</p>
                  </div>
                </div>
              )}

              {/* Actions */}
              {selectedRegistration.status === 'pending' && (
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  <button
                    onClick={() => handleApprove(selectedRegistration)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Approve Registration
                  </button>
                  <button
                    onClick={() => setShowRejectModal(true)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-rose-600 text-white hover:bg-rose-700 transition-all text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <XCircle className="w-4 h-4" />
                    Reject Registration
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && selectedRegistration && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl border border-[var(--border)] max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-serif font-bold text-[var(--foreground)]">
                Reject Registration
              </h3>
              <button
                onClick={() => {
                  setShowRejectModal(false);
                  setRejectReason('');
                }}
                className="p-2 rounded-lg hover:bg-[#f5f0e8] transition-colors"
              >
                <X className="w-5 h-5 text-[var(--muted-foreground)]" />
              </button>
            </div>

            <p className="text-sm text-[var(--muted-foreground)] mb-4">
              You are about to reject the registration for <strong>{selectedRegistration.name}</strong>.
              Please provide a reason for rejection.
            </p>

            <div className="mb-6">
              <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">
                Reason for Rejection
              </label>
              <textarea
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                rows={4}
                placeholder="Enter rejection reason..."
                className="w-full px-3 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm resize-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setShowRejectModal(false);
                  setRejectReason('');
                }}
                className="flex-1 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-card hover:bg-[#f5f0e8] transition-all text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleReject}
                disabled={!rejectReason.trim()}
                className="flex-1 px-4 py-2.5 rounded-xl bg-rose-600 text-white hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm font-medium"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
